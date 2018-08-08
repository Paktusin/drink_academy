import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const initState = {
    color: 'blue'
};

const store = new Vuex.Store({
    state: {...initState},
    mutations: {
        setColor(state, color) {
            state.color = color;
        }
    }
});

export default store;