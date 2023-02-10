import React from 'react'
import FormFieldsNote from './FormFieldsNote'

export default function NewNote() {
  return (
    <div className="container">
    <h2 className="page-header">New Note</h2>
    <div className="inner-container">
    <form action="/notes" method="POST">
        <FormFieldsNote/>
        <div className="btn-row">
            <a className="btn btn-primary" href="/notes">Cancel</a>
            <button className="btn btn-primary" type="submit">Create</button>
        </div>
    </form>
    </div>
    </div>
  )
}
