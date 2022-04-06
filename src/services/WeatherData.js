import axios from "axios";

const weatherData = async (lat, lon) =>{
  const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=4267ea0f1ce45a8619c05c552714dddc&units=metric`;
  const req = await axios(URL)
  return req
}

export default weatherData
