<template>
  <carousel :items-to-show="3"
    :wrapAround="true"
  >
    <slide v-for="slide in vacancies" :key="slide">
      {{ slide }}
    </slide>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
</template>
<script type="text/javascript">
  import "vue3-carousel/dist/carousel.css";
  import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

  // const vacancies = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  export default {
    data(){
      return{
        vacancies: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
      }
    },
    name: 'App',
    props:{
      // vacancies: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    },
    components: {
      Carousel,
      Slide,
      Pagination,
      Navigation,
    },
    mounted() {
    }
  };
</script>
<style scoped>
  .carousel-indicators,.card{
    position:static;
  }
  .carousel-indicators > button {
    border-radius: 50%;
    width:10px;
    height:10px;
    background-color: grey;
  }
  .carousel-indicators .active{
    background-color: blue;
  }
</style>
