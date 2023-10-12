<script>
export default{
  data(){
    return{
        arr:[1,2,3,4,5,6,7,8,9]
    }
  },
  methods:{

  },
  components:{
  }
}
</script>

<template>
<div class="right">
    <div class="text">
        <h1>Title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In corrupti labore minus rerum magnam earum, quo molestiae fuga ipsam hic facere reiciendis culpa unde at, quasi delectus neque aspernatur quae.</p>
    </div>
    <div class="area">
        <div class="block" v-for="i in arr"><p>name</p></div>
        
    </div>
</div>

</template>

<style lang="scss" scoped>
.right{
    width: 60%;
    height: 90%;
    .text{
        width: 100%;
        height: 15%;
        margin-top: 50px;
        display: flex;
        p{
            font-size: 8pt;
            margin-left: 25px;
        }
    }
    .area{
        width: 100%;
        height: 80%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .block{
            width: 30%;
            height: 20%;
            display: flex;
            background-color: #35d9df;
            position: relative;
            p{
                position: absolute;
                top:140px;
                left: 50px;
                font-size: 20pt;
            }
        }
    }
}
</style>