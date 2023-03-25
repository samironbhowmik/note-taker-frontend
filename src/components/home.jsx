import React, { useEffect, useState } from "react";
import "../components/home.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
function Home() {

    const navigate = useNavigate()
    const [data, setData] = useState()
    const [fetch, setFetch] = useState(false)
    const [search, setSearch] = useState("")

    // const[update, setUpdate] = useState("")

    useEffect(()=>{
        getData()
    },[])
    const getData = async()=>{
        const headers = {"authorization":localStorage.getItem("token")}
        const res = await axios.get("https://notestaker.onrender.com/notes", {headers})
        console.log(res.data);
        setData(res.data.notes)
        setFetch(true)
    }

    const handleDelete = async(id)=>{
        const headers = {"authorization":localStorage.getItem("token")}
        const res = await axios.delete(`https://notestaker.onrender.com/notes/${id}`, {headers})
        console.log(res.data);

        const newList = data.filter((item)=> item._id !==id)
        setData(newList)
    }

    const handleUpdate=async(id)=>{
        // e.preventDefault()
        const headers = {"authorization":localStorage.getItem("token")}
        const res = await axios.put(`https://notestaker.onrender.com/notes/${id}`, {headers})
        console.log(res.data);
    }

    // let email = window.localStorage.getItem("email")

    const handleLogout = async(e)=>{
        e.preventDefault()
        console.log("working");
        const res =  await axios.get("https://notestaker.onrender.com/logout")
        console.log(res);

        if(res.data.status==="success"){
            sessionStorage.removeItem("token", res.data.token)
            // alert("Log Out successfull")
            navigate("/")
        }
        
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
            <div className="right">
                <Link to="/" onClick={handleLogout}>LOG OUT</Link>
            </div>
          </div>
        <input type="text" name="search" className="search" placeholder="search" onChange={(e)=>{setSearch(e.target.value)}}/>

        <div className="show-data">

            {fetch&&data.filter((item)=>{
                return search.toLowerCase() === ""
                ? item
                : item.title.toLowerCase().includes(search)
            }).map((item,id)=>{
                return(
                    <div className="show" key={id}>
                        <p>Month:{fetch&&item?.month} Year:{fetch&&item.year} Time:{fetch&&item.time}</p>
                        <br />
                        <h3>Title: {fetch&&item?.title}</h3>
                        <p>Description: {fetch&&item?.description}</p>
                        <br />

                    <div className="buttons">
                        <button className="update" onClick={()=>{handleUpdate(item._id)}}>Update</button>
                        <button className="delete" onClick={()=>{handleDelete(item._id)}}>Delete</button>
                        </div>
                    </div>
                )
            })}
        </div>



      </div>
    </div>
  );
}

export default Home;
