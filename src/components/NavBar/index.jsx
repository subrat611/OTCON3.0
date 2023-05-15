import React, { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import "./navbar.scss";

export default function NavBar() {
  const [toggleNav, setToggleNav] = useState(false);

  // state for dropdown menus
  const [toggleDropMenu, setToggleDropMenu] = useState({
    committees: false,
    callforpaper: false,
  });

  const handleToggleAll = () => {
    setToggleDropMenu((prev) => ({
      ...prev,
      committees: false,
      callforpaper: false,
    }));
    setToggleNav((prev) => !prev);
  };

  const handleToggleMenu = (selectedLink) => {
    if (selectedLink !== "callforpaper") {
      setToggleDropMenu((prev) => ({
        ...prev,
        callforpaper: false,
      }));
    }

    if (selectedLink !== "committees") {
      setToggleDropMenu((prev) => ({
        ...prev,
        committees: false,
      }));
    }

    setToggleDropMenu(
      (prev) => ({
        ...prev,
        [selectedLink]: !prev[selectedLink],
      }),
      selectedLink
    );
  };

  const handleToggleNav = () => {
    setToggleNav((prev) => !prev);
  };

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
            <Link onClick={() => handleToggleMenu("callforpaper")}>
              Call for papers
            </Link>
            {toggleDropMenu.callforpaper && (
              <ul className="drop-down-menu">
                <li>
                  <Link
                    to="/callforpapper/instruction-for-author"
                    onClick={handleToggleMenu}
                  >
                    Instructions for Authors
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link onClick={() => handleToggleMenu("committees")}>
              Committees
            </Link>
            {toggleDropMenu.committees && (
              <ul className="drop-down-menu">
                <li>
                  <Link
                    to="/committees/organizing-committees"
                    onClick={handleToggleMenu}
                  >
                    Organizing Committees
                  </Link>
                </li>
                <li onClick={handleToggleMenu}>Technical Sponsor Committees</li>
                <li>
                  <Link
                    to="/committees/technical-program-committees"
                    onClick={handleToggleMenu}
                  >
                    Technical Program Committees
                  </Link>
                </li>
                <li>
                  <Link
                    to="/committees/extended-support-committees"
                    onClick={handleToggleMenu}
                  >
                    Extended Support Committees
                  </Link>
                </li>
                <li onClick={handleToggleMenu}>
                  Conference Execution Committees
                </li>
              </ul>
            )}
          </li>
          <li>
            <Link to="/advisory-board">Advisory Board</Link>
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
            <li onClick={handleToggleNav}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={handleToggleNav}>
              <Link to="/conference-schedule">Conference Schedule</Link>
            </li>
            <li onClick={handleToggleNav}>
              <Link to="/registration">Registration</Link>
            </li>
            <li>
              <Link onClick={() => handleToggleMenu("callforpaper")}>
                Call for papers
              </Link>
              {toggleDropMenu.callforpaper && (
                <ul className="drop-down-mob-menu">
                  <li>
                    <Link
                      to="/callforpapper/instruction-for-author"
                      onClick={handleToggleAll}
                    >
                      Instructions for Authors
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link onClick={() => handleToggleMenu("committees")}>
                Committees
              </Link>
              {toggleDropMenu.committees && (
                <ul className="drop-down-mob-menu">
                  <li>
                    <Link
                      to="/committees/organizing-committees"
                      onClick={handleToggleAll}
                    >
                      Organizing Committees
                    </Link>
                  </li>
                  <li onClick={handleToggleAll}>
                    Technical Sponsor Committees
                  </li>
                  <li>
                    <Link
                      to="/committees/technical-program-committees"
                      onClick={handleToggleAll}
                    >
                      Technical Program Committees
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/committees/extended-support-committees"
                      onClick={handleToggleAll}
                    >
                      Extended Support Committees
                    </Link>
                  </li>
                  <li onClick={handleToggleAll}>
                    Conference Execution Committees
                  </li>
                </ul>
              )}
            </li>
            <li onClick={handleToggleNav}>
              <Link to="/advisory-board">Advisory Board</Link>
            </li>
            <li onClick={handleToggleNav}>
              <Link to="/404">Keynote speaker</Link>
            </li>
            <li onClick={handleToggleNav}>
              <Link to="/404">Contact us</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
}
