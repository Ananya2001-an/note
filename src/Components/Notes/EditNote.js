import React from 'react'
import FormFieldsNote from './FormFieldsNote'

export default function EditNote() {
  return (
    <div className="container">
        <h2 className="page-header">Edit Note</h2>
        <div className="inner-container">
        <form action="/notes/<%= note.id %>?_method=PUT" method="POST">
           <FormFieldsNote/>
            <div className="btn-row">
                <a className="btn btn-primary" href="/notes">Cancel</a>
                <button className="btn btn-primary" type="submit">Update</button>
            </div>
        </form>
        </div>
        </div>
  )
}
