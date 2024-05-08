import axios from 'axios'
import { useEffect, useState } from 'react'
function CountryDetails({ country }) {
    const [weather, setWeather] = useState("")
    const [wind, setWind] = useState("")
    const [icon, setIcon] = useState("")

    useEffect(() => {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&appid=e49d0654791322f21a3c3bad191c65fe`)
            .then((response) => {
                console.log(response)
                setWeather(response.data.main.temp)
                setWind(response.data.wind.speed)
                setIcon(response.data.weather[0].icon)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [country])

    const iconURL = `https://openweathermap.org/img/wn/${icon}@2x.png`

    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <p>Languages:</p>
        <ul>
          {Object.values(country.languages).map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt={`$country.flags.alt`}/>
        <h1>Weather in {country.name.common}</h1>
        <p>Temperature: {weather !== "" ? `${weather - 273.15} °C` : 'Loading...'}</p>
        <p>Wind: {wind !== "" ? `${wind} m/s` : `Loading ...`}</p>
        <img src={iconURL}/>
      </div>
    );
  }

  export default CountryDetails