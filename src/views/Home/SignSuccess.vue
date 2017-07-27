<template>
  <div class="signIn-success">
    <img src="../../assets/images/btn_close_01.png" alt="" class="close">
    <div class="remind-content">
      <img src="../../assets/images/img_jifen.png" alt="">
      <div>积分+{{score}}</div>
      <p>明日签到将获得{{will}}积分</p>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      name: 'SignSuccess',
      data () {
        return {
          score: '10',
          will: '15'
        }
      }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .signIn-success{
    background: #fff;
    width:6rem;
    height:3.64rem;
    border-radius: 4px;
    border:1px solid #eeeeee;
    position: absolute;
    top:5.2rem;
    left:50%;
    margin-left: -3rem;
    padding-top: 0.55rem;
    display: none;
    -webkit-animation-duration: 0.5s;
    -o-animation-duration: 0.5s;
    animation-duration: 0.5s;
  img.close{
    position: absolute;
    width:0.44rem;
    height:0.46rem;
    right:-0.22rem;
    top:-0.23rem;
  }
  .remind-content{
    width:6rem;
    margin-top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-size: 0.3rem;
  img{
    width:1.98rem;
    display:block;
  }
  div{
    color: #3C6DF8;;
    display:block;
    padding:0.26rem 0;
    font-size: 0.3rem;
  }
  p{
    color: #B2B2B2;
    display:block;
    font-size: 0.3rem;
  }
  }
  }
</style>
