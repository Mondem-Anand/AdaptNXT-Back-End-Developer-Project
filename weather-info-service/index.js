const express = require('express');
const axios = require('axios');

const app = express();
const port = 4000;
const API_KEY = '02edd3d7a76357155d463a18b455edf5';

// Function to fetch weather data
const getWeather = async (city) => {
  const url = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${city}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

// Route to fetch weather information by city
app.get('/weather/:city', async (req, res) => {
  const city = req.params.city;
  const weatherData = await getWeather(city);

  if (weatherData && weatherData.current) {
    res.json({
      city: weatherData.location.name,
      temperature: weatherData.current.temperature,
      description: weatherData.current.weather_descriptions[0],
      humidity: weatherData.current.humidity,
      windSpeed: weatherData.current.wind_speed,
    });
  } else {
    res.status(404).json({ message: 'City not found or API request failed' });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Weather service running on http://localhost:${port}`);
});
