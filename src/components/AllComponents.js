import React from 'react'
import Sidebar from './sidebar/SideBar'
import Home from './home/Home'
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import AdCenter from './ad/AdCenter'
import Inbox from './inbox/Inbox'
import Business from './business/Business'
import ManageJobs from './manageJobs/ManageJobs'
import Notifications from './notifications/Notifications'
import Insights from './insights/Insights'
import PublishingTools from './publishingTools/PublishingTools'
import EditPage from './editPage/EditPage'
import Settings from './settings/Settings'
import PageQuality from './pageQuality/PageQuality'

function AllComponents() {
    return (
        <>
        <Router>
        <Sidebar/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/Home" component={Home}/>
                <Route exact path="/Home/home" component={Home}/>
                <Route exact path="/Home/about" component={Home}/>
                <Route exact path="/Home/videos" component={Home}/>
                <Route exact path="/Home/photos" component={Home}/>
                <Route path="/adcenter" component={AdCenter}/>
                <Route path="/inbox" component={Inbox}/>
                <Route path="/business" component={Business}/>
                <Route path="/managejobs" component={ManageJobs}/>
                <Route path="/notifications" component={Notifications}/>
                <Route path="/insights" component={Insights}/>
                <Route path="/publishingTools" component={PublishingTools}/>
                <Route path="/pageQuality" component={PageQuality}/>
                <Route path="/editPageInfo" component={EditPage}/>
                <Route path="/settings" component={Settings}/>
            </Switch>
        </Router>
        </>
    )
}

export default AllComponents
