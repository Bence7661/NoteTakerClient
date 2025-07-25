import InputField from "../../components/InputField/InputField";
import Card from "../../components/Card/Card";
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
    }
  ];

  return (
    <div className="register-page">
      <form>
        <Card title="Registration">
          {inputFields.map((field) => (
            <InputField key={field.id} {...field}/>
          ))}
        </Card>
      </form>
    </div>
  );
}

export default Register;