import React from 'react'

export default function Notes() {
  return (
   <div className="container">
        <h2 className="page-header">Search Notes</h2>
        <div className="inner-container">
        <form action="/notes" method="get">
            <div className="form-row">
                <div className="form-item">
                    <label>Name:</label>
                    <input type="text" name="name"/>
                </div>
            </div>
            <div className="form-row form-row-end">
                <button className="btn btn-primary" type="submit">Search</button>
            </div>

        </form>

        <br />
        <br />

        {/* filtered notes */}

        </div>
        </div>
  )
}
