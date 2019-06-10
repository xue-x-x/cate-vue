<template>
  <div class="footerMain">
    <div v-for="(item,key) in footerList" :key="key">
      <router-link :to="item.toHref">
        <p>
          <img :src="item.iconSrc" alt="">
        </p>
        <p class="title">{{item.title}}</p>
      </router-link>
    </div>
  </div>
</template>
<script>
  export default {
    data(){
      return{

      }
    },
    props:{
      footerList:Array,
      required:true
    }
  }
</script>
<style>
  .footerMain{
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-around;
    width: 100%;
    text-align: center;
    background-color: #f0f0f0;
  }
  .footerMain>div{
    width: 200px;
  }
  .footerMain img{
    width: 60px;
    height: 60px;
  }
  .title{
    padding-bottom: 10px;
  }
</style>
