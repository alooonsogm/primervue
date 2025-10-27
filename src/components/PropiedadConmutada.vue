<template>
    <div>
        <h1>Propiedades Conmutadas</h1>
        <input type="number" v-model="numero"/>
        <div v-html="evaluarNumero"></div>
        <ul>
            <li v-for="game in juegosRojos" :key="game" v-html="game"></li>
        </ul>
        <hr>
        <ul>
            <li v-for="juego in juegos" :key="juego">{{juego}}</li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "PropiedadConmutada",
        data(){
            return{
                juegos: ["Parchis", "Canicas", "Luz verde", "La galleta", "Monopoly"],
                numero: 2
            }
        },
        computed: {
            //Se escribe como un metodo, pero se utiliza como una propiedad
            juegosRojos() {
                var datos = this.juegos;
                var x = 0;
                for(var game of this.juegos){
                    var juegoRojo = "<span style='color:red'>" + game + "</span>";
                    datos[x] = juegoRojo;
                    x++;
                }
                return datos;
            },
            evaluarNumero(){
                var data = "";
                if(this.numero % 2 == 0){
                    data = "<h4 style='color:green'>Par: " + this.numero + "</h4>";
                } else {
                    data = "<h4 style='color:red'>Impar: " + this.numero + "</h4>";
                }
                return data;
            }
        }
    }
</script>

<style>
    @import './../assets/css/estilos.css'
</style>