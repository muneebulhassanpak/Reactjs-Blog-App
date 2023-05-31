import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loginActions } from "../store/store";
import { useCookies } from "react-cookie";
import { asyncLogoutHandler } from "../store/store";
const Navbar = () => {
  const [cookie, setCookie] = useCookies(["userToken"]);
  const store = useSelector((store) => store);
  const loginStatus = store.login.isLoggedIn;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginHandler = (e) => {
    e.preventDefault();
    navigate("/login");
  };
  const logoutHandler = (e) => {
    e.preventDefault();
    setCookie("userToken", "");
    const id = localStorage.getItem("userID");
    dispatch(asyncLogoutHandler(id));
    localStorage.removeItem("userID");
    navigate("/");
  };
  return (
    <section className="bg-regal-blue">
      <header className="flex justify-around items-center text-white max-w-6xl mx-auto py-3">
        <div className="flex-1">
          <h2 className="font-voll text-white text-3xl">Logo</h2>
        </div>
        <nav className="flex-1 font-poppins">
          <ul
            className={`flex ${
              loginStatus ? "justify-between " : "justify-evenly"
            } items-center `}
          >
            <li className="py-2">
              <Link to="/">Home</Link>
            </li>
            {loginStatus && (
              <>
                <li className="py-2">
                  <Link to="/create-recipie">Create Recipie</Link>
                </li>
                <li className="py-2">
                  <Link to="/saved-recipies">Saved Recipies</Link>
                </li>
              </>
            )}

            {!loginStatus && (
              <>
                <li className="py-2 px-4 bg-morange  rounded-md">
                  <Link to="/register">Register</Link>
                </li>
                <li className="py-2 px-4 bg-myellow  rounded-md">
                  <Link onClick={loginHandler}>Login</Link>
                </li>
              </>
            )}
            {loginStatus && (
              <li
                className="py-2 px-4 bg-myellow  rounded-md"
                onClick={logoutHandler}
              >
                <Link>Logout</Link>
              </li>
            )}
          </ul>
        </nav>
      </header>
    </section>
  );
};

export default Navbar;
