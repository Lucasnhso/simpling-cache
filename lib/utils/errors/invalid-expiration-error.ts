export class InvalidExpirationError extends Error {
  constructor () {
    super("Expiration can't be negative");
    this.name = "InvalidExpirationError";
  }
};
