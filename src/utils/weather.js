const getWeatherCode = code => {
  switch (code) {
    case 'freezing_rain_heavy':
      return require('../assets/images/WeatherForecast/snow.png');
    case 'freezing_rain':
      return require('../assets/images/WeatherForecast/snow.png');
    case 'freezing_rain_light':
      return require('../assets/images/WeatherForecast/freezing_rain_light.png');
    case 'freezing_drizzle':
      return require('../assets/images/WeatherForecast/snow.png');
    case 'ice_pellets_heavy':
      return require('../assets/images/WeatherForecast/ice_pellets_heavy.png');
    case 'ice_pellets':
      return require('../assets/images/WeatherForecast/ice_pellets.png');
    case 'ice_pellets_light':
      return require('../assets/images/WeatherForecast/ice_pellets_light.png');
    case 'snow_heavy':
      return require('../assets/images/WeatherForecast/snow.png');
    case 'snow':
      return require('../assets/images/WeatherForecast/snow.png');
    case 'snow_light':
      return require('../assets/images/WeatherForecast/snow_light.png');
    case 'flurries':
      return require('../assets/images/WeatherForecast/snow.png');
    case 'tstorm':
      return require('../assets/images/WeatherForecast/storm.png');
    case 'rain_heavy':
      return require('../assets/images/WeatherForecast/rain.png');
    case 'rain':
      return require('../assets/images/WeatherForecast/rain.png');
    case 'rain_light':
      return require('../assets/images/WeatherForecast/rain_light.png');
    case 'drizzle':
      return require('../assets/images/WeatherForecast/rain_light.png');
    case 'fog_light':
      return require('../assets/images/WeatherForecast/fog.png');
    case 'fog':
      return require('../assets/images/WeatherForecast/fog.png');
    case 'cloudy':
      return require('../assets/images/WeatherForecast/clear.png');
    case 'mostly_cloudy':
      return require('../assets/images/WeatherForecast/mostly_cloudy.png');
    case 'partly_cloudy':
      return require('../assets/images/WeatherForecast/cloudy.png');
    case 'mostly_clear':
      return require('../assets/images/WeatherForecast/cloudy.png');

    default:
      return require('../assets/images/WeatherForecast/clear.png');
  }
};

export default {getWeatherCode};
