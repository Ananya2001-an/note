import React from 'react'

export default function ViewAssign() {
  return (
    <div className="container">
      <h2 className="page-header"></h2>

      <div className="inner-container">
        <embed width="100%" height="400" src="" type="application/pdf" />
        <p style="">
          <span style="">Deadline: </span>
        </p>
        <p style="">
          <span style="">Subject: </span>
        </p>
        <div class="btn-row">
          <a
            class="btn btn-primary"
            href="/assignments/<%= assignment.id %>/edit"
          >
            Edit
          </a>
          <form action="<%= url %>?_method=DELETE" method="POST">
            <button className="btn btn-primary" type="submit">
              Delete
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
