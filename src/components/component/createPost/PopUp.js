import React, { useState } from 'react'
import "./popUp.css"

import Close from "../../../icons/plus.svg"
import Information from "../../../icons/information.png"
import Covid19 from "../../../icons/heart.svg"
import Bag from "../../../icons/handbag.png"
import Wordl from "../../../icons/world.png"
import AdIcon from "../../../sidebarIcons/megaphone.svg"
import PhotosIcon from "../../../sidebarIcons/photos.png"
import SmileIcon from "../../../sidebarIcons/emoji.svg"
import MoreIcon from "../../../sidebarIcons/more.png"

function PopUp(props) {
    const [active, setActive] = useState(false)
    const [postValue, setPostValue] = useState("")
    const [postHeight, setpostHeight] = useState(false)
    const closePopup=()=>{
        props.showPopup(false);
    }

    const handleClass=()=>{
        setActive(!active)
    }
    const savePost = (e) => {
        setPostValue(e.target.value);
    };

    const setPostHeight=(e)=>{
        const val = postValue.length;

        if (val >= 116) {
            setpostHeight(true);
        }
        if(val < 116){
            setpostHeight(false);
        }
    }
    

    return (
        <div className="popup">
            <div className="wrapper">
            <div className="forscroll">
            <div className="popupWrapper">
                <div className="header">
                    <h2>Create Post</h2>
                    <span onClick={closePopup}><img src={Close} alt="" className="closePopup"/></span>
                </div>
                <div className="postSection">
                    <div className="userdetails">
                        <img src="https://cdn.britannica.com/73/182873-050-E1C686F4/Chris-Hemsworth-Thor-Thor-The-Dark-World.jpg" alt="" className="userImg"/>
                        <div className="pageName">
                            <span>Fast Marketing-Online</span>
                            <button className="forPublic"><img src={Wordl} alt="" />Public</button>
                        </div>
                    </div>
                    <div className="post">
                        <textarea name="" 
                        placeholder="Write something to Fast Merketing-On..." 
                        onKeyUp={savePost}
                        onChange={setPostHeight}
                        style={{fontSize:postHeight ? "17px" : "23px"}}
                        />
                    </div>
                    <div className="colorImoji">
                        <button className="color">Aa</button>
                        <button className="imoji"><img src={SmileIcon} alt="" /></button>
                    </div>
                    <div className="addImgOther">
                        <span>Add to Your Post</span>
                        <span className="iconWrapper">
                        <span className="imgBg"><span className="createIcon"><img src={Covid19} alt="" /></span></span>
                        <span className="imgBg"><label For="forPostImg"><img src={PhotosIcon} alt="" /></label> <input type="file" id="forPostImg"/></span>
                        <span className="imgBg"><img src={Bag} alt="" /></span>
                        <span className="imgBg"><img src={MoreIcon} alt="" /></span>
                        </span>
                    </div>
                    <div className="bostPost">
                        <span className="boostBg"><img src={AdIcon} alt=""/></span>
                        <div className="boostDetai">
                            <h1 className="boostTitle">Boost Post</h1>
                            <p className="boostP">Get more people to see and engage with your post. You'll choose settigs after you click post.</p>
                        </div>
                            <button onClick={handleClass} className={`${active && "active"}`}></button>
                    </div>
                    <div className="postInfo">
                        <span className="postBg"><img src={Information} alt="" className="postInfoBg"/></span>
                        
                            <p className="postInfoP">Access more publishing options and get more insights on your posts performance in<button>Publishing Tools.</button>
                            </p>
                    </div>
                    <button className={`${postValue != "" ? "postActive" : "postBtn"}`}>Post</button>
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default PopUp
