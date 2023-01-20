import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
Vue.use(Vuetify);
// let dark = window.matchMedia("(prefers-color-scheme: dark)").matches;
export default new Vuetify({
    theme: { dark: false },
});
