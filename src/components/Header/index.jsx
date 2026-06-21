import "./index.css";
import Cookie from "js-cookie";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const onclickLogout = () => {
    const removedtoken = Cookie.remove("jwt_token");
    console.log(removedtoken);
    navigate("/login", { replace: true });
  };

  return (
    <nav className="navbar" >
      <Link to="/">
        <h1 className="brand-name" aria-label="Go to dashboard home">
          Go Business
        </h1>
      </Link>
      <div className="nav-btns">
        <button className="try-for-free">Try for free</button>
        <button className="logout-btn" onClick={onclickLogout}>
          Log out
        </button>
      </div>
    </nav>
  );
};

export default Header;
