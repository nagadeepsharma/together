import React from 'react'
import { Link } from 'react-router-dom'
import { Header, Menu,} from 'semantic-ui-react'
import '../css/navbar.css'

function Navbar() {
    return (
        <Menu className="navbar" secondary data-aos="fade-down">
            <Menu.Item as="a"><Header className="h2" as="h2"><Link style={{color:"#184478"}} to="/">tog<span>Ether</span></Link></Header></Menu.Item>
            <Menu.Menu position="right">
            <Menu.Item as="a"><Header className="h2" as="h2"><Link style={{color:"#184478"}} to="/campaignshow">Campaigns</Link></Header></Menu.Item>
            <Menu.Item  as="a"><Header className="h2" as="h2"><Link style={{color:"#184478"}} to="/campaigncreate">Create +</Link></Header></Menu.Item>
            </Menu.Menu>
        </Menu>
    )
}

export default Navbar
