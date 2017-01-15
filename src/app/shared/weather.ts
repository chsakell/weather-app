export class Weather {
    coord: CoordDetails;
    weather: WeatherDetails[];
    base: string;
    main: MainDetails;
    visibility: number;
    wind: WindDetails;
    clouds: CloudsDetails;
    dt: number;
    sys: SysDetails;
    id: number; // City ID
    name: string; // City name
    cod: number; // Internal parameter
}

class CoordDetails {
    lon: number; // City geo location, longitude
    lat: number; // City geo location, latitude
}

class WeatherDetails {
    id: number; // Weather condition id
    main: string; // Group of weather parameters (Rain, Snow, Extreme etc.)
    description: string; // Weather condition within the group
    icon: string; // Weather icon id
}

class MainDetails {
    temp: number; // Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
    pressure: number; // Atmospheric pressure (on the sea level, if there is no sea_level or grnd_level data), hPa
    humidity: number; // Humidity, %
    temp_min: number; // Minimum temperature at the moment.
    temp_max: number; // Maximum temperature at the moment.
}

class WindDetails {
    speed: number; // Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
    deg: number; // Wind direction, degrees (meteorological)
}

class CloudsDetails {
    all: number; // Cloudiness, %
}

class SysDetails {
    type: number; // Internal parameter
    id: number; //  Internal parameter
    message: string; // Internal parameter
    country: string; // Country code (GB, JP etc.)
    sunrise: number; // Sunrise time, unix, UTC
    sunset: number; // unset time, unix, UTC
}