import React, { useState } from 'react'
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom'
import moment from 'moment'

const Write = () => {
  
  const state = useLocation().state
  const [value, setValue] = useState(state?.desc || "");
  const [title, setTitle] = useState(state?.title || "");
  const [file, setFile] = useState(null);
  const [category, setCategory] = useState(state?.category || "");
  const navigate = useNavigate();

const upload = async () => {
  try {
    const formData = new FormData();
    formData.append("file", file)
    const res = await axios.post("/upload", formData)
    return res.data
  } catch (err) {
    console.log(err);
  }
}

  const handleSubmit = async e=>{
    e.preventDefault();
    const imgUrl =  await upload();

    try {
      state ? (await axios.put(`/posts/${state.id}`, {
        title,
        desc:value,
        category,
        img: file ? imgUrl: ""
    }))
    : await axios.post(`/posts/`, {
      title,
      desc:value,
      category,
      img: file ? imgUrl : "",
      date: moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
    });
    navigate("/")
    } catch (err) {
      console.log(err);
    }
  }
  
  return (
    <div className='add'>
      <div className="content">
        <input type="text" value={title} placeholder='Title' onChange={e=>setTitle(e.target.value)}/>
        <div className="editorContainer">
          <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span>
            <b>Status: </b> Draft
          </span>
          <span>
            <b>Visibility: </b> Public
          </span>
          <input style={{display:"none"}} type="file" name="" id="file" onChange={e=>setFile(e.target.files[0])}/>
          <label className='file' htmlFor="file">Upload an image</label>
          <div className="buttons">
            <button>Save as draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className="cat-item">
          <h2>Category</h2>
          <div className="cat">
            <input type="radio" checked={category === "nature"} name="cat" value="nature" id="nature" onChange={e=>setCategory(e.target.value)} />
            <label htmlFor="nature"> Nature</label>
          </div>
          <div className="cat">
            <input type="radio" checked={category === "food"} name="cat" value="food" id="food" onChange={e=>setCategory(e.target.value)} />
            <label htmlFor="food"> Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Write