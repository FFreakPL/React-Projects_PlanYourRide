import React, { useState, useEffect} from 'react';
import "./Weather.css";
import WeatherComponent from "./WeatherComponent";

const REACT_APP_API_URL = 'https://api.openweathermap.org/data/2.5'
const REACT_APP_API_KEY = `aad0a4a7e4ef8608884c12de55bea733`
const REACT_APP_ICON_URL = 'https://openweathermap.org/img/w'


function Weather({props}) {
    // const [lat, setLat] = useState([]);
    // const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    const lat = props.start_latlng[0];
    const long = props.start_latlng[1]


    // useEffect(() => {
    //     setLat(prevLat => props.start_latlng[0]);
    //     setLong(prevLong => props.start_latlng[1]);
    //     console.log(lat);
    //     console.log(long);
    // })

    const callForecast = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=metric&appid=${REACT_APP_API_KEY}`;
    const callWeather = `${REACT_APP_API_URL}/weather/?lat=${lat}&lon=${long}&units=metric&APPID=${REACT_APP_API_KEY}`

    useEffect(() => {
        fetch(callWeather)
                .then(res => res.json())
                .then(result => setData(result))
    }, [lat,long])
    // function getWeather(){
    //     fetch(callWeather)
    //         .then(res => res.json())
    //         .then(result => setData(result))
    // }
    // getWeather();
    return (
        <div className="App">
            {(typeof data.main != 'undefined') ? (
                <WeatherComponent weatherData={data} props={props}/>
            ): (
                <div></div>
            )}

        </div>
    );
}

export default Weather;