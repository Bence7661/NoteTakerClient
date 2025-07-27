import "./RegisterForm.css";
import InputField from "../../components/InputField/InputField";
import Card from "../../components/Card/Card";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import { useState } from "react";

function RegisterForm() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: ""
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }))
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.username.trim()) newErrors.username = "Required";

    console.log(!formData.password)
    console.log(formData.password.length < 6)
    if (!formData.password) {
      newErrors.password = "Required";
    }
    else if (formData.password.length < 6) {
      newErrors.password = "Min 6 characters";
    }

    if (!formData.confirmPassword) {
      newErrors.confirmPassword = "Required";
    }
    else if (formData.confirmPassword != formData.password) {
      newErrors.confirmPassword = "Must match password";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()){
      console.log("? Valid:", formData)
    }
  };

  const inputFields = [
    {
      id: "username",
      label: "Username",
      type: "text",
      placeholder: "Username",
      value: formData.username,
      error: errors.username,
      onChange: handleChange
    },
    {
      id: "password",
      label: "Password",
      type: "password",
      placeholder: "Password",
      value: formData.password,
      error: errors.password,
      onChange: handleChange
    },
    {
      id: "confirmPassword",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm password",
      value: formData.confirmPassword,
      error: errors.confirmPassword,
      onChange: handleChange
    }
  ];

  return (
    <div className="register-form">
      <form onSubmit={handleSubmit}>
        <Card 
          title="Registration"
          bodyContent={          
            inputFields.map((field) => (
              <InputField key={field.id} {...field}/>
            ))
          }
          footerContent={
            <AnimatedButton buttonText="Register" type="submit"/>
          }
        >
        </Card>
      </form>
    </div>
  );
}

export default RegisterForm;