
const getCurrentDayForecast = (response, title) =>({ 
    location: title,
    day: response.last_updated.slice(0,10), 
    weatherDescription: response.condition.text, 
    weatherIcon: response.condition.icon, 
    temperature: response.temp_c,

}); 
export default getCurrentDayForecast; 