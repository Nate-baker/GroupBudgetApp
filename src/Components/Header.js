import { Navbar } from "./Navbar";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleNavbar } from "../Features/navbarSlice";

const Header = () => {
  const navbar = useSelector((state) => state.navbarOpen.value);
  const dispatch = useDispatch();

  return (
    <div className="header">
      {!navbar && <h1 className="header-text">Group Budget</h1>}
      {!navbar && (
        <button
          className="navbar-open"
          onClick={() => dispatch(toggleNavbar())}
        >
          ≡
        </button>
      )}
      {navbar && <Navbar />}
      {navbar && (
        <button
          className="navbar-close"
          onClick={() => dispatch(toggleNavbar())}
        >
          X
        </button>
      )}
    </div>
  );
};

module.exports.Header = Header;
