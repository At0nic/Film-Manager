import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import MoviesList from '../components/MoviesList.vue';
import AddMovie from '../components/AddMovie.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/movies', component: MoviesList },
  { path: '/add-movie', component: AddMovie }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;