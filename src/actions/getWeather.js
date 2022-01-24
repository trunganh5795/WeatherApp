import axios from "axios";
import { addData, notFoundCity } from "../redux/weatherDataReducer";
import { getLocation } from "./getLocation"
import emotion_good from '../assets/img/svg/good.svg'
import emotion_medium from '../assets/img/svg/normal.svg'
import emotion_danger from '../assets/img/svg/bad.svg'
export const getWeather = async (dispatch) => {
    const { lat, lon } = await getLocation();
    console.log(lat, lon)
    let result = await axios({
        url: `https://api.weatherapi.com/v1/forecast.json?key=b602c5dd88964601ac1161246213011&q=${lat},${lon}&aqi=yes&alerts=no`,
        method: 'GET'
    })
    dispatch(addData(result.data))
}
export const getWeatherByName = (city) => {
    return async (dispatch) => {
        try {
            let result = await axios({
                url: `https://api.weatherapi.com/v1/forecast.json?key=b602c5dd88964601ac1161246213011&q=${city}&aqi=yes&alerts=no`,
                method: 'GET'
            })
            dispatch(addData(result.data))
        } catch (error) {
            dispatch(notFoundCity())
        }

        
    }
}
export const weatherStatusCheck = (action) => {
    let status = "";
    let color = "";
    let emotion = "";
    switch (action.key) {
        case "humidity":
            if (action.payload < 40) {
                status = "Very bad"
                color = "danger__color"
                emotion = emotion_danger
            } else if (action.payload < 80) {
                status = "Normal"
                color = "warning__color"
                emotion = emotion_medium
            } else {
                status = "Good"
                color = "normal__color";
                emotion = emotion_good;
            }
            console.log(action.payload, status)
            return { status, color, emotion }
        case "visibility":
            if (action.payload < 2) {
                status = "Very bad";
                color = "danger__color";
                emotion = emotion_danger
            } else if (action.payload < 5) {
                status = "Normal";
                color = "warning__color";
                emotion = emotion_medium
            } else {
                status = "Good"
                color = "normal__color";
                emotion = emotion_good;
            }
            return { status, color, emotion };
        case "airQuality":
            if (action.payload >= 200) {
                status = "Very bad";
                color = "danger__color";
                emotion = emotion_danger;
            } else if (action.payload < 200 && action.payload > 50) {
                status = "Medium";
                color = "warning__color";
                emotion = emotion_medium
            } else {
                status = "Good";
                color = "normal__color";
                emotion = emotion_good;
            }
            return { status, color, emotion };
        case "UV":
            if (action.payload >= 7) {
                status = "Very bad";
                color = "danger__color";
                emotion = emotion_danger;
            } else if (action.payload < 7 && action.payload > 4) {
                status = "Medium";
                color = "warning__color";
                emotion = emotion_medium
            } else {
                status = "Good";
                color = "normal__color";
                emotion = emotion_good;
            }
            return { status, color, emotion };
        default:
            break;
    }
}
