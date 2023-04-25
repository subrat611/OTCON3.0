import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./navbar.scss";

export default function NavBar() {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <>
      <nav className="navbar-wrapper">
        <h2>OTCON 3.0</h2>
        <ul className="navbar-links">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/conference-schedule">Conference Schedule</Link>
          </li>
          <li>
            <Link to="/registration">Registration</Link>
          </li>
          <li>
            <Link to="/404">Call for papers</Link>
          </li>
          <li>
            <Link to="/404">Committees</Link>
          </li>
          <li>
            <Link to="/404">Advisory Board</Link>
          </li>
          <li>
            <Link to="/404">Keynote speaker</Link>
          </li>
          <li>
            <Link to="/404">Contact us</Link>
          </li>
        </ul>
        <div className="navbar-mob-wrapper">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
            onClick={() => setToggleNav((prev) => !prev)}
          >
            <path
              fill="#f6f4f2"
              stroke="currentColor"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="32"
              d="M80 160h352M80 256h352M80 352h352"
            />
          </svg>
          <ul
            className={
              toggleNav ? "navbar-mob-links visible" : "navbar-mob-links"
            }
          >
            <li onClick={() => setToggleNav((prev) => !prev)}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setToggleNav((prev) => !prev)}>
              <Link to="/conference-schedule">Conference Schedule</Link>
            </li>
            <li onClick={() => setToggleNav((prev) => !prev)}>
              <Link to="/registration">Registration</Link>
            </li>
            <li onClick={() => setToggleNav((prev) => !prev)}>
              <Link to="/404">Call for papers</Link>
            </li>
            <li onClick={() => setToggleNav((prev) => !prev)}>
              <Link to="/404">Committees</Link>
            </li>
            <li onClick={() => setToggleNav((prev) => !prev)}>
              <Link to="/404">Advisory Board</Link>
            </li>
            <li onClick={() => setToggleNav((prev) => !prev)}>
              <Link to="/404">Keynote speaker</Link>
            </li>
            <li onClick={() => setToggleNav((prev) => !prev)}>
              <Link to="/404">Contact us</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
