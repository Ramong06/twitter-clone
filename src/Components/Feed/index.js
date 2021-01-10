import React, { useState, useEffect } from 'react'
import "./style.css";
import TweetBox from "../TweetBox";
import Post from "../Post";
import db from "../../firebase";

const Feed = () => {
    const [posts, setPosts] = useState([]);

      useEffect(() => {
          db.collection("posts").onSnapshot(snapshot => (
            setPosts(snapshot.docs.map(doc => doc.data()))
        ))
  }, []);

    return (
        <div className="feed">
            {/* HEADER */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* TWEETBOX */}
            <TweetBox />    


            {/* POST */}
            {posts.map(post => (
                < Post
                    displayName={post.displayName}
                    username={post.username}
                    verified={post.verified}
                    text={post.text}
                    avatar={post.avatar}
                    image={post.image}
                />
            ))}
             
        </div>
    )
}

export default Feed;
