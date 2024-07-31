//Form validation

export const validateName = (value) =>
  /^[A-Za-z]+\s[A-Za-z]+$/.test(value) ? true : "Please enter your name";

export const validateUsername = (value) =>
  /^[A-Za-z]+$/.test(value) ? true : "Username should contain only letters";

export const validateEmail = (value) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? true : "Invalid email address";

export const validatePhone = (value) =>
  /^\d+$/.test(value) ? true : "Phone number should contain only numbers";

export const validateWebsite = (value) =>
  /^(ftp|http|https):\/\/[^ "]+$/.test(value) ? true : "Invalid website URL";

export const validateCompanyName = (value) =>
  value.length > 0 ? true : "Company name is required";

export const validateRole = (value) =>
  value.length > 0 ? true : "Role is required";
