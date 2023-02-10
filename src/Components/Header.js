import React from 'react'

export default function Header() {

    function changeColor() {
    let element = document.body;
    element.classList.toggle("dark-theme");
    }
  return (
    <header className ="header">
      <nav className ="header-nav">
        <a href="/" className="header-title">
          note.
        </a>
        <ul>
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
            <button id="switchmode" onClick={()=>changeColor()} className="mode-icon">
              {/* <i class="fa fa-sun-o"></i> */}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
