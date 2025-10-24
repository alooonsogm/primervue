//Necesitamos las librerias de navegacion que hemos incluido con el npm install vue-router
import { createRouter, createWebHistory } from "vue-router";

import HomeComponent from "./components/HomeComponent.vue";
import CineMusica from "./components/CineComponent.vue";
import MusicaComponent from "./components/MusicaComponent.vue";
import HolaMundo from "./components/HolaMundo.vue"
import CicloVida from "./components/CicloVida.vue"
import DirectivasComponent from "./components/DirectivasComponent.vue"
import ParImpar from './components/ParImpar.vue'

//Un array con las rutas de navegacion
const myRoutes = [
    {path: "/", component: HomeComponent},
    {path: "/cine", component: CineMusica},
    {path: "/musica", component: MusicaComponent},
    {path: "/holamundo", component: HolaMundo},
    {path: "/ciclovida", component: CicloVida},
    {path: "/directivas", component: DirectivasComponent},
    {path: "/parimpar", component: ParImpar},
]

//Creamos una variable para el router, indicando el tipo de navegación y las rutas
const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

//La constante router es la que ultilizara el fichero main.js, por ello debemos exportarla para que sea utilizada
export default router;