<template>
    <div>
        <h1>Par e Impar</h1>
        <label>Introduzca un numero: </label>
        <input type="number" v-model="numerocaja"/>
        <button @click="generarRamdom()">Generar numero</button>
        <h3 v-if="numerocaja % 2 == 0" style="color:green">Par</h3>
        <h3 v-else style="color:red">Impar</h3>
    </div>
</template>

<script>
    export default {
        nombre: "ParImpar",
        data(){
            return{
                numerocaja: 0
            }
        },
        methods: {
            generarRamdom() {
                this.numerocaja = parseInt(Math.random() * 100) + 1
            }
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css'
</style>