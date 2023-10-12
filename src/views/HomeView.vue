<script>
import { RouterLink, RouterView } from 'vue-router';
import Header from '../components/header.vue'; 
import Contain from "../components/Contain.vue";
import containtext from "../components/containtext.vue";
import Footer from "../components/Footer.vue";

export default{
  data(){
    return{

    }
  },
  methods:{

  },
  components:{
    Header,
    Contain,
    containtext,
    Footer,
  }
}
</script>

<template>
  <div class="main">
    <Header />
    <Contain />
    <containtext />
    <Footer />
    

  </div>
</template>

<style scoped>
.main{
  width: 100vw;
  height: 150vh;
  border:  1px solid black;
}
</style>
