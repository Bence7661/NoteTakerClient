import InputField from "../../components/InputField/InputField";
import Card from "../../components/Card/Card";
import AnimatedButton from "../../components/AnimatedButton/AnimatedButton";
import "./RegisterForm.css";

function RegisterForm() {
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
    <div className="register-form">
      <form>
        <Card 
          title="Registration"
          bodyContent={          
            inputFields.map((field) => (
              <InputField key={field.id} {...field}/>
            ))
          }
          footerContent={
            <AnimatedButton buttonText="Register"></AnimatedButton>
          }
        >
        </Card>
      </form>
    </div>
  );
}

export default RegisterForm;