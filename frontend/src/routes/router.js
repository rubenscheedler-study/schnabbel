import VueRouter from 'vue-router'
import Home from '../components/Home'
import Login from '../components/Login'
import Signup from '../components/Signup'

// https://stackoverflow.com/questions/45370112/vue-js-separate-routes-in-different-files
/**
 * This file contains all top level routes. 
 * It also registers child routes defined in dedicated route files.
 */
export default new VueRouter({routes:
    [
    { path: '/login', component: Login },
    { path: '/home', component: Home },
    { path: '/signup', component: Signup}
    ]
});
