# HTTP Crash Course

## Table of Contents
- [HTTP vs HTTPS](#http-vs-https)
- [HTTP Headers](#http-headers)
  - [Common HTTP Headers](#common-http-headers)
- [HTTP Methods](#http-methods)
- [HTTP Status Codes](#http-status-codes)
- [HTTP Caching](#http-caching)
- [Cookies](#cookies)
- [References](#references)

## HTTP vs HTTPS

**HTTP (HyperText Transfer Protocol)** and **HTTPS (HyperText Transfer Protocol Secure)** are protocols used for transmitting data over the internet. Here are the key differences:

- **Security**:
  - **HTTP**: Data is sent in plaintext, making it vulnerable to interception by attackers.
  - **HTTPS**: Data is encrypted using SSL/TLS, providing a secure channel and protecting data from interception.

- **Port**:
  - **HTTP**: Uses port 80 by default.
  - **HTTPS**: Uses port 443 by default.

- **URL Prefix**:
  - **HTTP**: URLs start with `http://`.
  - **HTTPS**: URLs start with `https://`.

- **SEO**:
  - **HTTP**: Websites using HTTP may be ranked lower by search engines.
  - **HTTPS**: Websites using HTTPS are preferred by search engines and may receive a ranking boost.

## HTTP Headers

HTTP headers are key-value pairs sent between the client and the server with an HTTP request or response. They contain information such as the browser type, the page requested, and more.

### Common HTTP Headers

1. **General Headers**: Apply to both request and response messages.
   - `Cache-Control`: Directives for caching mechanisms.
   - `Connection`: Control options for the current connection.
   - `Date`: The date and time at which the message was originated.

2. **Request Headers**: Used in requests from the client to the server.
   - `Accept`: Media types that are acceptable for the response.
   - `Host`: The domain name of the server.
   - `User-Agent`: Information about the user agent (browser) making the request.

3. **Response Headers**: Used in responses from the server to the client.
   - `Server`: Information about the software used by the origin server.
   - `Set-Cookie`: Set a cookie to be stored by the client.

4. **Entity Headers**: Contain information about the body of the resource.
   - `Content-Length`: The size of the response body in bytes.
   - `Content-Type`: The media type of the resource.

## HTTP Methods

HTTP defines a set of request methods indicating the desired action to be performed for a given resource. The most common methods are:

- **GET**: Requests a representation of the specified resource. Requests using GET should only retrieve data.
- **POST**: Submits data to be processed to a specified resource, typically causing a change in state or side effects on the server.
- **PUT**: Replaces all current representations of the target resource with the request payload.
- **DELETE**: Deletes the specified resource.
- **HEAD**: Asks for a response identical to a GET request, but without the response body.
- **OPTIONS**: Describes the communication options for the target resource.
- **PATCH**: Applies partial modifications to a resource.
- **CONNECT**: Establishes a tunnel to the server identified by the target resource.
- **TRACE**: Performs a message loop-back test along the path to the target resource.

## HTTP Status Codes

HTTP status codes are issued by a server in response to a client's request. They are grouped into five classes:

- **1xx (Informational)**: The request was received, continuing process.
  - `100 Continue`: The initial part of a request has been received and has not yet been rejected by the server.
  - `101 Switching Protocols`: The server is switching protocols as requested by the client.
  - `102 Processing`: The server has received and is processing the request, but no response is available yet.
  - `103 Early Hints`: Primarily intended to be used with the `Link` header to allow the user agent to start preloading resources while the server prepares a response.

- **2xx (Success)**: The request was successfully received, understood, and accepted.
  - `200 OK`: The request has succeeded.
  - `201 Created`: The request has been fulfilled and has resulted in one or more new resources being created.
  - `202 Accepted`: The request has been accepted for processing, but the processing has not been completed.
  - `203 Non-Authoritative Information`: The request was successful but the enclosed payload has been modified from that of the origin server's 200 OK response by a transforming proxy.
  - `204 No Content`: The server successfully processed the request, and is not returning any content.
  - `205 Reset Content`: The server successfully processed the request, asks that the requester reset its document view, and is not returning any content.
  - `206 Partial Content`: The server is delivering only part of the resource due to a range header sent by the client.
  - `207 Multi-Status`: The message body that follows is by default an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.
  - `208 Already Reported`: Used inside a `<dav:propstat>` response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.
  - `226 IM Used`: The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.

- **3xx (Redirection)**: Further action needs to be taken in order to complete the request.
  - `300 Multiple Choices`: The request has more than one possible response. The user-agent or user should choose one of them.
  - `301 Moved Permanently`: The URL of the requested resource has been changed permanently. The new URL is given in the response.
  - `302 Found`: The URI requested is temporarily under a different URI.
  - `303 See Other`: The server sent this response to direct the client to get the requested resource at another URI with a GET request.
  - `304 Not Modified`: This is used for caching purposes. It tells the client that the response has not been modified, so the client can continue to use the same cached version of the response.
  - `305 Use Proxy`: Was defined in a previous version of the HTTP specification to indicate that a requested response must be accessed by a proxy. It has been deprecated due to security concerns regarding in-band configuration of a proxy.
  - `306 Switch Proxy`: No longer used. Originally meant "Subsequent requests should use the specified proxy."
  - `307 Temporary Redirect`: The server is currently responding to the request with a different URI. The client should use the same method for the request.
  - `308 Permanent Redirect`: The server is currently responding to the request with a different URI. The client should use the same method for the request and future requests.

- **4xx (Client Error)**: The request contains bad syntax or cannot be fulfilled.
  - `400 Bad Request`: The server could not understand the request due to invalid syntax.
  - `401 Unauthorized`: Although the HTTP standard specifies "unauthorized", semantically this response means "unauthenticated".
  - `402 Payment Required`: This response code is reserved for future use.
  - `403 Forbidden`: The client does not have access rights to the content.
  - `404 Not Found`: The server can not find requested resource.
  - `405 Method Not Allowed`: The request method is known by the server but is not supported by the target resource.
  - `406 Not Acceptable`: This response is sent when the web server, after performing server-driven content negotiation, doesn't find any content following the criteria given by the user agent.
  - `407 Proxy Authentication Required`: This is similar to 401 but authentication is needed to be done by a proxy.
  - `408 Request Timeout`: This response is sent on an idle connection by some servers, even without any previous request by the client.
  - `409 Conflict`: This response is sent when a request conflicts with the current state of the server.
  - `410 Gone`: This response is sent when the requested content has been permanently deleted from the server, with no forwarding address.
  - `411 Length Required`: The server rejects the request because the Content-Length header field is not defined and the server requires it.
  - `412 Precondition Failed`: The client has indicated preconditions in its headers which the server does not meet.
  - `413 Payload Too Large`: Request entity is larger than limits defined by server.
  - `414 URI Too Long`: The URI requested by the client is longer than the server is willing to interpret.
  - `415 Unsupported Media Type`: The media format of the requested data is not supported by the server.
  - `416 Range Not Satisfiable`: The range specified by the Range header field in the request can't be fulfilled.
  - `417 Expectation Failed`: This response code means the expectation indicated by the Expect request-header field can't be met by the server.
  - `418 I'm a teapot`: The server refuses the attempt to brew coffee with a teapot.
  - `421 Misdirected Request`: The request was directed at a server that is not able to produce a response.
  - `422 Unprocessable Entity (WebDAV)`: The request was well-formed but was unable to be followed due to semantic errors.
  - `423 Locked (WebDAV)`: The resource that is being accessed is locked.
  - `424 Failed Dependency (WebDAV)`: The request failed due to failure of a previous request.
  - `425 Too Early`: Indicates that the server is unwilling to risk processing a request that might be replayed.
  - `426 Upgrade Required`: The client should switch to a different protocol such as TLS/1.0.
  - `428 Precondition Required`: The origin server requires the request to be conditional.
  - `429 Too Many Requests`: The user has sent too many requests in a given amount of time ("rate limiting").
  - `431 Request Header Fields Too Large`: The server is unwilling to process the request because its header fields are too large.
  - `451 Unavailable For Legal Reasons`: The user-agent requested a resource that cannot legally be provided, such as a web page censored by a government.

- **5xx (Server Error)**: The server failed to fulfill a valid request.
  - `500 Internal Server Error`: The server has encountered a situation it doesn't know how to handle.
  - `501 Not Implemented`: The request method is not supported by the server and cannot be handled.
  - `502 Bad Gateway`: The server, while acting as a gateway or proxy, received an invalid response from the upstream server.
  - `503 Service Unavailable`: The server is not ready to handle the request.
  - `504 Gateway Timeout`: The server is acting as a gateway or proxy and did not get a response in time from the upstream server.
  - `505 HTTP Version Not Supported`: The HTTP version used in the request is not supported by the server.
  - `506 Variant Also Negotiates`: The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
  - `507 Insufficient Storage (WebDAV)`: The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.
  - `508 Loop Detected (WebDAV)`: The server detected an infinite loop while processing a request with "Depth: infinity".
  - `510 Not Extended`: Further extensions to the request are required for the server to fulfill it.
  - `511 Network Authentication Required`: The client needs to authenticate to gain network access.

## HTTP Caching

HTTP caching is a technique used to store copies of resources to reduce the load on the server, decrease latency, and improve user experience. Here are some key concepts and headers related to HTTP caching:

- **Cache-Control**: Directives for caching mechanisms in both requests and responses.
  - `no-cache`: The response can be stored by caches, but must be validated with the origin server before each use.
  - `no-store`: The response must not be stored by any cache.
  - `max-age`: The maximum amount of time a resource is considered fresh.
  - `public`: Indicates that the response can be cached by any cache.
  - `private`: Indicates that the response is intended for a single user and should not be stored by shared caches.

- **ETag (Entity Tag)**: A unique identifier for a specific version of a resource. It is used for web cache validation and conditional requests.
  - `ETag: "unique-identifier"`

- **Expires**: The date/time after which the response is considered stale.
  - `Expires: Wed, 21 Oct 2021 07:28:00 GMT`

- **Last-Modified**: The date and time at which the origin server believes the resource was last modified.
  - `Last-Modified: Wed, 21 Oct 2021 07:28:00 GMT`

## Cookies

Cookies are small pieces of data stored by the web browser that are sent to the server with each HTTP request. They are used for various purposes, including session management, personalization, and tracking.

- **Set-Cookie**: Used to send a cookie from the server to the client.
  - `Set-Cookie: sessionId=abc123; Expires=Wed, 21 Oct 2021 07:28:00 GMT; Secure; HttpOnly`

- **Cookie**: Used by the client to send the stored cookies to the server.
  - `Cookie: sessionId=abc123`

### Cookie Attributes
- `Expires` or `Max-Age`: Defines the lifespan of the cookie.
- `Secure`: Ensures the cookie is only sent over HTTPS.
- `HttpOnly`: Prevents the cookie from being accessed through client-side scripts.
- `SameSite`: Controls whether a cookie is sent with cross-site requests.

## References

For more detailed information, check out these resources:

- [MDN Web Docs - HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP)
- [MDN Web Docs - HTTP Headers](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers)
- [MDN Web Docs - HTTP Methods](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods)
- [MDN Web Docs - HTTP Status Codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)
- [MDN Web Docs - HTTP Caching](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching)
- [MDN Web Docs - HTTP Cookies](https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies)

---

This crash course provides a high-level overview of HTTP and its key components. For more detailed information, refer to the provided resources.
 
