import React from "react";
import "./style.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "../SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNone from "@material-ui/icons/NotificationsNone";
import Messages from "@material-ui/icons/Message";
import Bookmarks from "@material-ui/icons/Bookmark";
import Lists from "@material-ui/icons/List";
import PersonOutline from "@material-ui/icons/PersonOutline";
import MoreHorizOutlined from "@material-ui/icons/MoreHorizOutlined";




const Sidebar = () => {
    return (
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon />
            {/* SidebarOptions */}
            <SidebarOption Icon={HomeIcon} text="Home" />
            <SidebarOption Icon={SearchIcon} text="Explore" />
            <SidebarOption Icon={NotificationsNone} text="Notifications" />
            <SidebarOption Icon={Messages} text="Messages" />
            <SidebarOption Icon={Bookmarks} text="Bookmarks" />
            <SidebarOption Icon={Lists} text="Lists" />
            <SidebarOption Icon={PersonOutline} text="Profile" />
            <SidebarOption Icon={MoreHorizOutlined} text="More" />

            {/* Button -> Tweet */}
        </div>
    );
}

export default Sidebar;