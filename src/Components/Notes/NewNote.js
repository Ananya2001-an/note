import React, {useRef} from 'react'
import axios from 'axios'
import FilePondUpload from "../FilePondUpload.js";

export default function NewNote() {
const nameRef = useRef();
const noteRef = useRef();
const imgRef = useRef();
    
const addNote = (e)=>{
    e.preventDefault();
    console.log(nameRef.current.value)
    // const note = {
    //   name: nameRef.current.value,
    //   note: noteRef.current.value,
    //   img: URL.createObjectURL(imgRef.files[0])
    // };
    // axios.post(`${process.env.REACT_APP_SERVER_URL}/notes`, note)
    // .then(res => console.log(res))
  }

  return (
    <div className="container">
      <h2 className="page-header">New Note</h2>
      <div className="inner-container">
        <form onSubmit={(e) => addNote(e)}>
          <div className="form-row">
            <div className="form-item">
              <label>Name:</label>
              <input type="text" ref={nameRef} />
            </div>
            <div className="form-item">
              <label>Cover Image:</label>
              <FilePondUpload ref={imgRef} />
            </div>
          </div>
          <div className="form-row">
            <div className="form-item">
              <label>Note:</label>
              <textarea style={{ fontSize: "20px" }} ref={noteRef} />
            </div>
          </div>
          <div className="btn-row">
            <a className="btn btn-primary" href="/notes">
              Cancel
            </a>
            <button className="btn btn-primary" type="submit">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
