export class InvalidExpirationError extends Error {
  constructor () {
    super("Expiration can't be a empty string");
    this.name = "InvalidExpirationError";
  }
};
