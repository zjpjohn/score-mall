<template>
  <div>
    <div class="e-order">
      <div class="img-wrapper">
        <img src="static/img/123@2x.png" alt="">
      </div>
      <div class="e-info">
        <h4>20M元流量劵</h4>
        <p>单价：<span>500积分</span></p>
        <p>数量：<span>2</span></p>
        <p>总价：<span class="text-blue">1000积分</span></p>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        msg: '数据'
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../assets/scss/index";
  .e-order{
    background: #fff;
    padding:0.3rem;
    display: flex;
    flex-direction: row;
    border-top: 1px solid #E7E7E7;
    border-bottom: 1px solid #E7E7E7;
    .img-wrapper{
      width:1.2rem;
      height:1.2rem;
      border: 1px solid #E7E7E7;
      border-radius: 0.08rem;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 0.2rem;
      img{
        width:86%;
      }
    }
    .e-info{
      background: #fff;
      h4{
        font-size: 0.3rem;
        font-weight: normal;
        color: #333333;
        margin-bottom: 0.16rem;
      }
      p{
        font-size: 0.28rem;
        color: #666666;
        margin-bottom: 0.12rem;
      }
    }
  }
</style>
