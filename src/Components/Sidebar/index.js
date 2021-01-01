import React from "react";
import "./style.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "../SidebarOption";

const Sidebar = () => {
    return (
        <div className="sidebar">
            {/* Twitter icon */}
            <TwitterIcon />
            {/* SidebarOption */}
            <SidebarOption text="Home" />
            <SidebarOption text="Explore" />
            <SidebarOption text="Notifications" />
            <SidebarOption text="Messages" />
            <SidebarOption text="Bookmarks" />
            <SidebarOption text="Lists" />
            <SidebarOption text="Profile" />
            <SidebarOption text="More" />

            {/* Button -> Tweet */}
        </div>
    );
}

export default Sidebar;