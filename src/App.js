import React, {useState} from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import WeatherIcon from 'react-icons-weather';
import './App.css';
import NavBar from './components/navBar/NavBar';
import Form from './components/form/Form';
import WeatherOnline from "./components/weatherOnline/WeatherOnline";
import WeatherWeek from "./components/weatherWeek/WeatherWeek";
import Loader from "./components/loader/Loader";
import Error from "./components/error/Error";
import moment from 'moment';
import 'moment/locale/ru';
moment.locale('ru');


const App = (props) => {

    const ApiKey = 'fd1f53f8177eb0c4a8d64745c939c06a';
    const ApiKey2 = '4ea584bbaaa643258bd7de37b410b274';

    const [error, setError] = useState(false);
    const [online, setOnline] = useState(0);
    const [week, setWeek] = useState(0);
    const [loading, setLoading] = useState(false);
    const [city, setCity] = useState(0);

    const getWeather = async (e) => {

        e.preventDefault()
        const city = e.target.elements.city.value;

        const apiOnline = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric&lang=ru`)
        const data = await apiOnline.json();
        console.log(data)

        setLoading(true)

        if (data.cod === 200) {
            const icon = data.weather[0].id;
            setOnline({
                city: data.name,
                temp: data.main.temp_max,
                country: data.sys.country,
                id: icon
            })

            const api_urlWeek = await fetch
            (`https://api.weatherbit.io/v2.0/forecast/daily?city=${city}&key=${ApiKey2}`);
            const dataWeek = await api_urlWeek.json();
            console.log(dataWeek)

            setLoading(false)

            setWeek ({
                info: dataWeek.data.slice(0, 7).map(e => (
                    <div>
                        <div style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginTop:'20px'}}>
                            <div>{moment(e.valid_date).format('dd DD MMM')}</div>
                            <WeatherIcon  name="owm" iconId={e.weather.code} flip="horizontal" rotate="90" />
                            <div>{Math.round(e.app_max_temp) + '\xB0C'}</div>
                            <div>{Math.round((e.app_max_temp) * 1.8 + 32) + '\xB0F'}</div>
                            <div>{Math.round((e.app_max_temp) + 273.15) + '\xB0K'}</div>
                        </div>
                        <div style={{
                            width: '100%',
                            height: '1px',
                            background: 'rgba(44, 62, 80,.2)',
                            margin: '5px 0'}}>

                        </div>
                    </div>
                ))
            })
            setError(undefined);

        } else {
            setLoading(false)
            setOnline(0)
            setWeek(0)
            setError(true)
        }


    }


    return (
        <BrowserRouter>
            <div className='wrapper'>
                <div className='container'>
                    <NavBar/>
                    <Form submit={getWeather}/>
                    {online.city && <div className='city_title'>{online.city} - {online.country} </div>}

                    <Route path='/(info| |)' render={() => <WeatherOnline temp={online.temp} id={online.id}/>}/>

                    <Route path='/week' render={() => <WeatherWeek info={week.info} />}/>

                    {error && <Error/>}
                    {loading && <Loader/>}
                </div>
            </div>
        </BrowserRouter>

    );
}

export default App;
