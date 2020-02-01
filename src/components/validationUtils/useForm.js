import { useState, useEffect } from "react";

const useForm = (callback, errorsForm) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
    isAgree: false
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = e => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };
  const handleAgree = e => {
    setValues({
      ...values,
      isAgree: !values.isAgree
    });
  };
  const handleSubmit = e => {
    e.preventDefault();
    setErrors(errorsForm(values));
    setIsSubmitting(true);
    callback();
  };
  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback();
    }
  });
  return {
    values,
    handleChange,
    handleAgree,
    handleSubmit,
    errors
  };
};

export default useForm;
