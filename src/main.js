import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/tailwind/tailwind.css';

import PrimeVue from 'primevue/config';
import Aura from '@primevue/themes/aura';
import Button from "primevue/button"
import InputText from 'primevue/inputtext';
import Checkbox from 'primevue/checkbox';
import './assets/spacing.css';
import Menu from 'primevue/menu';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


// import './plugins';
 
const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon);

app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
});

app.component('Button', Button);
app.component('input-text', InputText);
app.component('input-checkbox', Checkbox);
app.component('side-menu', Menu);


app.use(router)

app.mount('#app')
