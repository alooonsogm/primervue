<template>
    <div>
        <h1>Ciclo de vida</h1>
        <h2 style="color: red">{{mensaje}}</h2>
        <button @click="cambiarMensaje()">Cambiar mensaje</button>
    </div>
</template>

<script>
    export default {
        name: "CicloVida",
        data(){
            return {
                mensaje: "Hoy es viernes!!"
            }
        },
        methods:{
            //Aqui incluimos nuestros metodos personalizados
            cambiarMensaje() {
                //Para acceder a las variables de data del component, debemos utilizar this
                this.mensaje = "Hoy se sale!!";
            }
        },
        mounted(){
            console.log("Component mounted");
        },
        created (){
            console.log("Component created")
        },
        updated(){
            console.log("Component update")
        },
        unmounted(){
            console.log("Component unmounted")
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css'
</style>