import readline from "readline/promises";

const Api_key = '0451219448763ad8d0d2f7f10066a04e';
const Base_url = "https://api.openweathermap.org/data/2.5/weather";

const rl =readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

 const getWeather = async (city) =>{
     const url = `${Base_url}?q=${city}&appid=${Api_key}&units=metric`;

     try {
        const response = await fetch(url);
        if(!response.ok){
            throw new Error('City not found. Please checkk the city name.');
        }
        const weatherData = await response.json();

        console.log('\nWeather Information:');
        console.log(`City: ${weatherData.name}`);
        console.log(`Temperature: ${weatherData.main.temp}*C`);
        console.log(`Description: ${weatherData.weather[0].description}`);
        console.log(`Humidity: ${weatherData.main.humidity}%`);
        console.log(`Wind Speed: ${weatherData.wind.speed} m/s\n`);
     } catch (error) {
        console.log(error)
     }
 }

const city = await rl.question('Enter a city name to get its weather:');
await getWeather(city);
rl.close();