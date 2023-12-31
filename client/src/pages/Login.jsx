import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>login</h4>
        <FormRow type="email" name="email" defaultValue="john@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secret" />
        <a href="/dashboard">
          <button type="button" className="btn btn-block">
            submit
          </button>
        </a>
        <a href="/dashboard">
          <button type="button" className="btn btn-block">
            explore app
          </button>
        </a>
        <p>
          Not yet a member?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Login;
