import React, { useEffect, useState } from 'react'
import {FaGithub, FaMoon, FaSun} from 'react-icons/fa'
import { Outlet } from 'react-router-dom';

export default function Layout() {
// const [mode, setMode] = useState('day')
    
function changeColor() {
    document.body.classList.toggle("dark-theme");
    
    // let btn = document.getElementById('switchmode')
    // if (mode === 'day'){
    //     btn.innerHTML = `<FaMoon />`;
    //     setMode('night')
    // } 
    // else{
    //   btn.innerHTML = `<FaSun />`; 
    //   setMode('day')
    // }
  }

useEffect(()=>{
const hamburger = document.querySelector(".hamburger");
const navMenuMobile = document.querySelector(".nav-menu-mobile");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenuMobile.classList.toggle("active");
}
}, [])

  return (
    <>
      <header className="header">
        <nav className="header-nav">
          <a href="/" className="header-title">
            note.
          </a>
          <ul className="nav-menu-desktop">
            <li>
              <a href="/assignments">Assignments</a>
            </li>
            <li>
              <a href="/assignments/new">Add Assignment</a>
            </li>
            <li>
              <a href="/notes">Notes</a>
            </li>
            <li>
              <a href="/notes/new">Add Note</a>
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
          <a href="/assignments">Assignments</a>
        </li>
        <li className="nav-item">
          <a href="/assignments/new">Add Assignment</a>
        </li>
        <li className="nav-item">
          <a href="/notes">Notes</a>
        </li>
        <li className="nav-item">
          <a href="/notes/new">Add Note</a>
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
          style={{fontFamily: "Roboto Mono, monospace",fontSize:"13px",color: "var(--font-color)"}}
        >
          <a
            href="https://www.github.com/Ananya2001-an/note"
            target="_blank"
            rel='nonreferrer'
          >
            <FaGithub/>
          </a>
        </div>
      </footer>
    </>
  );
}
