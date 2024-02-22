import React, {useState} from 'react';
import axios from 'axios';
import StateContext from "./context";



const State = (props) => {
  const [blog, setBlogs] = useState([])
  const [article, setArticle] = useState(null)
  const fetchBlogs = async() => {
    const res = await axios.get("https://blogs-backend-api.vercel.app/api/blog/fetchallblogs");
    setBlogs(res.data)
  }

  const addUser = async(body) => {
    const headers = {
      "Content-Type": "aaplication/json"
    }
    const res = await axios.post("https://blogs-backend-api.vercel.app/api/auth/register",body, {headers});
    console.log(res.data);
    localStorage.setItem("token", res.data)
  }
  const logUser = async(body) => {
    const headers = {
      "Content-Type": "aaplication/json"
    }
    const res = await axios.post("https://blogs-backend-api.vercel.app/api/auth/login",body, {headers});
    console.log(res.data);
    localStorage.setItem("token", res.data)
  }

  const getBlog = async(id) => {
    
    const res = await axios.get(`https://blogs-backend-api.vercel.app/api/blog/blogs/${id}`);
     setArticle(res.data.blog)
  }
  
    return (
    <StateContext.Provider value={{fetchBlogs, blog, addUser, logUser, article, getBlog}}>
      {props.children}
    </StateContext.Provider>
  )
}

export default State;