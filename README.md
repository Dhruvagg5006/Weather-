# Weather-
# Weather App

A simple and visually appealing weather application built using HTML, CSS, and JavaScript. This app fetches real-time weather data from the OpenWeatherMap API and displays it in a user-friendly interface. It provides details such as temperature, humidity, wind speed, and weather conditions for any city entered by the user.

---

## Features

- **Real-Time Weather Data**: Fetches and displays current weather conditions for any city worldwide.
- **Responsive Design**: Works seamlessly on both desktop and mobile devices.
- **Dynamic Weather Icons**: Displays weather-specific icons (e.g., clouds, rain, clear sky) based on the current conditions.
- **Search Functionality**: Users can search for weather information by entering a city name.
- **Attractive UI**: Features a modern and clean design with a gradient background and smooth animations.

---

## Technologies Used

- **HTML**: Structure of the application.
- **CSS**: Styling and layout, including responsive design and animations.
- **JavaScript**: Fetching and displaying weather data from the OpenWeatherMap API.
- **OpenWeatherMap API**: Provides real-time weather data.

---

## How It Works

1. **User Input**: The user enters a city name in the search bar.
2. **API Request**: The app sends a request to the OpenWeatherMap API with the city name.
3. **Data Processing**: The API responds with weather data, which is processed and displayed on the screen.
4. **Dynamic Updates**: The app updates the UI with the current temperature, humidity, wind speed, and weather icon based on the fetched data.

---

## Setup Instructions

### Prerequisites

- An API key from [OpenWeatherMap](https://openweathermap.org/api). (Sign up for a free account to get your API key.)
- A code editor (e.g., Visual Studio Code).

### Steps

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Add Your API Key**:
   - Replace the `apikey` variable in the `script` tag with your OpenWeatherMap API key:
     ```javascript
     const apikey = "your-api-key-here";
     ```

3. **Run the App**:
   - Open the `index.html` file in your browser.

4. **Search for Weather**:
   - Enter a city name in the search bar and click the search button to view the weather details.

---

## Code Structure

- **HTML**: Defines the structure of the app, including the search bar, weather display, and details section.
- **CSS**: Styles the app with a gradient background, responsive layout, and dynamic weather icons.
- **JavaScript**: Handles the API requests, processes the data, and updates the UI dynamically.

---

## Screenshots

![Weather App Screenshot](screenshot.png)

---

## Future Enhancements

- **5-Day Forecast**: Display a 5-day weather forecast for the selected city.
- **Geolocation**: Automatically detect the user's location and display the weather for their current city.
- **Unit Conversion**: Allow users to switch between Celsius and Fahrenheit.
- **Error Handling**: Improve error handling for invalid city names or API issues.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [OpenWeatherMap](https://openweathermap.org/) for providing the weather data API.
- [Font Awesome](https://fontawesome.com/) for the search icon.

---


Enjoy using the Weather App! 🌦️
