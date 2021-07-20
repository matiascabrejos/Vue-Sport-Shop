import { createApp } from 'vue';
import { createRouter, createWebHistory} from 'vue-router';

import App from './App.vue';

import BayernCamisetas from './components/Bayern/BayernCamisetas.vue';
import BayernOtras from './components/Bayern/BayernOtras.vue';
import SelectedItemBayern from './components/Bayern/SelectedItemBayern.vue';
import ArgentinaCamisetas from './components/Argentina/ArgentinaCamisetas.vue';
import ArgentinaCamperas from './components/Argentina/ArgentinaCamperas.vue';
import SelectedItemArgentina from './components/Argentina/SelectedItemArgentina.vue'
import HomePage from './components/HomePage.vue'
import NotFound from './components/NotFound.vue';
import NavigationArg from './components/Navigation/NavigationArg.vue';
import NavigationBay from './components/Navigation/NavigationBay.vue'


import 'bootstrap/dist/css/bootstrap.css'

const router = createRouter({
    history: createWebHistory(),
    routes: [ { path: '/argentina', component: SelectedItemArgentina },
              { path: '/bayern', component: SelectedItemBayern },
              { path: '/home', component: HomePage },
              { path: '/', redirect: '/home'},
              { path: '/:notFound(.*)', component: NotFound },
              { path: '/argcamisetas', component: ArgentinaCamisetas},
              { path: '/argcamperas', component: ArgentinaCamperas},
              { path: '/arg', component: NavigationArg},
              { path: '/baycamisetas', component: BayernCamisetas},
              { path: '/bayotros', component: BayernOtras}
],
linkActiveClass: 'active'
});

const app = createApp(App);

app.component('navigation-bay', NavigationBay);
app.component('navigation-arg', NavigationArg);
app.component('home-page', HomePage);
app.component('selected-item-argentina', SelectedItemArgentina);
app.component('argentina-camperas', ArgentinaCamperas);
app.component('argentina-camisetas', ArgentinaCamisetas);
app.component('selected-item-bayern', SelectedItemBayern);
app.component('bayern-camisetas', BayernCamisetas);
app.component('bayern-otras', BayernOtras);


app.use(router);
app.mount('#app')
