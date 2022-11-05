
import SignInForm from "../../../sign-in-form/sign-in-form.component";
import SignupForm from "../../../sign-up-form/sign-up-form.component";
import './sign-in.styles.scss'
  const SignIn = () => {
  
    return (
      <div className="sign-in-page-container">
        <SignInForm/>
        <SignupForm />
      </div>
    );
  };
  
  export default SignIn;