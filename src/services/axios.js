import axios from "axios";

const instance = axios.create({
    baseURL: 'https://www.metaweather.com/api/',
    headers: {
        "Access-Control-Allow-Origin": "true"
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

