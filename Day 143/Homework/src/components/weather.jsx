import { useEffect } from "react";
import { useState } from "react";
import "/src/index.css"

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null);
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    const citys = e.target.city.value;
    const apiKey = "3bd9b53a9b9d4d36894133733241011";

    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${citys}&aqi=no`;
    try {
      const result = await (await fetch(url)).json();
      const temp = result.current.temp_c;
      const description = result.current.condition.text;
      const windSpeed = result.current.wind_kph;
      const iconUrl = `https:${result.current.condition.icon}`;
      setWeatherData({
        temp,
        description,
        windSpeed,
        iconUrl,
        city: result.location.name,
        country: result.location.country,
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="weather">
      <h1>Weather App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter city name: "
          name="city"
          required
        />
        <button type="submit">Get Weather</button>
      </form>


      {weatherData && (
        <div className="weather2">
          <h2>
            Weather in {weatherData.city}, {weatherData.country}
          </h2>
          <img src={weatherData.iconUrl} alt={weatherData.description} />
          <p>Temperature: {weatherData.temp}°C</p>
          <p>Condition: {weatherData.description}</p>
          <p>Wind Speed: {weatherData.windSpeed} kph</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
