import './index.css'
import './App.css'
import { ReactComponent as BellIcon} from './icons/bell.svg';
import { ReactComponent as MessengerIcon} from './icons/messenger.svg';
import { ReactComponent as CaretIcon} from './icons/down-filled-triangular-arrow.svg';
import { ReactComponent as PlusIcon} from './icons/plus.svg';
import { ReactComponent as CogIcon} from './icons/settings-cog.svg';
import { ReactComponent as ChevronIcon} from './icons/chevron.svg';
import { ReactComponent as ArrowIcon} from './icons/arrow.svg';
import { ReactComponent as UserIcon} from './icons/user.svg';
import { ReactComponent as LogOutIcon} from './icons/logout.svg';
import { ReactComponent as AvatarIcon} from './icons/avatar.svg';
import FacebookLogo from './icons/facebook-logo-2019.svg';
import HomeIcon from './icons/home.svg';
import FlagIcon from './icons/flag.svg';
import GiftIcon from './icons/gift.svg';
import GroupIcon from './icons/group-filled-persons.svg';
import SearchIcon from './icons/search.svg';
// import Profile from './icons/1627128812239.jpg';

import React, {useState} from 'react';
import { CSSTransition } from 'react-transition-group';

const App = () => {
    return (
      <Navbar>
        <div className="top-left">
          <img src={FacebookLogo} alt="facebook" className="facebookIcon" />
          <img src={SearchIcon} alt="" className="searchIcon"/>
          <input type="text" placeholder="Search Facebook" className="facebookSearch" />
        </div>
        <div className="center">
          <img src={HomeIcon} alt="" className="centerIcon"/>
          <img src={FlagIcon} alt="" className="centerIcon"/>
          <img src={GiftIcon} alt="" className="centerIcon"/>
          <span className="groupCurcle">
          <img src={GroupIcon} alt="" className="centerIcon"/>
          </span>
        </div>
        <div className="account">
          <img
            src="https://cdn.britannica.com/73/182873-050-E1C686F4/Chris-Hemsworth-Thor-Thor-The-Dark-World.jpg"
            alt=""
            className="accountImg"
          />
          <span className="accountName">Kamrul Hasan</span>
        </div>
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />}>
            <DropdownMenuM />
        </NavItem>
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu />
        </NavItem>
      </Navbar>
    );
}

function DropdownMenu(){

    const [activeMenu, setActiveMenu] =useState('main');
    const [menuHeight, setMenuHeight] = useState();

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props){
        return(
            <a a href = "#"
            className = "menu-item"
            onClick = {() => props.goToMenu && setActiveMenu(props.goToMenu)} >
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}

                <span className = "icon-right" > {props.rightIcon} </span>
            </a>
        )
    }

    return(
        <div className="dropdown" style={{height: menuHeight}}>
            <CSSTransition in = {activeMenu === 'main'} unmountOnExit
            timeout={500}
            className="menu-primary"
            onEnter = {calcHeight}
            >
            <div className="menu">
                    
            <DropdownItem leftIcon={<AvatarIcon/>}><span className="tag">My Profile</span></DropdownItem>
            <DropdownItem 
            leftIcon={<CogIcon/>}
            rightIcon={<ChevronIcon/>}
            goToMenu="settings"
            > <span className = "tag" >Settings</span>
            </DropdownItem>
            <DropdownItem 
            leftIcon={<UserIcon/>}
            rightIcon={<ChevronIcon/>}
            goToMenu="profile"
            > <span className = "tag" >Profile</span>
            </DropdownItem>
            <DropdownItem 
            leftIcon={<LogOutIcon/>}
            rightIcon={<ChevronIcon/>}
            goToMenu="logout"
            > <span className = "tag" >Log Out</span>
            </DropdownItem>
            </div>
            </CSSTransition>
        
            <CSSTransition in = {activeMenu === 'settings'} unmountOnExit
            timeout={500}
            className="menu-secondary"
            onEnter = {
                calcHeight
            }
            >
                <div className="menu">
            <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main"></DropdownItem>
            <DropdownItem><span className="tag">Settings</span></DropdownItem>
            <DropdownItem><span className="tag">Settings</span></DropdownItem>
            < DropdownItem > <span className = "tag" >Settings </span></DropdownItem >
            <DropdownItem><span className="tag">Settings</span></DropdownItem>
            < DropdownItem > < span className = "tag" > Settings </span></DropdownItem >
            < DropdownItem > < span className = "tag" > Settings </span></DropdownItem >
            < DropdownItem > < span className = "tag" > Settings </span></DropdownItem >
            </div>
            </CSSTransition>


            <CSSTransition in = {activeMenu === 'profile'} unmountOnExit
            timeout={500}
            className="menu-secondary"
            onEnter = {
                calcHeight
            }
            >
                <div className="menu">
            <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main">Menu</DropdownItem>
            <DropdownItem><span className="tag">User</span></DropdownItem>
            <DropdownItem><span className="tag">Security</span></DropdownItem>
            < DropdownItem > <span className = "tag" >Information</span></DropdownItem >
            </div>
            </CSSTransition>

            <CSSTransition in = {activeMenu === 'logout'} unmountOnExit
            timeout={500}
            className="menu-secondary"
            onEnter = {
                calcHeight
            }
            >
                <div className="menu">
            <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main">Menu</DropdownItem>
            <DropdownItem><span className="tag">User</span></DropdownItem>
            <DropdownItem><span className="tag">Security</span></DropdownItem>
            < DropdownItem > <span className = "tag" >Information</span></DropdownItem >
            </div>
            </CSSTransition>

        </div>
    )
}


function Navbar(props) {
    return(
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}

function NavItem(props) {
    const [open, setOpen] = useState(false);
    return(
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    );
}


// for massage///////////////////////////////////

function DropdownMenuM(){

    const [activeMenu, setActiveMenu] =useState('main');
    const [menuHeight, setMenuHeight] = useState();

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropdownItem(props){
        return(
            <a a href = "#"
            className = "menu-item"
            onClick = {() => props.goToMenu && setActiveMenu(props.goToMenu)} >
                <span className="icon-button user-icon">{props.leftIcon}</span>
                {props.children}

                <span className = "icon-right" > {props.rightIcon} </span>
            </a>
        )
    }

    return(
        <div className="dropdown" style={{height: menuHeight}}>
            <CSSTransition in = {activeMenu === 'main'} unmountOnExit
            timeout={500}
            className="menu-primary"
            onEnter = {calcHeight}
            >
            <div className="menu">
                    
            <DropdownItem leftIcon={<AvatarIcon/>} goToMenu="saifakhan"><span className="tag">Saifa Khan</span></DropdownItem>
            <DropdownItem 
            leftIcon={<AvatarIcon/>}
            rightIcon={<ChevronIcon/>}
            goToMenu="settings"
            > <span className = "tag" >Kamrul Hasan</span>
            </DropdownItem>
            <DropdownItem 
            leftIcon={<AvatarIcon/>}
            rightIcon={<ChevronIcon/>}
            goToMenu="profile"
            > <span className = "tag" >Hasibul Islam</span>
            </DropdownItem>
            <DropdownItem 
            leftIcon={<AvatarIcon/>}
            rightIcon={<ChevronIcon/>}
            goToMenu="logout"
            > <span className = "tag" >Khalid Saifulla</span>
            </DropdownItem>
            </div>
            </CSSTransition>
        
            <CSSTransition in = {activeMenu === 'settings'} unmountOnExit
            timeout={500}
            className="menu-secondary"
            onEnter = {
                calcHeight
            }
            >
                <div className="menu">
            <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main"><span className="tag">Back</span></DropdownItem>
            <DropdownItem><span className="tag">Hi,How are you?</span></DropdownItem>
            <DropdownItem><span className="tag">Hlw, I am fine & you?</span></DropdownItem>
            <DropdownItem><span className="tag">Yea I am fine also.</span></DropdownItem>
            </div>
            </CSSTransition>


            <CSSTransition in = {activeMenu === 'profile'} unmountOnExit
            timeout={500}
            className="menu-secondary"
            onEnter = {
                calcHeight
            }
            >
                <div className="menu">
            <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main"><span className="tag">Back</span></DropdownItem>
            <DropdownItem leftIcon={<AvatarIcon/>}><span className="tag">Hi,How are you?</span></DropdownItem>
            <DropdownItem leftIcon={<AvatarIcon/>}><span className="tag">Hlw, I am fine & you?</span></DropdownItem>
            < DropdownItem leftIcon={<AvatarIcon/>}> <span className = "tag" >Yea I am fine also.</span></DropdownItem >
            </div>
            </CSSTransition>

            <CSSTransition in = {activeMenu === 'logout'} unmountOnExit
            timeout={500}
            className="menu-secondary"
            onEnter = {
                calcHeight
            }
            >
                <div className="menu">
            <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main"><span className="tag">Back</span></DropdownItem>
            <DropdownItem leftIcon={<AvatarIcon/>}><span className="tag">Hi,How are you?</span></DropdownItem>
            <DropdownItem leftIcon={<AvatarIcon/>}><span className="tag">Hlw, I am fine & you?</span></DropdownItem>
            < DropdownItem leftIcon={<AvatarIcon/>}> <span className = "tag" >Yea I am fine also.</span></DropdownItem >
            </div>
            </CSSTransition>

            <CSSTransition in = {activeMenu === 'saifakhan'} unmountOnExit
            timeout={500}
            className="menu-secondary"
            onEnter = {
                calcHeight
            }
            >
                <div className="menu">
            <DropdownItem leftIcon={<ArrowIcon/>} goToMenu="main"><span className="tag">Back</span></DropdownItem>
            <DropdownItem leftIcon={<AvatarIcon/>}><span className="tag">Hi,How are you?</span></DropdownItem>
            <DropdownItem leftIcon={<AvatarIcon/>}><span className="tag">Hlw, I am fine & you?</span></DropdownItem>
            < DropdownItem leftIcon={<AvatarIcon/>}> <span className = "tag" >Yea I am fine also.</span></DropdownItem >
            </div>
            </CSSTransition>

        </div>
    )
}


function NavbarM(props) {
    return(
        <nav className="navbar">
            <ul className="navbar-nav">{props.children}</ul>
        </nav>
    );
}

function NavItemM(props) {
    const [open, setOpen] = useState(false);
    return(
        <li className="nav-item">
            <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
                {props.icon}
            </a>
            {open && props.children}
        </li>
    );
}

export default App;