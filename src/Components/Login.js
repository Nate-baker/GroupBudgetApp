import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const Login = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  return (
    <div className="login-page">
      <div className="login-title">
        <h1>Login</h1>
      </div>
      <div className="login-info">
        <h3 className="create-account-link">
          Need to <Link to="/create-account">create an account</Link>?
        </h3>
        <input className="Email" type="email" placeholder="Email"></input>
        <input
          className="password"
          type="password"
          placeholder="Password"
          minLength="8"
        ></input>
        <button className="submit-button">Login</button>
      </div>
    </div>
  );
};

module.exports.Login = Login;
