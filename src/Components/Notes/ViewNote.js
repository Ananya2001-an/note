import React from 'react'

export default function ViewNote() {
  return (
    <>
    <div className="cover-image">
    <img width="100%" height="100%" src="" />
    </div>
    <div className="emoji-input">
        {/* emoji picker */}
    </div>
    <div className="container">
    <h2 className="page-header"></h2>
    <div className="inner-container">
        <p style=""></p>

        <div class="btn-row">
            <a className="btn btn-primary" href="/notes/<%= note.id %>/edit">Edit</a>
        <form action="<%= url %>?_method=DELETE" method="POST">
            <button className="btn btn-primary" type="submit">
                Delete
            </button>
            </form>
        </div>
    </div>
    </div>
    </>
  )
}
