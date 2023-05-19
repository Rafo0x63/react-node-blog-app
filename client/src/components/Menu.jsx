import React from 'react'
import {Link} from "react-router-dom"
import {useEffect, useState} from 'react'
import axios from 'axios'

function Menu({category}) {

  const [posts, setPosts] = useState([])

  useEffect(()=>{
    const fetchData = async () =>{
      try {
        const res = await axios.get(`/posts/?cat=${category}`);
        setPosts(res.data)
      } catch (err) {
        console.log(err);
      }
    }
    fetchData();
  }, [category])






  return (
    <div className='menu'>
        <h1>Other posts you may like</h1>
        {posts.map(post=>(post.id != window.location.href.split("/")[4] &&
            <div className="post" key={post.id}>
              <Link className='menu-link' to={`/post/${post.id}`}>
                <img src={`/upload/${post.img}`} alt="" />
                <h2>{post.title}</h2>
                <button>Read more</button>
              </Link>
            </div>
        ))}
    </div>
  )
}

export default Menu