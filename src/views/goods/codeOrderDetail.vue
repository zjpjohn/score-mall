<template>
  <div class="code-order">
    <div class="order-info">
      <div class="img-wrapper">
        <img src="static/img/123@2x.png" alt="">
      </div>
      <div class="order-code-info">
        <h4>20M元流量劵</h4>
        <p>单价：<span>500积分</span></p>
        <p>数量：<span>2</span></p>
        <p>总价：<span class="text-blue">1000积分</span></p>
      </div>
    </div>
    <div class="code-info">
      <h4>激活码</h4>
      <ul class="code-lists">
        <li>
          <div class="code">YK37699DF8E1O</div>
          <button class="copy-btn" onclick="copy('YK37699DF8E1O')">复制</button>
        </li>
        <li>
          <div class="code">YK37699DF8E54</div>
          <button class="copy-btn" onclick="copy('YK37699DF8E54')">复制</button>
        </li>
      </ul>
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
  .code-order{
    .order-info{
      padding:0.3rem;
      padding-bottom: 0.6rem;
      display:flex;
      justify-content: flex-start;
      align-items: flex-start;
      .img-wrapper{
        margin-right: 0.14rem;
        width:1.2rem;
        height:1.2rem;
        border: 1px solid #E7E7E7;
        border-radius: 0.12rem;
        display:flex;
        align-items: center;
        img{
          width:100%;

        }
      }
      .order-code-info{
        line-height: 0.34rem;
        h4{
          font-size:0.3rem;
          font-weight: normal;
          color: #333333;
          line-height: 0.34rem;
          margin-bottom: 0.1rem;
        }
        p{
          font-size: 0.28rem;
          color: #666666;
          span{
            margin-left: 0.14rem;
          }
        }
      }
    }
    .code-info{
      background: #fff;
      margin-top: 0.2rem;
      h4{
        font-size:0.28rem;
        color: #333333;
        height:1rem;
        margin:0;
        padding: 0 0.3rem;
        line-height:1rem;
        border-top:1px solid #D4D4D4;
      }
      .code-lists{
        padding-left:0.3rem;
        border: 1px solid #D4D4D4;
        border-left: none;
        border-right: none;
        li{
          width:100%;
          height:1.28rem;
          line-height: 1.28rem;
          display: flex;
          justify-content:space-between;
          align-items:center;
          padding-right: 0.3rem;

          &+li{
            border-top: 1px solid #D4D4D4;
          }
          .code{
            font-size: 0.3rem;
            color: #030303;
          }
          .copy-btn{
            width:1.2rem;
            height:0.6rem;
            padding: 0;
            line-height: 0.6rem;
            text-align: center;
            background: #3C6DF8;
            border-radius: 4px;
            font-size: 0.3rem;
            color: #FFFFFF;
            border:none;
          }
        }
      }
    }
  }
</style>
