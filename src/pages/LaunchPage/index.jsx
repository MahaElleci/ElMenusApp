import { useEffect } from "react";
import { getUsers } from "../../services/users-apis";
import { Link } from "react-router-dom";

import "./styles.scss";
const LaunchPage = () => {
  useEffect(() => {
    getUsers()
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("usersData", JSON.stringify(data));
      });
  }, []);
  return ( 
    <div className="launch-page"> 
    <img src="elmenus-logo.jpg"/>
      <h2>El Menus App</h2>
      <Link to={"/login"} className="nav-link">
        {" "}
        Start App{" "}
      </Link>
    </div>
  );
};

export default LaunchPage;
