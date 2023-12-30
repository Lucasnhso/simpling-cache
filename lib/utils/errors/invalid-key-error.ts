export class InvalidKeyError extends Error {
  constructor () {
    super("Key can't be a empty string");
    this.name = "InvalidKeyError";
  }
};
