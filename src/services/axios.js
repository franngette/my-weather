import axios from "axios";

const instance = axios.create({
    baseURL: 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/',
    headers: {
        "Content-Type": "application/json"
    }
});

export async function getLocationIdByGeo(lat, long) {
    let result = await instance.get(`location/search/?lattlong=${lat},${long}`);
    return result.data;
}

export async function getLocationIdByName(name) {
    let result = await instance.get(`location/search/?query=${name}`);
    return result.data;
}


export async function getWeather(id) {
    let result = await instance.get(`location/${id}`);
    return result.data;
}

