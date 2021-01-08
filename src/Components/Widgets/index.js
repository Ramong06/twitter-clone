import React from 'react'
import "./style.css";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/SearchOutlined";


const Widgets = () => {
    return (
        <div className="widgets">
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>
            <div className="widgets__widgetsContainer">
                <h2>What's Happening</h2>
                <TwitterTweetEmbed tweetId={"1347049835246071809"} />
                <TwitterTimelineEmbed sourceType="profile" screenName="rgtercero5406" options={{ height: 400 }} />
                <TwitterShareButton url={"https://www.facebook.com/ramon.garzaiii"} options={{ text: "#reactjs is lit!", via: "ramon.garzaiii" }} />
            </div>
        </div>
    )
}

export default Widgets;
