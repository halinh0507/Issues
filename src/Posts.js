import React from 'react';
import {BrowserRouter as Router, Link, Redirect, Switch, Route } from "react-router-dom";
import './Posts.css';
import { useState } from "react";
// import nav from './nav';
import PostDetails from './PostDetails';

const Posts = ({ posts, loading }) => {
  const[show, setShow] = useState(false);
  // const { posts } = Posts.posts;

  if (loading) {
    return <h2>Loading...</h2>;
  }


  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
               
  

      <button onClick={() => setShow(!show)}><strong> Issue {post.id} </strong></button>
      {show && <PostDetails post={post} />}  
      <br></br>       
              <strong>Title: </strong>{post.title}
              <br></br>
              <strong>Number: </strong> {post.number}
              <br></br>
              <strong>State: </strong> {post.state}
              <br></br>
              <br></br>
              <br></br>
        </li>
      ))}
    </ul>
  );
};

  

export default Posts;