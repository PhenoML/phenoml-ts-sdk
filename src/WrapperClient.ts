/**
 * Simple wrapper client that extends phenomlClient with username/password authentication.
 * Generates token lazily on first API call when username/password are provided.
 */

import * as environments from "./environments.js";
import * as core from "./core/index.js";
import { phenomlClient } from "./Client.js";
import { Auth } from "./api/resources/authtoken/resources/auth/client/Client.js";

export declare namespace PhenoMLClient {
    export interface Options {
        environment?: core.Supplier<environments.phenomlEnvironment | string>;
        baseUrl?: core.Supplier<string>;
        username?: string;
        password?: string;
        token?: core.Supplier<core.BearerToken>;
        headers?: Record<string, string | core.Supplier<string | undefined> | undefined>;
        fetcher?: core.FetchFunction;
    }
}

// Create a token supplier that generates tokens on-demand
class TokenSupplier {
    private _tokenPromise?: Promise<string>;
    private _cachedToken?: string;
    private _username: string;
    private _password: string;
    private _baseUrl: string;
    private _fetcher?: core.FetchFunction;

    constructor(username: string, password: string, baseUrl: string, fetcher?: core.FetchFunction) {
        this._username = username;
        this._password = password;
        this._baseUrl = baseUrl;
        this._fetcher = fetcher;
    }

    async get(): Promise<string> {
        if (this._cachedToken) {
            return this._cachedToken;
        }

        if (this._tokenPromise) {
            this._cachedToken = await this._tokenPromise;
            return this._cachedToken;
        }

        this._tokenPromise = this._generateToken();
        this._cachedToken = await this._tokenPromise;
        return this._cachedToken;
    }

    private async _generateToken(): Promise<string> {
        const authClient = new Auth({
            baseUrl: this._baseUrl,
            fetcher: this._fetcher,
        });

        const response = await authClient.generateToken({
            username: this._username,
            password: this._password,
        });

        return response.token;
    }
}

export class PhenoMLClient extends phenomlClient {
    constructor(options: PhenoMLClient.Options) {
        if (options.token && (options.username || options.password)) {
            throw new Error("Cannot provide both 'token' and 'username'/'password'");
        }

        // If token provided, use directly
        if (options.token) {
            super(options as phenomlClient.Options);
            return;
        }

        // Validate auth options
        if (!options.username || !options.password) {
            throw new Error("Must provide both 'username' and 'password'");
        }

        // Create token supplier for username/password
        const baseUrl =
            (typeof options.baseUrl === "string" ? options.baseUrl : undefined) ||
            (typeof options.environment === "string" ? options.environment : undefined) ||
            environments.phenomlEnvironment.Default;

        const tokenSupplier = new TokenSupplier(options.username, options.password, baseUrl, options.fetcher);

        super({
            ...options,
            token: tokenSupplier.get.bind(tokenSupplier) as core.Supplier<core.BearerToken>,
            username: undefined,
            password: undefined,
        } as phenomlClient.Options);
    }
}
