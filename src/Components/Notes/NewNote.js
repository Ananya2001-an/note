import React, {useRef} from 'react'
import axios from 'axios';

export default function NewNote() {
const nameRef = useRef();
const noteRef = useRef();
let imgURL = ''

const loadFile = (e)=>{
let output = document.getElementById("output");
output.hidden = false;
imgURL = URL.createObjectURL(e.target.files[0]);
output.src = imgURL
}
    
const addNote = async(e)=>{
    e.preventDefault();
    const note = {
      name: nameRef.current.value,
      note: noteRef.current.value,
      img: imgURL
    };

    axios.post("https://5000-ananya2001an-noteserver-qb5v37z4aau.ws-us86.gitpod.io/notes", note)
    .then(res => console.log(res))
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
              <label for="file" className='file-label'>Choose cover image</label>
              <input
                type="file"
                id='file'
                accept="image/*"
                onChange={(e) => loadFile(e)}
              />
            </div>
          </div>
          <div className="form-row" style={{ display: "flex", justifyContent: "center", alignItems:"center" }}>
              <img
                hidden
                id="output"
                width="200px"
                height="200px"
                style={{ objectFit: "contain" }}
              />
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
