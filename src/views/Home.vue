<template>
  
  <MapViews />

  <SearchBar />
  <MyLocationBtn />
  <TripDetails />

</template>

<script lang="ts">
import { usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';

import MapViews from '@/components/mapview/MapViews.vue';
import SearchBar from '@/components/searchbar/SearchBars.vue';
import MyLocationBtn from "@/components/my-location-btn/MyLocationBtn.vue";
import TripDetails from "@/components/trip-details/TripDetails.vue";

export default defineComponent({
  name: 'Home',
  components: { MapViews, MyLocationBtn, SearchBar, TripDetails },
  setup(){
    
    usePlacesStore();

  }
});
</script>
