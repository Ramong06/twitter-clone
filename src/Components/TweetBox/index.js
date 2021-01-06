import React from 'react'
import "./style.css";
import { Avatar, Button } from "@material-ui/core";

const TweetBox = () => {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src="https://i.pinimg.com/originals/9d/e4/94/9de49481e0c866734d1362ea6f1bb608.jpg" />
                    <input placeholder="What's Happening?" type="text" />
                </div>
                <input className="tweetBox__imageInput" placeholder="Enter Image URL" type="text" />
                <Button className="tweetBox__button">Tweet</Button>
            </form>
        </div>
    )
}

export default TweetBox;
