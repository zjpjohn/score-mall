<template>
  <div class="app-wrapper">
    <div class="container treasure-index">
      <ul class="treasure-lists">
        <li>
          <a class="treasure-item" href="./treasure-detail.html">
            <img src="static/img/img_indiana_goods.png" alt="">
            <h4>小米笔记本Air13.3英寸</h4>
            <p class="date-num">期号：D70407YSY0001</p>
            <div class="treasure-statu ">
              <h5 class="will">即将开奖</h5>
              <div class="count-down">24:36:58</div>
            </div>
          </a>
        </li>
        <li>
          <a class="treasure-item">
            <img src="static/img/img_indiana_goods.png" alt="">
            <h4>小米电视Air 65英寸</h4>
            <p class="date-num">期号：D70407YSY0001</p>
            <div class="treasure-statu ">
              <h5 class="ended">已揭晓</h5>
              <div class="end-num">幸运号:10010123</div>
            </div>
          </a>
        </li>
        <li>
          <a class="treasure-item">
            <img src="static/img/img_indiana_goods.png" alt="">
            <h4>小米米家电动滑板车</h4>
            <p class="date-num">期号：D70407YSY0001</p>
            <div class="treasure-statu ">
              <h5 class="ing">进行中</h5>
              <div class="progress-box">
                <p>剩余1200/3000人次</p>
                <div class="progress">
                  <span class="progress-bar" style="width: 40%;"></span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="treasure-item">
            <img src="static/img/img_indiana_goods.png" alt="">
            <h4>米家行车记录仪</h4>
            <p class="date-num">期号：D70407YSY0001</p>
            <div class="treasure-statu ">
              <h5 class="ing">进行中</h5>
              <div class="progress-box">
                <p>剩余1500/3000人次</p>
                <div class="progress">
                  <span class="progress-bar" style="width: 50%;"></span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="treasure-item">
            <img src="static/img/img_indiana_goods.png" alt="">
            <h4>小米米家电动滑板车</h4>
            <p class="date-num">期号：D70407YSY0001</p>
            <div class="treasure-statu ">
              <h5 class="ing">进行中</h5>
              <div class="progress-box">
                <p>剩余1200/3000人次</p>
                <div class="progress">
                  <span class="progress-bar" style="width: 40%;"></span>
                </div>
              </div>
            </div>
          </a>
        </li>

      </ul>
    </div>
    <div class="sticky-footer shadow-footer">
      <div class="btn-groups">
        <button class="order-btn grey-btn"><a href="##">夺宝说明</a></button>
        <a href="./treasure-record.html" class="order-btn blue-btn">夺宝记录</a>
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
  @import "../../assets/scss/index";
  .treasure-index{
    .treasure-lists{
      background:#f5f5f5;
      li{
        float:left;
        width:3.7rem;
        background: #fff;
        overflow:hidden;
        margin-bottom:0.1rem;
        &:nth-child(odd){
          margin-right:0.1rem;
        }
      }
    }
    .treasure-item{
      display:flex;
      flex-direction:column;
      justify-content:center;
      padding:0.2rem 0.3rem;
      height:4.72rem;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      img{
        width:2.4rem;
        height:2.4rem;
        display: block;
        margin:0 auto;
      }
      h4{
        margin-bottom:0.2rem;
        width: 100%;
        text-align:left;
        font-size: 0.3rem;
        padding-top: 1px;
        color:#333;
        -ms-text-overflow: ellipsis;
        text-overflow: ellipsis;
        overflow-x:hidden;
        overflow-y:visible;
        white-space: nowrap;
      }
      .date-num{
        font-size: 0.24rem;
        color:#8c8c8c;
        margin-bottom:0.2rem;
      }
      .treasure-statu{
        h5{
          font-size: 0.26rem;
          padding-left: 0.42rem;
          padding-bottom:0.18rem;
          &.will{
            background: url('../../assets/images/icon_time_lottery.png') no-repeat left top;
            background-size: 0.26rem 0.26rem;
            color: #ed1c24;
          }
          &.ended{
            background: url('../../assets/images/icon_time_publish.png') no-repeat left top;
            background-size: 0.26rem 0.26rem;
            color: #3C6DF8;
          }
          &.ing{
            background: url('../../assets/images/icon_time_ongoing.png') no-repeat left top;
            background-size: 0.26rem 0.26rem;
            color:#FA9904;
          }
        }
      }
      .progress-box{
        font-size:0.2rem;
        color: #8C8C8C;
        .progress{
          margin-top: 0.1rem;
          width:3.1rem;
          background: #DEDEDE;
          border-radius: 6px;
          height:0.08rem;
          border:none;

          .progress-bar{

            background: #FA9904;
            display: block;
            height:100%;
            border-radius: 6px;

          }
        }
      }
      .count-down{
        font-size: 0.48rem;
        font-weight: 500;
        color: #ED1C24;
      }
      .end-num{
        font-size:0.36rem;
        font-weight: 500;
        color:#3C6DF8;
        width:100%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space:nowrap;
      }
    }
  }
</style>
