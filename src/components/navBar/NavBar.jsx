import React, {useState} from 'react';
import classes from './NavBar.module.css';
import {NavLink} from "react-router-dom";



const NavBar = () => {



    return (
        <div>
            <div  className={classes.nav}>
                <div><NavLink to='/info' className={classes.link}>online</NavLink></div>
                <div>|</div>
                <div><NavLink to='/week' className={classes.link} > 7 days</NavLink></div>
            </div>
        </div>


    )
}

export default NavBar;