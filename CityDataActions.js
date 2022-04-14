import { apiConstants as types } from "../ActionTypes";



function cityDataAction(cityName, apiKey) {
    
    console.log('called city data action',cityName,apiKey);
    const action = {
        type: types.CITY_WEATHER_LOAD,
        cityName:cityName,
        apiKey:apiKey
    
    }
    return action;
}


module.exports = {
    cityDataAction
}