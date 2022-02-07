import axios from "axios";

const directionsApi = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1Ijoicm9iZXJ0aGpvdCIsImEiOiJja3lxb3BlbmYwbTR0MndwMmcza2VrcDNpIn0.OR8xFNePn4djfSyQVGUScQ'
    }
});

export default directionsApi;