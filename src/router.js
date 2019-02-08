import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home';
import Login from './views/Auth/Login';
import Reg from './views/Auth/Register';
import Orders from './views/User/Orders';
import Ad from './views/Ads/Ad';
import AdList from './views/Ads/AdList';
import NewAd from './views/Ads/NewAd';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/login',
            component: Login
        },
        {
            path: '/registration',
            component: Reg
        },
        {
            path: '/orders',
            component: Orders
        },
        {
            path: '/ad/:id',
            component: Ad
        },
        {
            path: '/list',
            component: AdList
        },
        {
            path: '/new',
            component: NewAd
        }
    ],
    mode:'history'
});
