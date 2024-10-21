<template>


    <MenuNav/>

</template>

<script lang="ts">
    import MenuNav from "@/components/MenuNav.vue"
    import ListaDeProdutos from "@/components/ListaDeProdutos.vue"
    import { defineComponent } from 'vue';

    export default defineComponent({
      name:"App",
      components:{ MenuNav }
    })
    
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active , .nav-link{
  color: white
}
</style>
