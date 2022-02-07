import { computed, defineComponent, ref } from "vue";
import SearchResultss from "@/components/search-results/SearchResultss.vue";
import { usePlacesStore } from '@/composables/usePlacesStore';



export default defineComponent({
    name: 'SearchBar',
    components: { SearchResultss },
    setup() {

        const debounceTimeout = ref();
        const debouncedValue = ref('');

        const { searchPlacesByTerm } = usePlacesStore();

        return {
            debouncedValue,

            searchTerm: computed({
                get() {
                    return debouncedValue.value;
                },
                set( val: string ){

                    if ( debounceTimeout.value ) clearTimeout( debounceTimeout.value );

                    debounceTimeout.value = setTimeout(() => {
                        debouncedValue.value = val;   
                        searchPlacesByTerm( val ); 
                    }, 500);
                    
                }
            })
        }
    }
});
