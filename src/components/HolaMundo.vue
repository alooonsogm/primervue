<template>
    <div>
        <h1>Mi primer vue de viernes, que ilusión!!</h1>
        <h2>Su nombre: {{nombre}}</h2>
        <h2>Su edad: {{edad}}</h2>
        <img src="./../assets/images/mbappe.png" alt="foto"/>
    </div>
</template>

<script>
    //VUE utiliza codigo JS (especial), cada component debe tener un nombre obligatorio
    //y debemos exportarlo con dicho nombre. El name es la etiqueta que utilizaran otros components para dibujar
    export default {
        name: "HolaMundo",
        data(){
            //Las variables son declaradas en formato json dentro de un return
            return {
                nombre: "Alumno",
                edad: 25,
                miArray: [],
                objeto: {}
            }
        }
    }
</script>

<style>
    h1 {color: blue;}
    @import './../assets/css/estilos.css'
</style>