<template>
  <div class="empty-page">
    <div class="empty-box">
      <div class="img-wrapper">
        <img src="../assets/images/img_record@2x.png" alt="">
      </div>
      <p>{{ msg }}</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  export default {
    name: 'hello',
    data () {
      return {
        msg: '亲，你还没有兑换记录哦~'
      }
    }
  }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .empty-page {
    position: absolute;
    top:0;
    bottom:0;
    width: 100%;
    height: 100%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    .empty-box {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      .img-wrapper {
        img {
          width: 2.12rem;
          height: 2.08rem;
        }
      }
      p {
        width: 4rem;
        text-align: center;
        margin-top: 0.4rem;
        font-size: 0.3rem;
        color: #666666;
      }
    }
  }
</style>
