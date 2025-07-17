import InputField from "../../components/InputField/InputField";
import Card from "../../components/Card/Card";
import "./Register.css";

function Register() {
  return (
    <div className="register-page">
      <Card title="Registration">
        <InputField
          label="Username"
          type="text"
          placeholder="Enter your username"
        />
        <InputField
          label="Password"
          type="password"
        />
      </Card>
    </div>
  );
}

export default Register;