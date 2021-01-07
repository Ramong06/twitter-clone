import React from 'react'
import "./style.css";
import TweetBox from "../TweetBox";
import Post from "../Post";

const Feed = () => {
    return (
        <div className="feed">
            {/* HEADER */}
            <div className="feed__header">
                <h2>Home</h2>
            </div>

            {/* TWEETBOX */}
            <TweetBox />    


            {/* POST */}
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            
            
            
        </div>
    )
}

export default Feed;
