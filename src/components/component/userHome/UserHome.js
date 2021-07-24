import React from 'react'
import "./userHome.css"

import Edit from "../../../postIcons/edit.png"
import Like from "../../../postIcons/like (1).png"
import Magic from "../../../postIcons/magic-wand.png"
import Next from "../../../postIcons/next.svg"


function UserHome() {
    return (
        <div className="userHomeWrapper">
        <div className="userHome">
            <div className="userHomeSec1Top">
                <span className="userHomeSec1Toptag">Create Ad</span>
                <span className="userHomeSec1Toptag2">See all</span>
            </div>
            <div className="userHomeSec1Top1Bottom">How would you like to grow your business?</div>
            <div className="userHomeSec1Midl">
                <div className="userHomeSec1Midleleft">
                    <span className="leftimgBack"><img src={Edit} alt="" className="userHomeSec1MidleleftImg"/></span>
                    <span className="userHomeSec1MidleleftTitle">Create New Ad</span>
                    <span className="userHomeSec1MidleleftDec">Make an ad using text, photos or videos to promote your business</span>
                </div>

                <div className="userHomeSec1MidleRight">
                    <span className="rightimgBack"><img src={Like} alt="" className="userHomeSec1MidleRightImg"/></span>
                    <span className="userHomeSec1MidleRightTitle">Boost a Post</span>
                </div>
            </div>
            <div className="userHomeSec1Bottom">
                <span className="userHomeSec1BottomIconBg"><img src={Magic} alt=""/></span>
                <div className="userHomeSec1Bottomdetail">
                    <div className="userHomeSec1BottomDetailWrapper">
                    <span className="userHomeSec1BTitle">Automated Ads</span>
                    <span className="userHomeSec1BDec">Get personalized ads that adjust over time to help you get better results.</span>
                    </div>
                    <img src={Next} alt="" className="userHomeSec1BottomArrow"/>
                </div>
            </div>
        </div>
        <div className="userHome">
            userHome
        </div>
        </div>
    )
}

export default UserHome
