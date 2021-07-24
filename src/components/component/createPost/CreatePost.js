import React, { useState } from 'react'
import "./createPost.css"

import Photo from "../../../sidebarIcons/photos.png"
import CheckIn from "../../../sidebarIcons/location.svg"
import Feeling from "../../../sidebarIcons/avatar.svg"
import Live from "../../../postIcons/video-camera-with-play-button.png"
import Event from "../../../postIcons/event.svg"
import Job from "../../../sidebarIcons/suitcase.png"
import Offer from "../../../postIcons/discount.png"
import Ad from "../../../sidebarIcons/megaphone.svg"
import AllPost from '../AllPost/AllPost'

function CreatePost(props) {


    const postHandle =()=>{
        props.showPopup(!props.toggle)
    }

    return (
        <div className="wrapperpost">
            { props.usersShow && 
            
        <div className="createPost">
            <div className="createPostWrapper">
                <div className="createPostTop">
                    <img src="https://cdn.britannica.com/73/182873-050-E1C686F4/Chris-Hemsworth-Thor-Thor-The-Dark-World.jpg" alt="" className="createPostTopImg"/>
                    <button className="createPostBtn" onClick={postHandle}>Create Post</button>
                </div>
                <div className="createPostBottom">
                    <div className="photo icons">
                        <img src={Photo} alt="" className="createPostBottomIcon"/>
                        <span className="createPostTitle">Photo/Video</span>
                    </div>
                    <div className="checkIn icons">
                        <img src={CheckIn} alt="" className="createPostBottomIcon"/>
                        <span className="createPostTitle">Check in</span>
                    </div>
                    <div className="feeling icons">
                        <img src={Feeling} alt="" className="createPostBottomIcon"/>
                        <span className="createPostTitle">Feeling/Activity</span>
                    </div>
                </div>
            </div>
        </div>
        }
        { props.usersShow &&
        
        <div className="createPostItem">
            <div className="createPostItemWrapper">
                    <div className="createPostTitle">Create</div>
                    <div className="createPostItemTitle"><img src={Live} alt="" className="createPostItemimg"/>Live</div>
                    <div className="createPostItemTitle"><img src={Event} alt="" className="createPostItemImgs"/>Event</div>
                    <div className="createPostItemTitle"><img src={Job} alt="" className="createPostItemImg"/>Job</div>
                    <div className="createPostItemTitle"><img src={Offer} alt="" className="createPostItemImg"/>Offer</div>
                    <div className="createPostItemTitle"><img src={Ad} alt="" className="createPostItemImg"/>Ad</div>
            </div>
        </div>
        }
        < AllPost users={props.usersShow}/ >
        </div>
    )
}

export default CreatePost
