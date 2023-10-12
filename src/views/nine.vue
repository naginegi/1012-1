<script>
import Header from "../components/nine/header.vue"
import contain from "../components/nine/contain.vue"
import Footer from "../components/nine/footer.vue"
export default{
  data(){
    return{

    }
  },
  methods:{

  },
  components:{
    Header,
    contain,
    Footer
  }
}
</script>

<template>
<div class="main">

    <Header />
    <contain />
    <Footer />
</div>

</template>

<style lang="scss" scoped>
.main{
    width: 100vw;
    height: 150vh;
    border: 1px solid black;
}
</style>