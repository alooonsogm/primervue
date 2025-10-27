<template>
    <div>
        <h1>Metodos Filters</h1>
        <ul>
            <li v-for="num in numeros" :key="num">
                Numero: {{num}},
                Doble: {{$filters.getNumeroDoble(num)}}
            </li>
        </ul>
        <hr>
        <ul>
            <li v-for="name in nombres" :key="name">
                Nombre: {{name}},
                NombreMayuscula: {{$filters.mayuscula(name)}}
            </li>
        </ul>
        <hr>
        <ul>
            <li v-for="name in nombres2" :key="name">
                Nombre: {{name}},
                NombreMinuscula: {{$filters.minuscula(name)}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "MetodosFilters",
        data(){
            return{
                numeros: [33, 45, 12, 93, 5],
                nombres: ["alonso", "paco", "lucia", "carlos"],
                nombres2: ["MIGUEL", "ALBERTO", "ADRIAN", "YOLANDA"]
            }
        }
    }
</script>