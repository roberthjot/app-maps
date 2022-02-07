import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1Ijoicm9iZXJ0aGpvdCIsImEiOiJja3lxb3BlbmYwbTR0MndwMmcza2VrcDNpIn0.OR8xFNePn4djfSyQVGUScQ'
    }
});

export default searchApi;