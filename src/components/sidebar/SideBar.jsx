import React, { useEffect, useState } from 'react'
import "./sidebar.css"
import Home from "../../sidebarIcons/home.svg"
import Ad from "../../sidebarIcons/megaphone.svg"
import Inbox from "../../sidebarIcons/inbox.svg"
import Business from "../../sidebarIcons/information.png"
import Jobs from "../../sidebarIcons/suitcase.png"
import Notifications from "../../sidebarIcons/bell.png"
import Analytic from "../../sidebarIcons/graph.png"
import Temp from "../../sidebarIcons/template.png"
import Trust from "../../sidebarIcons/trust.png"
import Edit from "../../sidebarIcons/pencil.png"
import Settings from "../../sidebarIcons/settings.png"
import Update from "../../icons/update.svg"
import { Link } from 'react-router-dom'



function SideBar() {
    const [activeList, setActiveList] = useState();

    const activeMenu = (e) => {
    var val = e.target.innerText;
    setActiveList(val)
    console.log(activeList);
    };
    if (window.location.pathname == "/Home/about" || window.location.pathname == "/Home/videos" || window.location.pathname == "/Home/photos" ) {

        if(window.location.reload){
            window.location.pathname != "/Home/home" && window.location.replace("/Home/home")
        }
    }


    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
            <h2 className="mainTitle">Manage Page</h2>
            <ul className="sidebarList">
            <h2 className="mainTitle ulTitle">Fast Marketing Online</h2>
                <Link to="/Home/home"><li className={`sidebarItem ${activeList == "Home" || window.location.pathname == "/Home/home" || window.location.pathname == "/Home/about" || window.location.pathname == "/Home/videos" || window.location.pathname == "/Home/photos" || window.location.pathname == "/" ? "active": ""}`} onClick={activeMenu}><div className="sidebarIcons"><img src={Home} alt="" className="sidebarImg"/></div>Home</li></Link>
                <Link to="/NewsFeed"><li className={`sidebarItem ${activeList == "News Feed" || window.location.pathname == "/NewsFeed" ? "active": ""}`} onClick={activeMenu}><div className="sidebarIcons"><img src={Temp} alt="" className="sidebarImgs"/></div>News Feed</li></Link>
                <Link to="/updates"><li className={`sidebarItem ${activeList == "updates" || window.location.pathname == "/updates" ? "active": ""}`} onClick={activeMenu}><div className="sidebarIcons"><img src={Update} alt="" className="sidebarImg"/></div>Updates</li></Link>
                <Link to="/adcenter"><li className={`sidebarItem ${activeList == "Ad Center" || window.location.pathname == "/adcenter" ? "active": ""}`} onClick={activeMenu}><div className="sidebarIcons"><img src={Ad} alt="" className="sidebarImgs"/></div>Ad Center</li></Link>

                <Link to="/inbox"><li className={`sidebarItem ${activeList == "Inbox" || window.location.pathname == "/inbox" ? "active": ""}`} onClick={activeMenu}><div className="sidebarIcons"><img src={Inbox} alt="" className="sidebarImgs"/></div>Inbox</li></Link>

                <Link to="/business"><li className={`sidebarItem ${activeList == "Business Resources" || window.location.pathname == "/business" ? "active": ""}`} onClick={activeMenu}><div className="sidebarIcons"><img src={Business} alt="" className="sidebarImgs"/></div>Business Resources</li></Link>

                <Link to="/managejobs"><li className={`sidebarItem ${activeList == "Manage Jobs" || window.location.pathname == "/managejobs" ? "active": ""}`} onClick={activeMenu}><div className="sidebarIcons"><img src={Jobs} alt="" className="sidebarImgs"/></div>Manage Jobs</li></Link>

                <Link to="/notifications"><li className={`sidebarItem ${activeList == "Notifications" || window.location.pathname == "/notifications" ? "active": ""}`} onClick={activeMenu}><div className="sidebarIcons"><img src={Notifications} alt="" className="sidebarImgs"/></div>Notifications</li></Link>

                <Link to="/insights"><li className={`sidebarItem ${activeList == "Insights" || window.location.pathname == "/insights" ? "active": ""}`} onClick={activeMenu}><div className="sidebarIcons"><img src={Analytic} alt="" className="sidebarImgs"/></div>Insights</li></Link>

                <Link to="/publishingTools"><li className={`sidebarItem ${activeList == "Publishing Tools"  || window.location.pathname == "/publishingTools" ? "active": ""}`} onClick={activeMenu}><div className="sidebarIcons"><img src={Temp} alt="" className="sidebarImgs"/></div>Publishing Tools</li></Link>

                <Link to="/pageQuality"><li className={`sidebarItem ${activeList == "Page Quality" || window.location.pathname == "/pageQuality" ? "active": ""}`} onClick={activeMenu}><div className="sidebarIcons"><img src={Trust} alt="" className="sidebarImgs"/></div>Page Quality</li></Link>

                <Link to="/editPageInfo"><li className={`sidebarItem ${activeList == "Edit Page Info" || window.location.pathname == "/editPageInfo" ? "active": ""}`} onClick={activeMenu}><div className="sidebarIcons"><img src={Edit} alt="" className="sidebarImgs"/></div>Edit Page Info</li></Link>

                <Link to="/settings"><li className={`sidebarItem ${activeList == "Settings" || window.location.pathname == "/settings" ? "active": ""}`} onClick={activeMenu}><div className="sidebarIcons"><img src={Settings} alt="" className="sidebarImgs"/></div>Settings</li></Link>
            </ul>
            <button className="sidebarBtn"><img src={Ad} alt="" className="sidebarImgs"/>Promote</button>
            </div>
        </div>
    )
}
export default SideBar
