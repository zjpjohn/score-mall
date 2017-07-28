<template>
  <div class="nav-bar">
    <div class="back-arrow" @click="goback"><i class="mui-icon mui-icon-back"></i></div>
    <div class="nav-title">{{msg}}</div>
    <div class="share-icon"><i class="mui-icon mui-icon-more"></i></div>
  </div>
</template>
<script type="text/ecmascript-6">
  import route from '../router/index'
  export default {
    name: 'NavHeader',
    data () {
      return {
        msg: '积分商城'
      }
    },
    methods: {
      goback () {
        route.go(-1)
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .nav-bar{
    position: fixed;
    top:0;
    left:0;
    right:0;
    z-index: 999;
    display:flex;
    height:0.91rem;
    align-items: center;
    background: #FFFFFF;
    padding-right: 0.2rem;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
    .nav-title{
      flex:1;
      text-align: center;
      font-size: 0.34rem;
      color: #000000;
    }
  }
</style>
