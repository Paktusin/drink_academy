import './css/main.scss'
import Vue from 'vue/dist/vue.runtime.esm';
import App from './components/App.vue'


new Vue({
    el: '#root',
    components: {App},
    render(h) {
        return h('App')
    }
});