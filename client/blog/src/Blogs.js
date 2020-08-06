import React, { Component,useState,useEffect } from 'react'
import axios from "axios"

const Blogs=()=> {
    const[blog,setBlog]= useState([]);

        axios.get("http://localhost:5000/blog")
        .then(res =>{
        setBlog(res.data)
        })

    
        return (
            <div>
        {blog.map((blogs=>{
            return(
                <div key = {blogs.id}>
                                      <img src =  {blogs.img}/>

                   {blogs.title}
                   {blogs.content}
                  

                    </div>
            )
        }))}
             
                
            </div>
        )
    }
export default Blogs
