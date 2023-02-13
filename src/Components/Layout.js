import React, { useEffect } from "react";
import { FaGithub, FaMoon, FaSun } from "react-icons/fa";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {
  const navigate = useNavigate();
  function changeColor() {
    document.body.classList.toggle("dark-theme");
  }

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const navMenuMobile = document.querySelector(".nav-menu-mobile");

    hamburger.addEventListener("click", mobileMenu);

    function mobileMenu() {
      hamburger.classList.toggle("active");
      navMenuMobile.classList.toggle("active");
    }
  }, []);

  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <a
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
            className="header-title"
          >
            note.
          </a>
          <ul className="nav-menu-desktop">
            <li>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/assignments")}
              >
                Assignments
              </a>
            </li>
            <li>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/assignments/new")}
              >
                Add Assignment
              </a>
            </li>
            <li>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/notes")}
              >
                Notes
              </a>
            </li>
            <li>
              <a
                style={{ cursor: "pointer" }}
                onClick={() => navigate("/notes/new")}
              >
                Add Note
              </a>
            </li>
            <li>
              <button
                id="switchmode"
                onClick={() => changeColor()}
                className="mode-icon"
              >
                <FaMoon />
              </button>
            </li>
          </ul>

          <div className="hamburger">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
        </nav>
      </header>
      <ul className="nav-menu-mobile">
        <li className="nav-item">
          <a
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/assignments")}
          >
            Assignments
          </a>
        </li>
        <li className="nav-item">
          <a
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/assignments/new")}
          >
            Add Assignment
          </a>
        </li>
        <li className="nav-item">
          <a style={{ cursor: "pointer" }} onClick={() => navigate("/notes")}>
            Notes
          </a>
        </li>
        <li className="nav-item">
          <a
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/notes/new")}
          >
            Add Note
          </a>
        </li>
        <li className="nav-item">
          <button
            id="switchmode"
            onClick={() => changeColor()}
            className="mode-icon"
          >
            <FaMoon />
          </button>
        </li>
      </ul>

      <Outlet />

      <footer>
        <div
          className="social"
          style={{
            fontFamily: "Roboto Mono, monospace",
            fontSize: "13px",
            color: "var(--font-color)",
          }}
        >
          <a
            href="https://www.github.com/Ananya2001-an/note"
            target="_blank"
            rel="nonreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </footer>
    </>
  );
}
