import React from 'react'
import FormFieldsAssign from './FormFieldsAssign'

export default function EditAssign() {
  return (
   <div className="container">
    <h2 className="page-header">Edit Assignment</h2>
    <div className="inner-container">
    <form action="/assignments/<%= assignment.id %>?_method=PUT" method="POST">
        <FormFieldsAssign/>
        <div className="btn-row">
            <a className="btn btn-primary" href="/assignments">Cancel</a>
            <button className="btn btn-primary" type="submit">Update</button>
        </div>
    </form>
    </div>
    </div>
  )
}
