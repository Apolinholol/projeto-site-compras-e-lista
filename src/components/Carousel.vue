<template>

    <div class="container mt-5 " style="max-width:500px;">
        <div id="carouselExampleAutoplaying" class="carousel slide mx-auto d-flex mt-5 img-fluid" data-bs-ride="carousel" style="max-width: 700px; max-height:500px">
            <div class="carousel-inner rounded">
                <div class="carousel-item active">
                    <img src="../assets/4060.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/3060ti.jpg" class="d-block w-100" alt="...">
                </div>
                <div class="carousel-item">
                    <img src="../assets/6600.jpg" class="d-block w-100" alt="...">
                </div>
            </div>
            <button class="carousel-control-prev position-absolute top-50 translate-middle-y" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev" style="left: 0;color:black;">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next position-absolute top-50 translate-middle-y" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next" style="right: 0;">
                <span class="carousel-control-next-icon" aria-hidden="true" style="color: black;"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>

</template>
<script>
    import {defineComponent} from 'vue'
    export default defineComponent({ name:"AppCarousel"})
</script>

<style scoped>
.carousel-control-prev-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E") !important;
   }
   
   .carousel-control-next-icon {
     background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23000' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E") !important;
   }
</style>

<style scoped>
.carousel {
    transition: transform 0.3s ease;
    box-shadow: 0px 4px 10px 2px rgba(255, 174, 0, 0.5);
  
}
</style>
