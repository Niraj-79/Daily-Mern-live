console.log("Error Handling (Extending Errors)");

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validate(input) {
  if (!input) {
    throw new ValidationError("Input is required");
  }
}

try {
  validate("");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Validation Error", error.message);
  }
}
