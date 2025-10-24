<template>
    <div>
        <h1>Par e Impar</h1>
        <label>Introduzca un numero: </label>
        <input type="number" v-model="numerocaja"/>
        <h4>{{numerocaja}}</h4>
    </div>
</template>

<script>
    export default {
        nombre: "ParImpar",
        data(){
            return{
                numerocaja: 0
            }
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css'
</style>