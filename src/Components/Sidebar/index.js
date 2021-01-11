import React from "react";
import "./style.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "../SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNone from "@material-ui/icons/NotificationsNone";
import Mail from "@material-ui/icons/MailOutline";
import Bookmarks from "@material-ui/icons/BookmarkBorder";
import Lists from "@material-ui/icons/ListAlt";
import PersonOutline from "@material-ui/icons/PersonOutline";
import MoreHorizOutlined from "@material-ui/icons/MoreHorizOutlined";
import Switch from "../Switch";
import { Button } from "@material-ui/core";




const Sidebar = () => {
    return (
        <div className="sidebar">

            {/* Twitter icon */}
            <TwitterIcon className="sidebar__twitterIcon" />

            {/* SidebarOptions */}
            <SidebarOption active  Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNone} text="Notifications" />
            <SidebarOption Icon={Mail} text="Messages" />
            <SidebarOption Icon={Bookmarks} text="Bookmarks" />
            <SidebarOption Icon={Lists} text="Lists" />
            <SidebarOption Icon={PersonOutline} text="Profile" />
            <SidebarOption Icon={MoreHorizOutlined} text="More" />

            {/* Button -> Tweet */}
            <Button variant="outlined" className="sidebar__tweet" fullWidth>Tweet</Button>
        </div>
    );
}

export default Sidebar;