import { GetterTree } from "vuex";
import { ExampleStateInterface } from "./state";
import { StateInterface } from "../index";


const getters: GetterTree<ExampleStateInterface, StateInterface> = {
    someGetter( /*State*/ ){
        // return true;
    }
}

export default getters;