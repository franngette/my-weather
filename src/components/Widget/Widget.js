import React from 'react';
import './Widget.scss'
import weatherImage from './weatherImages'


const Widget = ({ weather, day }) => {
    return (
        <div className='widget' >
            <div className='widget__imageoverlay' style={{ backgroundImage: `url(${weatherImage[weather?.consolidated_weather[day]?.weather_state_abbr]})`, backgroundSize: 'cover', backdropFilter: 'blur(2px)' }}></div>
            <div className='widget__overlay'>
                <div>
                    <h1>{weather?.title}</h1>
                    <p className='overlay__date'>{new Date(weather.consolidated_weather[day]?.applicable_date).toLocaleString("default", { weekday: "long" })}</p>
                    <p>{new Date(weather.consolidated_weather[day]?.applicable_date).toLocaleDateString()}</p>
                </div>
                <div>
                    <p>{weather.consolidated_weather[day]?.weather_state_name}</p>
                    <p className='overlay__temperature'>{weather.consolidated_weather[day]?.the_temp.toFixed(0)}° C</p>
                </div>
            </div>
            <div className='widget__info'>
                <div className='info'>
                    <p className='info__type'>Wind Speed:</p>
                    <p>{weather.consolidated_weather[day]?.wind_speed.toFixed(2)} mph</p>
                </div>
                <div className='info'>
                    <p className='info__type'>Humidity:</p>
                    <p>{weather.consolidated_weather[day]?.humidity}%</p>
                </div>
                <div className='info'>
                    <p className='info__type'>Max Temp:</p>
                    <p>{weather.consolidated_weather[day]?.max_temp.toFixed(2)}° C</p>
                </div>
                <div className='info'>
                    <p className='info__type'>Min Temp:</p>
                    <p>{weather.consolidated_weather[day]?.min_temp.toFixed(2)}° C</p>
                </div>
                <div className='info'>
                    <p className='info__type'>Wind Direction:</p>
                    <p>{weather.consolidated_weather[day]?.wind_direction_compass}</p>
                </div>
            </div>
        </div>

    )
}

export default Widget;