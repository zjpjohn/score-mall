<template>
  <div class="page empty-page">
    <div class="lose-box">
      <div class="img-wrapper">
        <img src="../assets/images/img_order_non@2x.png" alt="">
      </div>
      <p>亲，你还没有<span>兑换记录</span>哦~</p>
      <div class="buttons">
        <button class="mui-btn blue-btn" onclick="reload()">立即刷新</button>
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
<style lang="scss" rel="stylesheet/scss" scoped>
  .empty-page{
    position: absolute;
    top:0;
    bottom:0;
    width:100%;
    height:100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    //  无网络
    .lose-box{
      display: flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
      .img-wrapper{
        img{
          width:1.84rem;
          height:2.4rem;
        }
      }
      p{
        width:4rem;
        text-align: center;
        font-size: 0.3rem;
        color: #666666;
        margin-top: 0.4rem;
        margin-bottom: 0.6rem;
      }
      .buttons{
        .blue-btn{
          background: #3C6DF8;
          border-radius: 0.04rem;
          color: #fff;
          border:none;
        }
      }
    }
  }
</style>
