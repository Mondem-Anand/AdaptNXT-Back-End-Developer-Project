 Build a ***Weather Information Service*** in Node.js that fetches and displays weather information based on user input using the Weatherstack API.
 
 **Run the Service:** 
 Open the terminal in VSCode and run the command: **node index.js**

 **Test the Service:**
 Open a web browser and go to: **http://localhost:4000/weather/Hyderabad**
 
 **NOTE:** Replace **Hyderabad** with any city to get its current weather

**Additional Notes:**
**1:** **Express:** This web framework allows you to set up a simple web server to handle HTTP requests.

**2:** **Axios:** This library is used to make HTTP requests to external APIs (in this case, Weatherstack).

**3:** **Weatherstack API:** Provides real-time weather information based on the input location.


**Example Output:** If you access http://localhost:4000/weather/Hyderabad, the output will be in JSON format, like this:

 {
    "city": "Hyderabad",
    "temperature": 29,
    "description": "Partly cloudy",
    "humidity": 62,
    "windSpeed": 17
}
