import signUpImage from "../../assets/images/signup.svg";
import Illustration from "../Illustration";
import SignUpForm from "../SignUpForm";

export default function SignUp() {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration image={signUpImage} alt="SignUp Image" />
        <SignUpForm />
      </div>
    </>
  );
}
