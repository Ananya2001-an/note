import React from 'react'
import FormFieldsAssign from './FormFieldsAssign'
export default function NewAssign() {
  return (
    <div className="container">
    <h2 className="page-header">New Assignment</h2>
    <div className="inner-container">
    <form action="/assignments" method="POST">
        <FormFieldsAssign/>
        <div className="btn-row">
            <a className="btn btn-primary" href="/assignments">Cancel</a>
            <button className="btn btn-primary" type="submit">Create</button>
        </div>
    </form>
    </div>
    </div>
  )
}
