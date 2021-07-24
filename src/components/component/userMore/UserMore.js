import React from 'react'
import "./userMore.css"

function UserMore(props) {

    const handleMore =()=>{
        props.setShow(false)
    }

    return (
        <div className="userMore">
            <ul className="userMoreList">
                <li className="userMoreItem" onClick={handleMore}>Shop</li>
                <li className="userMoreItem" onClick={handleMore}>Offers</li>
                <li className="userMoreItem" onClick={handleMore}>Groups</li>
                <li className="userMoreItem" onClick={handleMore}>Community</li>
                <li className="userMoreItem" onClick={handleMore}>Videos</li>
                <li className="userMoreItem" onClick={handleMore}>About</li>
                <li className="userMoreItem" onClick={handleMore}>Guides</li>
                <li className="userMoreItem" onClick={handleMore}>Jobs</li>
                <li className="userMoreItem" onClick={handleMore}>Edit Tabs</li>
            </ul>
        </div>
    )
}

export default UserMore
