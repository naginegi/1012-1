<script>
import containup from "./containup.vue";
export default{
  data(){
    return{

    }
  },
  methods:{

  },
  components:{
    containup,
  }
}
</script>

<template>
<div class="contain">
    <containup />
    <containup />
    <containup />
</div>
</template>

<style lang="scss" scoped>
.contain{
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: space-around;
    
    // background-color: #35d9df;
}
</style>