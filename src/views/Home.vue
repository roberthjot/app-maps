<template>
  
  <MapViews />

</template>

<script lang="ts">
import { usePlacesStore } from '@/composables';
import { defineComponent } from 'vue';

import MapViews from '@/components/mapview/MapViews.vue';

export default defineComponent({
  name: 'Home',
  components: { MapViews },
  setup(){
    
    usePlacesStore();

  }
});
</script>
