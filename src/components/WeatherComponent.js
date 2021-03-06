import React, { useState, useEffect} from 'react';
import "./out.css";

function WeatherComponent({weatherData, props, showWeather}) {
    const [date, setDate] = useState(new Date());
    const [display, setDisplay] = useState("flex")
    // const [fadding, setFadding] = useState("fadeIn 1s ease forwards");
    const [zIndex, setZIndex] = useState(1)
    useEffect(() => {
        setDate(date => new Date())
    },[])

    // const month = ["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"];
    const month = [".01",".02",".03",".04",".05",".06",".07",".08",".09",".10",".11",".12"];
    const today = new Date();

    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    //
    const secondDay = new Date();
    secondDay.setDate(today.getDate() + 2)

    const thirdDay = new Date();
    thirdDay.setDate(today.getDate() + 3)

    const fourthDay = new Date();
    fourthDay.setDate(today.getDate() + 4)

    const fifthDay = new Date();
    fourthDay.setDate(today.getDate() + 5)

    const sixthDay = new Date();
    fifthDay.setDate(today.getDate() + 5)


    const imgDayOne = require(`.././assets/icons/${weatherData.daily[1].weather[0].icon}.png`)
    const imgDayOneAlt = weatherData.daily[1].weather[0].main;
    const imgDayTwo = require(`.././assets/icons/${weatherData.daily[2].weather[0].icon}.png`)
    const imgDayTwoAlt = weatherData.daily[2].weather[0].main;
    const imgDayThree = require(`.././assets/icons/${weatherData.daily[3].weather[0].icon}.png`)
    const imgDayThreeAlt = weatherData.daily[3].weather[0].main;
    const imgDayFour = require(`.././assets/icons/${weatherData.daily[4].weather[0].icon}.png`)
    const imgDayFourAlt = weatherData.daily[4].weather[0].main;
    const imgDayFive = require(`.././assets/icons/${weatherData.daily[5].weather[0].icon}.png`)
    const imgDayFiveAlt = weatherData.daily[5].weather[0].main;
    const imgDaySix = require(`.././assets/icons/${weatherData.daily[6].weather[0].icon}.png`)
    const imgDaySixAlt = weatherData.daily[6].weather[0].main;

    // useEffect(() => {
    //     const displayNone = () => {
    //         // setFadding(prevState => "fadeOut 1s ease backwards")
    //         // setZIndex(prevState => !prevState);
    //         setDisplay(prevState => "none")
    //     };
    // },[])
    //
    // const displayNone = (display) => {
    //     // setFadding(prevState => "fadeOut 1s ease backwards")
    //     // setZIndex(prevState => 1);
    //     setDisplay(prevState => "none");
    // }

    return(

        <div className="weather_container">
            <i className="fa-solid fa-xmark" onClick={showWeather}></i>
                        <div className="weather_item">
                            <p>{tomorrow.getDate()}{month[tomorrow.getMonth()]}</p>
                            <img src={imgDayOne} alt={imgDayOneAlt} className="weather_icon"/>
                            <p><strong>{(weatherData.daily[1].temp.day).toFixed(0)}°C</strong></p>
                            <p><strong>{((weatherData.daily[1].wind_speed)*3.6).toFixed(0)}km/h</strong></p>
                        </div>
                        <div className="weather_item">
                            <p>{tomorrow.getDate() + 1}{month[tomorrow.getMonth()]}</p>
                            <img src={imgDayTwo} alt={imgDayTwoAlt} className="weather_icon"/>
                            <p><strong>{(weatherData.daily[2].temp.day).toFixed(0)}°C</strong></p>
                            <p><strong>{((weatherData.daily[2].wind_speed)*3.6).toFixed(0)}km/h</strong></p>
                        </div>
                        <div className="weather_item">
                            <p>{tomorrow.getDate() + 2}{month[tomorrow.getMonth()]}</p>
                            <img src={imgDayThree} alt={imgDayThreeAlt} className="weather_icon"/>
                            <p><strong>{(weatherData.daily[3].temp.day).toFixed(0)}°C</strong></p>
                            <p><strong>{((weatherData.daily[3].wind_speed)*3.6).toFixed(0)}km/h</strong></p>
                        </div>
                        <div className="weather_item">
                            <p>{tomorrow.getDate() + 3}{month[tomorrow.getMonth()]}</p>
                            <img src={imgDayFour} alt={imgDayFourAlt} className="weather_icon"/>
                            <p><strong>{(weatherData.daily[4].temp.day).toFixed(0)}°C</strong></p>
                            <p><strong>{((weatherData.daily[4].wind_speed)*3.6).toFixed(0)}km/h</strong></p>
                        </div>
                        <div className="weather_item">
                            <p>{tomorrow.getDate() + 4}{month[tomorrow.getMonth()]}</p>
                            <img src={imgDayFive} alt={imgDayFiveAlt} className="weather_icon"/>
                            <p><strong>{(weatherData.daily[5].temp.day).toFixed(0)}°C</strong></p>
                            <p><strong>{((weatherData.daily[5].wind_speed)*3.6).toFixed(0)}km/h</strong></p>
                        </div>
                        <div className="weather_item">
                            <p>{tomorrow.getDate() + 5}{month[tomorrow.getMonth()]}</p>
                            <img src={imgDaySix} alt={imgDaySixAlt} className="weather_icon"/>
                            <p><strong>{(weatherData.daily[6].temp.day).toFixed(0)}°C</strong></p>
                            <p><strong>{((weatherData.daily[6].wind_speed)*3.6).toFixed(0)}km/h</strong></p>
                        </div>
                    </div>
    )
}

export default WeatherComponent;
