import {useState} from 'react'
import IconWeatherComponent from "./IconWeatherComponent";
import './WeatherCard.css'
const Weather = ({icon, city, country, temp, weatherDescription, humidity, clouds, wind}) => {
    
    

    const [fahrenheit, setFahrenheit] = useState(0)

    // 

    return (
        <div className='container'>


            <IconWeatherComponent className='IconWeatherComponent' icon={icon}/>
            <div className='temperature'>
            {fahrenheit ? temp.toPrecision(2) : ((temp * 9/5) + 32).toPrecision(3) }{fahrenheit ? '°C' : '°F'}
                                     
            <button  className='button' href='#' onClick={() => setFahrenheit(!fahrenheit)}> <span>{fahrenheit ? 'Fahrenheit' : 'Celsius'}</span> </button> 
            </div> 
            <div className='location'>
            <h2>{city}, {country}</h2>
            </div>


            <h3 className='weatherDescription'>{weatherDescription}</h3>


            


          </div>  
        
    );
};

export default Weather;