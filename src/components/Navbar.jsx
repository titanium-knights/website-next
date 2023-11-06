import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressCard } from '@fortawesome/free-regular-svg-icons'
import { faCircleInfo, faHandshake, faHouse, faUserGroup } from '@fortawesome/free-solid-svg-icons'
import { Tooltip } from 'react-tooltip'
import styles from '@/styles/navbar.module.css'

const Navbar = () => {
    return (
        <aside className={styles.sidebar}>
            <ul>
                <li><a href="/home" id='homeLink'>
                    <FontAwesomeIcon icon={faHouse} />
                </a></li>
                <li><a href="/about" id='aboutLink'>
                    <FontAwesomeIcon icon={faCircleInfo} />
                </a></li>
                <li><a href="/team" id='teamLink'>
                    <FontAwesomeIcon icon={faUserGroup} />
                </a></li>
                <li><a href="/sponsors" id='sponsorsLink'>
                    <FontAwesomeIcon icon={faHandshake} />
                </a></li>
                <li><a href="/contact" id='contactLink'>
                    <FontAwesomeIcon icon={faAddressCard} />
                </a></li>
            </ul>
            <Tooltip anchorSelect='#homeLink' float place='right' style={{ fontFamily: "Helvetica, sans-serif" }}>
                Home
            </Tooltip>
            <Tooltip anchorSelect='#aboutLink' float place='right' style={{ fontFamily: "Helvetica, sans-serif" }}>
                About Us
            </Tooltip>
            <Tooltip anchorSelect='#teamLink' float place='right' style={{ fontFamily: "Helvetica, sans-serif" }}>
                Meet the Teams
            </Tooltip>
            <Tooltip anchorSelect='#sponsorsLink' float place='right' style={{ fontFamily: "Helvetica, sans-serif" }}>
                Our Sponsors
            </Tooltip>
            <Tooltip anchorSelect='#contactLink' float place='right' style={{ fontFamily: "Helvetica, sans-serif" }}>
                Contact Us
            </Tooltip>
        </aside>
    );
}

export default Navbar;