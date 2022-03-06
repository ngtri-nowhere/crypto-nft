import React from 'react'
import "./Header.css";
import punkLogo from "../assets/header/cryptopunk-logo.png"
import searchIcon from "../assets/header/search.png"
import themSwitchIcon from "../assets/header/theme-switch.png";

const Header = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img src={punkLogo} className="punkLogo" alt="punk Logo" />
            </div>

            <div className="searchBar">
                <div className="searchIconContainer">
                    <img src={searchIcon} />
                </div>
                <input className="searchInput" placeholder="Collection, item or user ..." />
            </div>
            <div className="headerItems">
                <p>Market</p>
                <p>Coinbase</p>
                <p>Wallet</p>
            </div>
            <div className="headerActions">
                <div className="themeSwitchContainer">
                    <img src={themSwitchIcon} />
                </div>
            </div>
            <div className="loginButton">
                Get In
            </div>

        </div>
    )
}

export default Header