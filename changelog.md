## 0.0.22 - 2026-01-20
* refactor: remove User-Agent header from client requests
* Clean up HTTP client configuration by removing the User-Agent header from default request headers. This change simplifies the header configuration while maintaining SDK identification through the remaining X-Fern headers.
* Key changes:
* Remove "User-Agent" header from default client headers
* Maintain SDK identification through X-Fern-* headers
* Simplify client initialization configuration
* 🌿 Generated with Fern

