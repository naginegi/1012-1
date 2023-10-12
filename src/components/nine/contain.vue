<script>
import Left from "./left.vue"
import Right from "./right.vue"
export default{
  data(){
    return{

    }
  },
  methods:{

  },
  components:{
    Left,
    Right
  }
}
</script>

<template>
<div class="contain">
    <Left />
    <Right />
</div>

</template>

<style lang="scss" scoped>
.contain{
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>