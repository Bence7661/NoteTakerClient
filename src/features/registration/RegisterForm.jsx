import "./RegisterForm.css";
import InputField from "../../components/InputField/InputField";
import Card from "../../components/Card/Card";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import { useState } from "react";
import { Validate } from "./RegisterFormValidator"

//Needs e-mail field.
//Needs username and e-mail validation (see if taken)
//I might only implement that server side.
//Though for practice I want to do calls to BE while typing.
function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});
  const onChangeDelegate = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }))
  };

  const onSubmitDelegate = (e) => {
    e.preventDefault();
    const validationResult = Validate(formData);
    if (Object.keys(validationResult) === 0) {
      //CALL SERVER
      console.log("Valid:", formData)
    }
    else {
      setErrors(validationResult);
    }
  };

  const onBlurDelegate = (e) => {
    const { name } = e.target;
    setErrors(prev => ({
      ...prev,
      [name]: Validate(formData, name)[name]
    }))
  }

  const inputFields = [
    {
      id: "username",
      label: "Username",
      type: "text",
      placeholder: "Username",
      value: formData.username,
      error: errors.username,
      onChange: onChangeDelegate,
      onBlur: onBlurDelegate
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
      value: formData.password,
      error: errors.password,
      onChange: onChangeDelegate,
      onBlur: onBlurDelegate
    },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm password",
      value: formData.confirmPassword,
      error: errors.confirmPassword,
      onChange: onChangeDelegate,
      onBlur: onBlurDelegate
    }
  ];

  return (
    <div className="register-form">
      <form onSubmit={onSubmitDelegate}>
        <Card
          title="Registration"
          bodyContent={
            inputFields.map((field) => (
              <InputField key={field.id} {...field} />
            ))
          }
          footerContent={
            <AnimatedButton buttonText="Register" type="submit" />
          }
        >
        </Card>
      </form>
    </div>
  );
}

export default RegisterForm;