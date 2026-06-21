import Dashboard from "../Dashboard";
import { Link } from "react-router-dom";
import "./index.css";

const NotFound = () => {
  return (
    <div className="pageNotFound-container">
      <div>
        <h1>404</h1>
        <p>Page Not Found</p>
        <Link to="/" className="dashboard-link">Back to DashBoard</Link>
      </div>
    </div>
  );
};

export default NotFound;
