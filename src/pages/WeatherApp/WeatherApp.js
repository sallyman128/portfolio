import React, { useState } from "react";

const WeatherApp = () => {
    const [location, setLocation] = useState("")
    const [weather, setWeather] = useState()

    const updateLocation = (e) => {
        setLocation(e.target.value)
    }

    const getWeather = () => {
        //fetch weather from api given the city
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${}`)
        setWeather("fetched weather")
        setLocation("")
    }

    return (
        <div className="center-horizontal">
            <h1>Enter your location to get the weather</h1>
            <input type="text" 
                placeholder="Enter location" 
                maxLength={50} 
                className="center-horizontal" 
                value={location}
                onChange={updateLocation}
            />
            <fieldset>
                <legend>Select units:</legend>
                <div>
                    <input type="radio" id="farenheight" name="weather" value="farenheight" />
                    <label htmlFor="farenheight">Farenheight</label>
                </div>
                <div>
                    <input type="radio" id="celsius" name="weather" value="celsius" />
                    <label htmlFor="celsius">Celsius</label>
                </div>
            </fieldset>
            <button onClick={getWeather}>Get Weather</button>
            <div>
                {weather ? `${location}` : ""}
            </div>
        </div>
    )
}

export default WeatherApp