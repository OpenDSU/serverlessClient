function getBaseURL() {
    if (typeof window !== "undefined") {
        return window.location.origin;
    }
    return "http://127.0.0.1:8080";
}

module.exports = getBaseURL;