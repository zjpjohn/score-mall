<template>
  <div class="app-wrapper sure-order order-success ">
    <div class="container ">
      <div class="success-tip">
        <img class="success-icon" src="../../assets/images/icon_success.png" alt="">
        <p>恭喜您，兑换成功！</p>
      </div>
      <router-view></router-view>
    </div><!--主内容结束-->
    <div class="sticky-footer">
      <router-link class="btn sureBtn" to="/">再去逛逛</router-link>
    </div>


  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'orderDeal',
    data () {
      return {
        goods: 'goods'
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/scss/index";
  .success-tip{
      display: flex;
      flex-direction: column;
      padding:0.4rem;
      margin-bottom: 0.2rem;
      justify-content: center;
      align-items: center;
      font-size: 0.3rem;
      border-bottom: 1px solid #ddd;
      background: #fff;
      color: #666666;
      .success-icon{
        width:0.68rem;
        height:0.68rem;
        display: block;
        margin-bottom: 0.3rem;
      }

    }
</style>
