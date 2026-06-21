import "./index.css";
import { useState } from "react";
import Cookies from "js-cookie";
import { Navigate, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [showSubmiterrMsg, setSubmiterrMsg] = useState(false);
  const [errMsg, seterrMsg] = useState("");
  const navigate = useNavigate();

  const onSubmitSuccess = (token) => {
    Cookies.set("jwt_token", token, { expires: 30 });
    navigate("/", { replace: true });
  };

  const onSubmitFailure = (errMsg) => {
    setSubmiterrMsg(true);
    seterrMsg(errMsg);
  };

  const submitForm = async (e) => {
    e.preventDefault();
    const userDetails = { email: username, password: userpassword };
    const url =
      "https://v9fes04dwf.execute-api.eu-north-1.amazonaws.com/api/auth/signin";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    console.log(data);
    if (response.ok) {
      onSubmitSuccess(data.data.token);
    } else {
      onSubmitFailure(data.message);
    }
  };
  const jwtToken = Cookies.get("jwt_token");

  if (jwtToken !== undefined) {
    return <Navigate to="/" />;
  }

  return (
    <div className="login-section">
      <div className="login-card">
        <h1 className="Title">Go Business</h1>
        <p>Sign in to open your referral dashboard.</p>
        <form onSubmit={submitForm}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={username}
            id="email"
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={userpassword}
            id="password"
            onChange={(e) => setUserpassword(e.target.value)}
          />
          <button type="submit" className="login-btn">
            Sign in
          </button>
          {showSubmiterrMsg && <p className="error-msg">{errMsg}</p>}
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
