<template>
    <div>
        <h1>Ejemplo Directivas</h1>
        <h3>{{$data}}</h3>
        <label>Introduzca serie nueva: </label>
        <input type="text" v-model="serienueva"/>
        <button @click="nuevoSerie()">Nueva serie??</button>
        <ul v-if="series.length > 0">
            <li v-for="serie in series" :key="serie">{{serie}}</li>
        </ul>
        <label>Introduzca un numero: </label>
        <input type="number" v-model="numero"/>
        <h3 v-if="numero > 0" style="color:green">Positivo</h3>
        <h3 v-else-if="numero<0" style="color:red">Negativo</h3>
        <h3 v-else style="color:blue">Neutro</h3>
    </div>
</template>

<script>
    export default {
        nombre: "DirectivasComponent",
        data(){
            return{
                numero: 0,
                nombre: "Alumno",
                series: ["Futurama", "MindHunter", "The boys", "Stranger Things"],
                serienueva: ""
            }
        },
        methods: {
            nuevoSerie() {
                this.series.push(this.serienueva);
            }
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css'
</style>