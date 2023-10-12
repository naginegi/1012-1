<script>
import { RouterLink, RouterView } from 'vue-router';

export default{
  data(){
    return{

    }
  },
  methods:{

  },
  components:{
    RouterView,
  }
}
</script>

<template>
  <div class="main">
    <RouterView />
    

  </div>
</template>

<style scoped>
.main{
  width: 100vw;
  height: 150vh;
  border:  1px solid black;
}
</style>
