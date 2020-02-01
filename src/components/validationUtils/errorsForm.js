export default function validation(values) {
  let errors = {};
  if (values.email) {
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email type is invalid";
  }
  if (!values.name) {
    errors.name = "Name is required";
  }
  if (!values.isAgree) {
    errors.isAgree = "You should accept the terms";
  }
  if (!values.message) {
    errors.message = "You should write something";
  }
  return errors;
}
