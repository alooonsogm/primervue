<template>
    <div>
        <ul id="menu">
            <li>
                <router-link to="/">Home</router-link> |
            </li>
            <li>
                <router-link to="/musica">Musica</router-link> |
            </li>
            <li>
                <router-link to="/cine">Cine</router-link> |
            </li>
            <li>
                <router-link to="/holamundo">Hola mundo</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MenuComponent"
    }
</script>

<style>
    #menu li {
        display: inline;
    }
</style>