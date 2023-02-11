import React from "react";

export default function FormFieldsAssign() {
  return (
    <>
      <div className="form-row">
        <div className="form-item">
          <label>Name:</label>
          <input type="text" name="name" />
        </div>
        <div className="form-item">
          <label>Deadline:</label>
          <input type="date" name="deadline" />
        </div>
      </div>
      <div className="form-row">
        <div className="form-item">
          <label>Subject:</label>
          <input type="text" name="subject" />
        </div>
        <div className="form-item">
          <label>Priority:</label>
          <select name="priority">
            <option value="true">Important</option>
            <option value="false">Not Important</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="form-item">
          <label>Attach image of assignment</label>
        </div>
      </div>
    </>
  );
}
