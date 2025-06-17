class RateLimiter {
  constructor(limit, windowSizeMs) {
    this.limit = limit;
    this.windowSizeMs = windowSizeMs;
    this.requests = new Map();
  }

  isAllowed(userId) {
    const now = Date.now();

    if (!this.requests.has(userId)) {
      this.requests.set(userId, []);
    }

    const timestamps = this.requests.get(userId);

    while (timestamps.length > 0 && now - timestamps[0] > this.windowSizeMs) {
      timestamps.shift();
    }

    if (timestamps.length < this.limit) {
      timestamps.push(now);

      return true;
    }

    return false;
  }
}
