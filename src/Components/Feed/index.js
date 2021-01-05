import React from 'react'
import "./style.css";
import TweetBox from "../TweetBox";

const Feed = () => {
    return (
        <div className="feed">
            {/* HEADER */}
            <div className="feed__header">
            <h2>Home</h2>

            {/* TWEETBOX */}
            <TweetBox />    


            {/* POST */}
            
            </div>
        </div>
    )
}

export default Feed;
