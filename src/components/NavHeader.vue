<template>
  <div class="nav-bar">
    <div class="back-arrow"><i class="mui-icon mui-icon-back"></i></div>
    <div class="nav-title">{{msg}}</div>
    <div class="share-icon"><i class="mui-icon mui-icon-more"></i></div>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      name: 'NavHeader',
      data () {
        return {
          msg: '积分商城2'
        }
      }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .nav-bar{
    display:flex;
    height:45.5px; /*px*/
    align-items: center;
    background: #FFFFFF;
    box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
    .nav-title{
      flex:1;
      text-align: center;
      font-size: 0.34rem;
      color: #000000;
    }
  }
</style>
