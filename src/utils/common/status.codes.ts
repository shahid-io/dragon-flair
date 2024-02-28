export const StatusCodes = {
    STATUS_OK: 200, // Success and OK
    STATUS_CREATED: 201, // Successfully created
    STATUS_ACCEPTED: 202, // Accepted but not yet processed
    STATUS_NO_CONTENT: 204, // Success but no content to return
    STATUS_MOVED_PERMANENTLY: 301, // Resource has been moved permanently
    STATUS_FOUND: 302, // Resource found, but temporarily under a different URI
    STATUS_SEE_OTHER: 303, // See other URI using GET
    STATUS_NOT_MODIFIED: 304, // Resource not modified since last request
    STATUS_TEMPORARY_REDIRECT: 307, // Temporary redirect, preserve method
    STATUS_PERMANENT_REDIRECT: 308, // Permanent redirect, preserve method
    STATUS_BAD_REQUEST: 400, // Bad request syntax or cannot fulfill request
    STATUS_UNAUTHORIZED: 401, // Authentication is required and has failed or has not been provided
    STATUS_FORBIDDEN: 403, // Server understands request but refuses to authorize it
    STATUS_NOT_FOUND: 404, // Requested resource could not be found
    STATUS_METHOD_NOT_ALLOWED: 405, // Method not allowed for the requested resource
    STATUS_NOT_ACCEPTABLE: 406, // Requested resource is not acceptable according to the Accept headers sent in the request
    STATUS_CONFLICT: 409, // Request could not be processed because of conflict in the request
    STATUS_GONE: 410, // Resource requested is no longer available and will not be available again
    STATUS_UNPROCESSABLE_ENTITY: 422, // Request was well-formed but was unable to be followed due to semantic errors
    STATUS_TOO_MANY_REQUESTS: 429, // Too many requests in a given amount of time
    STATUS_INTERNAL_SERVER_ERROR: 500, // Generic error message when server encounters an unexpected condition
    STATUS_NOT_IMPLEMENTED: 501, // Server does not support the functionality required to fulfill the request
    STATUS_BAD_GATEWAY: 502, // Server received an invalid response from the upstream server
    STATUS_SERVICE_UNAVAILABLE: 503, // Service unavailable due to temporary overloading or maintenance
    STATUS_GATEWAY_TIMEOUT: 504, // Upstream server failed to send a request in the time allowed by the server
};

