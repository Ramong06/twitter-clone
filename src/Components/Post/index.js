import { Avatar } from '@material-ui/core';
import React from 'react'
import "./style.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser"

const Post = ({ displayName, username, verified, text, image, avatar }) => {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="https://i.pinimg.com/originals/9d/e4/94/9de49481e0c866734d1362ea6f1bb608.jpg" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Ramon Garza
                            <span>
                                <VerifiedUserIcon className="post__badge" />    
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>This is some dummy text for this Twitter Clone</p>
                    </div>
                </div>
                <img src="https://i.pinimg.com/originals/05/3c/39/053c39f4c14d99d4bc143c05dc3ca219.gif" alt="super-mario" />
            </div>
        </div>
    )
}

export default Post;