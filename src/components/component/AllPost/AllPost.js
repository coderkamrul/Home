import React, { useState } from 'react'
import "./allPost.css"
import More from "../../../sidebarIcons/more.png"
import Imoji from "../../../sidebarIcons/emoji.svg"
import Help from "../../../icons/help-web-button.png"
import Public from "../../../icons/world.png"
import Like from "../../../postIcons/like.png"
import Comment from "../../../postIcons/chat.png"
import Share from "../../../postIcons/share.png"
import Camera from "../../../postIcons/camera.svg"


import Data from "./PostData"





function AllPost(props) {


    return (

        Data.map((data, index)=>{
            return(

        <div className="allPost" key={index}>
            <div className="allPostItem">
                <div className="allPostItemWrapper">
                <div className="allPostTop">
                    <div className="postOwner">
                    <img src={data.userImg} alt="" />
                    <div className="spanWrapper">
                        <span className="ownerName">{data.pageName}</span>
                        <span className="postTime">Published by <span>{data.publisherName} </span><img src={Help} alt="" className="helpIcon"/> . {data.publishDate} . <img src={Public} alt="" className="publicIcon"/></span>
                    </div>
                    </div>
                    <span className="imgHover"><img src={More} alt="" className="moreIcon"/></span>
                </div>
            </div>
                <div className="mainPost">
                    {data.postText &&
                    <div className="haspostText">{data.postText}</div>
                    }
                    {data.postImg &&
                    <img src={data.postImg} alt="" className="haspostImage"/>
                    }
                    {data.postVideo && 
                    <iframe width="100%" height="315" src={`https://www.youtube.com/embed/${data.postVideo}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    }
                </div>
                {props.users &&
                <div className="postReach">
                    <div className="peopleReached"><span>{data.peopleReached}</span>People Reached</div>
                    <div className="Engagement"><span>{data.engagement}</span>Engagement</div>
                    <div className="DistScore"><span>{data.distributionScore}</span>Distribution Score</div>
                    <div className="forBtn"><button className="postBoostBtn">Boost Post</button></div>
                </div>
                }
                <div className="likeCommentS">
                    <div className="like">{data.likes}</div>
                    <div className="commShare">
                    <div className="comment">{data.comments} Comments</div>
                    <div className="share">{data.shares} Share</div>
                    </div>
                </div>
                <div className="allPosticons">
                    <div className="likeIcon"><img src={Like} alt="" />Like</div>
                    <div className="commentIcon"><img src={Comment} alt="" />Comment</div>
                    <div className="shareIcon"><img src={Share} alt="" />Share</div>
                </div>
                <div className="forComment">
                    <img src={data.userImg} alt="" />
                    <div className="commentInput">
                        <input type="text" placeholder="Comment as Fast Marketing-Online"/>
                        <div className="forCommentsIcons">
                            <img src={Imoji} alt="" />
                            <img src={Camera} alt="" />
                            <img src={Imoji} alt="" />
                            <img src={Imoji} alt="" />
                        </div>
                    </div>
                </div>
                <span className="postLastText">Press Enter to post.</span>
            </div>
        </div>
        )
        })

    )
}

export default AllPost
