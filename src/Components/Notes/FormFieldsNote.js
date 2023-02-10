import React from 'react'
import FilePondUpload from "../FilePondUpload.js";

export default function FormFieldsNote() {
  return (
    <>
      <div className="form-row">
        <div className="form-item">
          <label>Name:</label>
          <input type="text" name="name" />
        </div>
        <div className="form-item">
          <label>Cover Image:</label>
          <FilePondUpload/>
        </div>
      </div>
      <div className="form-row">
        <div className="form-item">
          <label>Note:</label>
          <textarea style={{ fontSize: "20px" }} name="note" />
        </div>
      </div>
    </>
  );
}
