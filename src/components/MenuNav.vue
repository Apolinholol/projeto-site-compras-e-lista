<template>
   
    <nav class="navbar bg-body-tertiary bg-primary d-flex justify-content-between align-items-center" data-bs-theme="dark">
       
          <div class="d-flex align-items-center">
            <a
              class="ms-3"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvas" 
              role="button"
              aria-controls="offcanvas"
              style="color:white;"
            >
              <i class="bi bi-card-list fs-1"></i>
            </a>
            <ListaDeProdutos/>
          </div>

        <div class="d-flex justify-content-center flex-grow-1">
          <div class="navbar-expand-lg">
            <div class="container-fluid p-2">
              <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
                <ul class="navbar-nav">
                  <li class="nav-item">
                    <router-link class="nav-link" to="/">Home</router-link> 
                  </li>
                  <li class="nav-item">
                    <router-link class="nav-link" to="/carrinho">Carrinho</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      

        <div class="d-flex align-items-center">
          <div v-if="!modoEscuro" class="me-3 card">
            <button class="btn ">
                <i class="bi bi-sun fs-4"> </i> 
            </button>
        </div>
        <div v-else class="me-3">
            <button class="btn btn-light fs-4">
                <i class="bi bi-moon-stars"></i>
            </button>
          </div>
        </div>
      </nav>
      
      

    <router-view/>
</template>

<script>
    import ListaDeProdutos from '../components/ListaDeProdutos.vue'
    import { defineComponent } from 'vue';

    export default defineComponent({
        name:"AppMenuNav",
        components:{ListaDeProdutos}
    })
</script>