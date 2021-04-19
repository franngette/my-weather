import React, { useCallback, useEffect, useState } from 'react';
import { getLocationIdByGeo, getWeather, getLocationIdByName } from '../../services/axios';
import WidgetContainer from '../WidgetContainer/WidgetContainer';
import { Button, InputGroup, FormControl, Alert } from 'react-bootstrap';
import './Content.scss'

const Content = () => {
    const [position, setPosition] = useState({ latitude: '-37.9860222', longitude: '-57.5646115' });
    const [weather, setWeather] = useState()
    const [city, setCity] = useState()
    const [error, setError] = useState()

    const getWeatherByCity = () => {
        getLocationIdByName(city).then((res) => {
            if (res[0]?.woeid) {
                getWeather(res[0].woeid).then((res) => {
                    setWeather(res)
                    setError()
                })
            } else {
                setError('City not found')
            }
        })
    }

    const getLocation = useCallback(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => setPosition(position.coords));
        }
    }, [])

    useEffect(() => {
        getLocation()
    }, [getLocation])

    useEffect(() => {
        const getUserLocation = () => {
            getLocationIdByGeo(position.latitude, position.longitude).then((res) => {
                getWeather(res[0].woeid).then((res) => {
                    setWeather(res)
                })
            })
        }
        getUserLocation()
    }, [position])

    return (
        <main className='content'>
            <section className='content__input'>
                <InputGroup className="mr-3">
                    <InputGroup.Prepend>
                        <Button variant="info" onClick={getWeatherByCity}>Search your city</Button>
                    </InputGroup.Prepend>
                    <FormControl aria-describedby="searchcity" aria-label="search city" onChange={(e) => setCity(e.target.value)} placeholder="City Name" />
                </InputGroup>
                <Button variant="info" onClick={getLocation}>Here!</Button>
            </section>
            {error &&
                <Alert variant='danger'>
                    {error}
                </Alert>}
            {weather && <WidgetContainer weather={weather} />}
        </main>
    );
}

export default Content;