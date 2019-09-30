import React from 'react';
import classes from './Error.module.css';
import {MdHighlightOff} from "react-icons/md";



const Error = (props) => {

    return (
        <div>
            <div className={classes.error}>
                <MdHighlightOff className={classes.icon}/>
                <div>Город не найден!</div>
            </div>
        </div>
    )
}

export default Error;