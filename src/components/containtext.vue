<script>
import {RouterLink,RouterView} from 'vue-router'
</script>

<template>
<div class="containtext">
<div class="containarea">
    
</div>
<div class="text">
    <RouterLink to="nine">switch</RouterLink>
    <h1>title</h1>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae, assumenda nisi atque voluptate pariatur sint! Laudantium dolorem iste, aliquid commodi perferendis magni in ut temporibus. Quidem laudantium deleniti eos sit!</p>
</div>
</div>
</template>

<style lang="scss" scoped>
.containtext{
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // background-color: #35d9df;
    .containarea{
        width: 50%;
        height: 70%;
        background-color: #35d9df;
    }
    .text{
        width: 45%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
    }
}
</style>