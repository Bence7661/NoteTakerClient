import InputField from "../../components/InputField/InputField";
import Card from "../../components/Card/Card";
import "./Register.css";

function Register() {
  return (
    <div className="register-page">
      <form>
        <Card title="Registration">
            <InputField
              id="usernameInput"
              label="Username"
              type="text"
              placeholder="Username"
              required={true}
            />
            <InputField
              id="passwordInput"
              label="Password"
              type="password"
              placeholder="Password"
              required={true}
            />
        </Card>
      </form>
    </div>
  );
}

export default Register;