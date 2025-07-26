import InputField from "../../components/InputField/InputField";
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import "./Register.css";

function Register() {
  const inputFields = [
    {
      id: "usernameInput",
      label: "Username",
      type: "text",
      placeholder: "Username",
      required: true,
    },
    {
      id: "passwordInput",
      label: "Password",
      type: "password",
      placeholder: "Password",
      required: true,
    },
    {
      id: "confirmPasswordInput",
      label: "Confirm Password",
      type: "password",
      placeholder: "Confirm password",
      required: true,
    }
  ];

  return (
    <div className="register-page">
      <form>
        <Card title="Registration">
          {inputFields.map((field) => (
            <InputField key={field.id} {...field}/>
          ))}
          <Button buttonText="Register"></Button>
        </Card>
      </form>
    </div>
  );
}

export default Register;