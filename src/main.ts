import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; 
mapboxgl.accessToken = 'pk.eyJ1Ijoicm9iZXJ0aGpvdCIsImEiOiJja3lxb3BlbmYwbTR0MndwMmcza2VrcDNpIn0.OR8xFNePn4djfSyQVGUScQ';

if ( !navigator.geolocation ) {
    alert('Tu navegador no soporta el GeoLocation')
    throw new Error('Tu navegador no soporta el GeoLocation');
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
