export const validateStringNotEmpty = (value) => {
  if (value.trim().lenght === 0) {
    throw new Error("Invalid input, must not be empty");
  }
};

export const validateNumber = (number) => {
  if (isNaN(number)) {
    throw new Error("Invalid input, must be a number");
  }
};
