let axios = require('axios');

const GET_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=07e4519179d868e013e9baa19c701502&units=metric';

module.exports = {
  getTemp(location) {
    let encodedLocation = encodeURIComponent(location),
        requestURI = `${ GET_WEATHER_MAP_URL }&q=${ encodedLocation }`;

    return axios.get(requestURI).then((res) => {
      if(res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, (res) => {
      throw new Error(res.data.message);
    })

  }
};
