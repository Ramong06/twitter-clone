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
            <Post displayName="Ramon Garza" username="rgtercero5406" verified={true} text="This looks like it's working!" avatar="https://i.pinimg.com/originals/9d/e4/94/9de49481e0c866734d1362ea6f1bb608.jpg" image="https://i.pinimg.com/originals/05/3c/39/053c39f4c14d99d4bc143c05dc3ca219.gif" />
            
            
            
        </div>
    )
}

export default Feed;
