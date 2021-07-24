import React, { useState } from 'react'
import "./home.css"
import Camera from "../../icons/photo-camera.png"
import Edit from "../../sidebarIcons/pencil.png"
import Promote from "../../sidebarIcons/megaphone.svg"
import View from "../../sidebarIcons/eye.png"
import Search from "../../sidebarIcons/search.svg"
import More from "../../sidebarIcons/more.png"
import DownIcon from "../../icons/down-filled-triangular-arrow.svg"
import DownBlueIcon from "../../sidebarIcons/down-arrow.png"
import GroupIcon from "../../sidebarIcons/group.svg"
import CreatePost from '../component/createPost/CreatePost'
import UserAbout from '../component/userAbout/UserAbout'
import PopUp from '../component/createPost/PopUp'
import { Link } from 'react-router-dom'
import UserHome from '../component/userHome/UserHome'
import UserVideo from '../component/userVideo/UserVideo'
import UserPhoto from '../component/userPhotos/UserPhoto'
import UserMore from '../component/userMore/UserMore'

function Home() {
    
    const [active, setActive] = useState("Home");
    const [popup, setPopup] = useState(false);
    const [showMoreActive, setShowMoreActive] = useState(false);
    const [usersShow, setUsersShow] = useState(false);

    const menuButton =(e)=>{
        setActive(e.target.innerText);
        console.log(e.target.innerText);
        setShowMoreActive(false)
    }

    const showMenuButton =()=>{
        setShowMoreActive(!showMoreActive)
    }

    const setUsers =()=>{
        setUsersShow(!usersShow)
    }

    return (
        <div className={`home ${popup && "default"}`}>
            <div className="homeWrapper">
                <div className="homeTop">
                    <div className="homeHero">
                    <img src="https://timelinecovers.pro/facebook-cover/download/stunning-little-flowers-facebook-cover.jpg" alt="" className="coverImg"/>
                    <button className="coverEdit"><img src={Camera} alt="" className="btnIcon"/>Edit</button>
                    </div>
                    <div className="profileDetails">
                        <div className="profileSections">
                            <div className="profileSection">
                            <img src="https://cdn.britannica.com/73/182873-050-E1C686F4/Chris-Hemsworth-Thor-Thor-The-Dark-World.jpg" alt="" className="profileImg"/>
                            <span className="cameraBg">    
                            <img src={Camera} alt="" />
                            </span>
                            </div>
                            <div className="userDetails">
                                <h1 className="usersName">Fast Marketing-Online</h1>
                                <div className="userEdit">
                                    <span className="username">@WTFastmarket-Education</span>
                                    <button className="userEditBtn">
                                        <img src={Edit} alt="" className="btnEdit"/>
                                        Edit See Offers
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="userMenu">
                    <div className="leftMenu">
                        <ul className="leftMenuList">
                        <Link to="/Home/home">
                            <span className="forHover"><li className={`leftMenuItem ${active == "Home"? "active" : "" || window.location.pathname == "/Home/home" && setActive("Home")}`} onClick={menuButton}>Home</li></span>
                        </Link>

                        <Link to="/Home/about">
                            <li className={`leftMenuItem ${active == "About"? "active" : "" || window.location.pathname == "/Home/about" && setActive("About")}`} onClick={menuButton}>About</li>
                        </Link>

                        <Link to="/Home/videos">
                            <li className={`leftMenuItem ${active == "Videos"? "active" : ""}`} onClick={menuButton}>Videos</li>
                        </Link>

                        <Link to="/Home/photos">
                            <li className={`leftMenuItem ${active == "Photos"? "active" : ""}`} onClick={menuButton}>Photos</li>
                        </Link>

                        <Link to={window.location.pathname}>
                            <li className = "leftMenuItem" onClick = {showMenuButton} >More<img src = {DownIcon} alt = "" className = "buttonIcon"/></li>
                        </Link>
                        </ul>
                    </div>
                    <div className="rightMenu">
                        <button className="promoteBtn active"><img src={Promote} alt="" className="buttonIcon"/>Promote</button>
                        <button className="promoteBtn"><img src={View} alt="" className="buttonIcon"/>View as Visitor</button>
                        <button className="promoteBtn"><img src={Search} alt="" className="buttonIcon"/></button>
                        <button className="promoteBtn"><img src={More} alt="" className="buttonIcon"/></button>
                    </div>
                </div>
                </div>
                <div className="divition">
                {window.location.pathname == "/" && 
                <UserHome />
                }
                {window.location.pathname == "/Home" && 
                <UserHome />
                }
                {window.location.pathname == "/Home/home" && 
                <UserHome />
                }
                {window.location.pathname == "/Home/about" && 
                <UserAbout />
                }
                {window.location.pathname == "/Home/videos" && 
                <UserVideo />
                }
                {window.location.pathname == "/Home/photos" && 
                <UserPhoto />
                }
                {showMoreActive && 
                <UserMore show={showMoreActive} setShow={setShowMoreActive}/>
                }

                <CreatePost showPopup={setPopup} toggle={popup} usersShow={usersShow}/>
                
                </div>
                <span className="addingIcon">
                    <img src={GroupIcon} alt="" className="groupIcon" onClick={setUsers}/>
                </span>
                {popup &&
                <PopUp showPopup={setPopup} toggle={popup}/>
                }
            </div>
        </div>
    )
}

export default Home
