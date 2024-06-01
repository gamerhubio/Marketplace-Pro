class CustomAPIError extends Error {
  constructor(message: string) {
    super(message);
    this.name = this.constructor.name; // Optional: To set the error name to the class name
    Error.captureStackTrace(this, this.constructor);
  }
}

export default CustomAPIError;
