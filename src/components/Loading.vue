<template>
  <div class="loading">
    <div class="loading-box">
      <h4>加载中，请稍候...</h4>
      <div class="img-wrapper">
        <img src="../assets/images/loading.gif" alt="">
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      name: 'hello',
      data () {
        return {
          msg: '数据'
        }
      }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .loading{
    position: fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    background: rgba(0,0,0,0.5);
    z-index: 99;
    .loading-box{
      width:5rem;
      height:5rem;
      position: absolute;
      left:50%;
      top:50%;
      padding:0.4rem;
      margin-left: -2.5rem;
      margin-top: -2.5rem;
      background: #fff;
      border-radius: 0.08rem;
      overflow: hidden;
      text-align: center;
      h4{
        font-size: 0.32rem;
        font-weight: normal;
      }
    }

  }
</style>
