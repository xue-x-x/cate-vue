<template>
  <div>
    <div class="imageText">
      <div class="imageText-list" v-for="(item,key) in imageTextList" :key="item.id">
        <router-link :to="item.toSrc">
          <img :src="item.imgSrc" alt="">
          <p>{{item.title}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name:'imageText',
    data(){
      return{

      }
    },
    props: {
      imageTextList: Array,
      required: true
    }
  }
</script>
<style scoped>
  .imageText{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    text-align: center;
  }
  .imageText div{
    width: 25%;
  }
  .imageText-list{
    padding: 20px 0;
    text-align: center;
    font-size: 28px;
  }
  .imageText-list p{
    padding: 10px 0;
  }
</style>
