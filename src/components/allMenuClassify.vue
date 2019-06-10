<template>
  <div class="allMenuMain">
    <div class="classify-list" v-for="(item,key) in allClassifyList" :key="key">
      <router-link to="">
        <img :src='item.imgScr' alt="">
        <p class="classify-title">{{item.title}}</p>
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
      allClassifyList: Array,
      required: true
    },
    methods:{

    }
  }
</script>
<style>
  img{
    width: 230px;
    height: 230px;
  }
  .allMenuMain{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .classify-list{
    width: 33.333%;
    padding: 10px;
    text-align: center;
    background-color: #fff;

  }
  .classify-title{
    font-size: 28px;
    line-height: 40px;
  }

</style>
