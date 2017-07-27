<template>
  <ul class="score-goods">
    <li>
      <a href="##" class="mui-clearfix">
        <img class="img-left" src="static/img/img_goods.png" alt="">
        <div class="right-info">
          <h5>诺诗兰（NORTHLAND）轻量级空气净化器</h5>
          <div class="score-value">
            <mark>1000000积分</mark>
          </div>
          <button class="getNow">立即抢兑</button>
        </div>
      </a>
    </li>
    <li>
      <a href="./pages/shopping/e-goods.html" class="mui-clearfix">
        <img class="img-left e-img" src="static/img/100M.png" alt="">
        <div class="right-info">
          <h5>诺诗兰（NORTHLAND）轻量级空气净化器</h5>
          <div class="score-value">
            <mark>1000000积分</mark>
          </div>

          <button class="getNow">立即抢兑</button>
        </div>
      </a>
    </li>
    <li>
      <a href="./pages/shopping/code-goods.html" class="mui-clearfix">
        <img class="img-left" src="static/img/img_indiana.png" alt="">
        <div class="right-info">
          <h5>诺诗兰（NORTHLAND）轻量级空气净化器</h5>
          <div class="score-value">
            <mark>1000000积分</mark>
          </div>

          <button class="getNow">立即抢兑</button>
        </div>
      </a>
    </li>
    <li>
      <a href="./404.html" class="mui-clearfix">
        <img class="img-left" src="static/img/img_indiana.png" alt="">
        <div class="right-info">
          <h5>诺诗兰（NORTHLAND）轻量级空气净化器</h5>
          <div class="score-value">
            <mark>1000000积分</mark>
          </div>

          <button class="getNow">立即抢兑</button>
        </div>
      </a>
    </li>
    <li>
      <a href="./lose-internet.html" class="mui-clearfix">
        <img class="img-left" src="static/img/img_goods.png" alt="">
        <div class="right-info">
          <h5>诺诗兰（NORTHLAND）轻量级空气净化器</h5>
          <div class="score-value">
            <mark>1000000积分</mark>
          </div>
          <button class="getNow">立即抢兑</button>
        </div>
      </a>
    </li>
  </ul>
</template>
<script type="text/ecmascript-6">
export default {
  name: 'GoodsLists',
  data () {
    return {
      msg: '数据'
    }
  }
}
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .score-goods{
    background:#fafafa;
    li{
      width:6.7rem;
      margin:0 auto;
      margin-bottom: 0.2rem;
      box-shadow: 0 4px 18px 0 rgba(0,0,0,0.07);
      a{
        display: flex;
        align-items: center;
        overflow: hidden;
        padding:0.2rem 0.2rem;
        .img-left{
          width:2.3rem;
          height:2.3rem;
          margin-right: 0.2rem;
          &.e-img{
            width: 2.3rem;
            height:auto;
          }
        }
        .right-info{
          width:3.76rem;
          display: inline-block;
          float: left;
          overflow: hidden;
          h5{
            font-size: 0.3rem;
            color: #333333;
            letter-spacing: 0;
            line-height: 0.42rem;
            margin-bottom: 0.16rem;
            word-break: break-all;
          }
          .score-value{
            mark{
              background: transparent;
              font-size: 0.34rem;
              color: #F46467;
            }

          }
          .getNow{
            margin-top: 0.3rem;
            padding:0.03rem 0.18rem;
            font-size: 14px;
            color: #FFFFFF;
            background: #3C6DF8;
            border-radius: 4px;
            border:1px solid  #3C6DF8;
            float: right;
          }
        }
      }
    }
  }
</style>
