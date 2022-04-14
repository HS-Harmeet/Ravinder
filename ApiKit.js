import axios from "axios";
import { AppConstants } from "../../Theme";

const http =  axios.create({
  
  baseURL:"https://api.openweathermap.org/data/2.5/"
});
//http://shop.nayidilli.com/api-data
http.interceptors.request.use(async (config)=> {
//   const token = await DataManager.getAccessToken();
 

    config.headers['Content-Type'] = 'application/json';
  


  return config;
});

export default http