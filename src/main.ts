import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import mapboxgl from 'mapbox-gl'; 
mapboxgl.accessToken = 'YOUR_MAPBOX_TOKEN_HERE';

if ( !navigator.geolocation ) {
    alert('Tu navegador no soporta el GeoLocation')
    throw new Error('Tu navegador no soporta el GeoLocation');
}

createApp(App)
    .use(store)
    .use(router)
    .mount('#app')
