import axios from 'axios';
const mapboxToken = process.env.REACT_APP_ACCESS_TOKEN_MAP_BOX;

export const api = axios.create({
    baseURL: process.env.REACT_APP_ACCESS_API_URL
});

export function fetchLocalMapBox(local: String) {
    
    return axios(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${mapboxToken}`)
}

export function fetchLocalMapBoxLatLgn(lat: number, lng: number){
    return axios (`https://api.mapbox.com/geocoding/v5/mapbox.places/peets.json?proximity=${lat},${lng}&access_token=${mapboxToken}`)
}
