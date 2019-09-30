import React from 'react';
import WeatherIcon from 'react-icons-weather';
import classes from './WeatherOnline.module.css';

const WeatherOnline = props => (
    <div>
        {props.temp &&
        <div className={classes.info}>
            <WeatherIcon className={classes.weatherIcon} name="owm" iconId={props.id} flip="horizontal" rotate="90"/>
            <div className={classes.info_text}>{Math.floor(props.temp) + '\xB0C'}</div>
            <div className={classes.line}></div>
            <div className={classes.info_text}>{Math.floor(props.temp * 1.8 + 32)  + '\xB0F'}</div>
        </div>}
    </div>
)
export default WeatherOnline;