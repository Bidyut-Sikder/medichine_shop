import React from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {Logout} from "../apiServices/api";
import toast, {Toaster} from "react-hot-toast";

const Sidebar = () => {
  const navigate = useNavigate();
  const logout = async () => {
    const res = await Logout();
    if (res) {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      toast.success("Logout successfully.");
      window.location.href = "/";
    } else {
      toast.error("Logout Failed.");
    }
  };

  return (
    <>
      <Toaster />
      <nav
        id="sidebarMenu"
        className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
      >
        <div className="position-sticky pt-3 sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">
                <i className="bi bi-house"></i>
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/create"
                className="nav-link active"
                aria-current="page"
              >
                <i className="bi bi-house"></i>
                Create
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className="nav-link active"
                aria-current="page"
              >
                <i className="bi bi-house"></i>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <button onClick={logout} className="nav-link active">
                <i className="bi bi-house"></i>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
