import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../components/addNote.css";

function AddNote() {
    const navigate = useNavigate()
    const [title,setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleAdd=async(e)=>{
        e.preventDefault()
        // console.log("working");
        const res = await axios.post("https://notestaker.onrender.com/notes", {title:title, description:description})
        console.log(res);
        navigate("/home")
    }
  return (
    <div>
      <div className="container-box">
        <div className="navbar">
          <div className="left">
            <Link to="/home">Home</Link>
            <Link to="/addnote">Add Note</Link>
            <Link to="/delete">Delete</Link>
            <Link to="/export">Export</Link>
          </div>
          {/* <div className="right">
            <Link to="/logout">LOG OUT</Link>
          </div> */}
        </div>

        <div className="add-box">
          <form >
            <div className="box1">
              <label htmlFor="title">Title</label>
              <br />
              <input
                type="text"
                name="title"
                id="title"
                placeholder="Add Title"
                onChange={(e)=>{setTitle(e.target.value)}}
                value={title}
              />
            </div>
            <div className="box1">
              <label htmlFor="description">Description</label>
              <input
                type="text"
                name="description"
                id="description"
                placeholder="Whats on your mind!"
                onChange={(e)=>{setDescription(e.target.value)}}
                value={description}
              />
            </div>
            <button onClick={handleAdd}>Add Note</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddNote;
