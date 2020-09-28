let userInput: unknown;

// You can use never when nothing is returned from a function

function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("chicken not found", 500);
