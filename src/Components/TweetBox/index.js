import React, { useState } from 'react';
import "./style.css";
import { Avatar, Button } from "@material-ui/core";
import db from "../../firebase";

const TweetBox = () => {
    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    const sendTweet = e => {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "Ramon Garza",
            username: "rgtercero5406",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "https://i.pinimg.com/originals/9d/e4/94/9de49481e0c866734d1362ea6f1bb608.jpg"
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://i.pinimg.com/originals/9d/e4/94/9de49481e0c866734d1362ea6f1bb608.jpg" />
                    <input
                        onChange={e => setTweetMessage(e.target.value)}
                        value={tweetMessage}
                        placeholder="What's Happening?"
                        type="text"
                    />
                </div>
                <input
                    value={tweetImage}
                    onChange={(e) => setTweetImage(e.target.value)}
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter Image URL"
                    type="text"
                />
                <Button onClick={sendTweet} type="submit" className="tweetBox__button">
                    Tweet
                </Button>
            </form>
        </div>
    )
}

export default TweetBox;
