import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Redirect, Link} from 'react-router-dom';

const Generator = () => {
  const token = window.localStorage.getItem ('token');

  const axiosWithAuth = axios.create ({
    headers: {
      autho: token
    },
    baseURL: 'http://localhost:5000/welcome',
  });

  const [user, setUser] = useState ([]);
  useEffect (() => {
    axiosWithAuth.get ().then (res => {
      console.log (res.data);
      setUser ([res.data]);
    });
  }, []);

  return (
    <div className="generatorPage">
      <nav>
        <Link to="/"> Home </Link>
        <Link to="/"> Blogs </Link>

      </nav>
      {user.map (userinfo => {
        return (
          <div className="profile-cont" key={userinfo.id}>
            <img className="avatar" src={userinfo.avatar} />
            <p> Welcome To Instant {userinfo.name}!</p>
          </div>
        );
      })}
      <div className="generatorForm">
        <h1> Instant</h1>
        <input placeholder="Title" name="title" />
        <input placeholder="Content" name="Content" />
        <input placeholder="Image Url" name="image" />
        <button> Generate </button>

      </div>

    </div>
  );
};

export default Generator;
