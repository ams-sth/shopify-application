export const validateForm = (FormData) => {
  let errors = {};
  let isValid = true;

  if (!FormData.firstName) {
    errors.firstName = "Please enter your first name";
    isValid = false;
  }

  if (!FormData.lastName) {
    errors.lastName = "Please enter your last name";
    isValid = false;
  }

  if (!FormData.email) {
    errors.email = "Please enter your email address";
    isValid = false;
  } else if (!/\S+@\S+\.\S+/.test(FormData.email)) {
    errors.email = "Please enter a valid email address";
    isValid = false;
  }

  if (!FormData.password) {
    errors.password = "Please enter your password";
    isValid = false;
  }

  return { errors, isValid };
};
