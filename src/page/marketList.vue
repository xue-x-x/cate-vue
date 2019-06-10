<template>
  <div>
    <market-list-hesder :title="title"></market-list-hesder>
    <commodity :commodityList="commodityList"></commodity>
  </div>
</template>
<script>
  import commodity from '../components/commodity.vue';
  import marketListHesder from '../components/header.vue';
//  import axios from 'axios'

  export default {
    components: {
      commodity,
      marketListHesder,
    },
    data(){
      return{
        commodityList:[],
        title:"",
        name:"",
      }
    },
    methods:{
      getLIist(){
        axios.get('/api/db.json').then((response)=>{
          console.log(response);
        }).catch((response)=>{
          console.log(response);
        })
      }
    },
    created: function(){
      var _this=this;
      _this.name=_this.$route.params.name;
      /*$.ajax({
        type: "get",
        url: '/api/db.json',
        data :{
        },
        dataType: "json",
        success: function (data) {
          console.log(data.marketList);
          if(_this.name == 'grainOil'){
            _this.title=data.marketList.grainOil.title;
            _this.commodityList=data.marketList.grainOil.content;
          }else if(_this.name == 'bake'){
            _this.title=data.marketList.bake.title;
            _this.commodityList=data.data.bake.content;
          }else if(_this.name == 'import'){
            _this.title=data.marketList.import.title;
            _this.commodityList=data.marketList.import.content;
          }
        },
        error: function (msg) {
          console.log(msg);
        }
      });*/

      _this.axios.get('/api/db.json').then((data)=>{
        console.log(data.data);
        if(_this.name == 'grainOil'){
          _this.title=data.data.marketList.grainOil.title;
          _this.commodityList=data.data.marketList.grainOil.content;
        }else if(_this.name == 'bake'){
          _this.title=data.data.marketList.bake.title;
          _this.commodityList=data.data.bake.content;
        }else if(_this.name == 'import'){
          _this.title=data.data.marketList.import.title;
          _this.commodityList=data.data.marketList.import.content;
        }

      }).catch((response)=>{
        console.log(response);
      })
    }
  }
</script>
