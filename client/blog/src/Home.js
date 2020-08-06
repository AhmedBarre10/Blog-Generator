import React, { Component } from 'react';
import logo from './logo.svg';
import axios from 'axios'
import { set } from 'mongoose';
import {useState} from 'react'

class  Home extends Component {
  constructor(){
    super()
    this.state = {
      title:'',
      content:'',
      img: ''
    }
  }

 Change =(e)=>{
  e.preventDefault()

this.setState({[e.target.name]:e.target.value})
console.log(this.state)
}
 onSubmit =(e) =>{
  e.preventDefault()
  axios.post("http://localhost:5000/blog",this.state)
  .then(res =>{
    console.log(res.status)
  })
  
  

}



render(){ 
  

  const {title,content,img} = this.state
  return (
    <div className="Home">
      <form  onSubmit = {this.onSubmit}> 
      <label> Blog Title </label>
      <input className ="title" value = {title} type = "text" name = 'title' onChange = {this.Change}/>
     
      <label> Blog content</label>
      <textarea className ="content" value ={content} type = "text"  name = 'content' onChange = {this.Change}/>
      <label> Enter Image url *if you dont have a image url use this <br></br> <a href = "https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?cs=srgb&dl=blogging-blur-business-communication-261662.jpg&fm=jpg">https://images.pexels.com/photos/261662/pexels-photo-261662.jpeg?cs=srgb&dl=blogging-blur-business-communication-261662.jpg&fm=jpg</a> </label>
      <input className = "img" value = {img} type = "text"  name = 'img' onChange = {this.Change}/>

 <button type = 'submit'>
   Submit
 </button>
      </form>
    
    </div>
  );
}
}
export default Home;
