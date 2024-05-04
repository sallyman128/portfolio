import React, { useState } from "react";

const WeatherApp = () => {
    const [location, setLocation] = useState("")
    const [weather, setWeather] = useState()
    const [geoLocation, setGeoLocation] = useState({
        latitude: null,
        longitude: null
    })

    const updateLocation = (e) => {
        setLocation(e.target.value)
    }

    const getGeoLocation = async () => {
        const resp = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${location}`)
        const json = await resp.json()
        debugger
        setGeoLocation(
            {
                latitude: json.results[0].latitude,
                longitude: json.results[0].longitude
            }
        )
    }

    const getWeather = async() => {
        //fetch weather from api given the city
        await getGeoLocation()
        const temperature_unit = "fahrenheit"
        const resp = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${geoLocation.latitude}&longitude=${geoLocation.longitude}&current_weather=true&temperature_unit=${temperature_unit}`)
        const json = await resp.json()
        debugger
        setWeather(json)
        // TODO: set weather correctly
        // TODO: get latitude and longitude from city
        // TODO: set state var for temp unit radio buttons
        // TODO: autofill city with only available options
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
                {weather ? `${weather}` : ""}
            </div>
        </div>
    )
}

export default WeatherApp