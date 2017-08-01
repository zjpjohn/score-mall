<template>
  <div class="container ">
    <div class="goods">
      <div class="img-wrapper">
        <img src="static/img/50M.png" alt="">
      </div>
      <h3><strong>300</strong>积分</h3>
    </div>
    <div class="order-form">
      <form action="##" class="order">
        <div class="line-item">
          <label >手机号</label>
          <div class="input-group">
            <input type="text" id="phone" placeholder="请输入兑换流量的手机号" name="tel" class="input-area" oninput="this.value=this.value.replace(/\D/,'')">
          </div>

        </div>
        <div class="line-item">
          <label >数量</label>
          <div class="input-group">
            <div class="mui-numbox" data-numbox-min='1' data-numbox-max='9'>
              <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
              <input id="number" class="mui-input-numbox" type="number" value="1" />
              <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
            </div>
          </div>

        </div>
        <div class="line-item">
          <label >总价</label>
          <div class="input-group goods-value">
            <span>500</span>积分
          </div>
        </div>
      </form>
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
  @import "../../assets/scss/index";
    .goods{
      margin-top: 0.8rem;
      background: #fff;
      height:1.8rem;
      position: relative;
      padding-left: 2.4rem;
      padding-top: 0.5rem;
      border-bottom: 1px solid #E7E7E7;
      .img-wrapper{
        background: #FFFFFF;
        border: 1px solid #E7E7E7;
        border-radius: 0.12rem;
        width:2rem;
        height:2rem;
        position: absolute;
        left:0.3rem;
        top:-0.4rem;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
          width:100%;
        }
      }
      h3{
        font-size: 0.26rem;
        color: #EB0247;
        font-weight: normal;
        margin-left: 0.2rem;
        strong{
          font-size: 0.4rem;
          color: #EB0247;
          margin-right: 0.1rem;
        }
      }
    }
    .order-form{
      background: #fff;
      padding:0.2rem 0.3rem;
      .line-item{
        padding:0.2rem 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
        label{
          font-size: 0.3rem;
          width:1.52rem;
          color: #666666;
        }
        .input-group{
          display: inline-block;
          text-align: right;
          input{
            margin-bottom: 0;
          }
          .input-area{
            height:0.8rem;
            width:5.38rem;
            font-size:0.3rem;
            box-sizing: border-box;
            padding: 0.22rem 0.3rem;
          }
          .mui-numbox{
            height:0.52rem;
            width:auto;
            padding:0 0.52rem;
            .mui-input-numbox{
              width:1.08rem!important;
              line-height: 0.52rem;
            }
            .mui-btn{
              width:0.52rem;
            }
          }
          &.goods-value{
            font-size: 0.3rem;
            color: #3C6DF8;
            letter-spacing: 0.01rem;
          }

        }
      }
    }
</style>
