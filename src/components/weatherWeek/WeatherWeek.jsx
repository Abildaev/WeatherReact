import React from 'react';
import classes from './WeatherWeek.module.css';


const WeatherWeek = (props) => {
    return (
        <div className={classes.component}>
            {props.city}
            {props.info}
        </div>
    )
}

export default WeatherWeek;