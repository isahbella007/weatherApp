const currentDayDetail = (response) => [
    {
        name: 'Feels Like', 
        value: response.data.current.feelslike_c, 
        unit: '°C', 
    },
    {
        name: 'Pressure', 
        value: response.data.current.pressure_in, 
        unit: 'in', 
    }, 
    {
        name: 'Humidity', 
        value: response.data.current.humidity, 
        unit: '%', 
    }, 
    {
        name: 'Wind', 
        value: response.data.current.wind_kph, 
        unit: 'km/h', 
    }, 
    {
        name: 'Cloud', 
        value: response.data.current.cloud, 
        unit: '', 
    },

]; 
export default currentDayDetail; 