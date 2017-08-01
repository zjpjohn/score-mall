<template>
  <div class="app-wrapper-no">
    <div class="container treasure-latest">
      <ul class="latest-lists">
        <li>
          <div class="latest-item">
            <h4>期号:D20170407YSY0002 (揭晓时间：2017-04-12 17:14:00.385)</h4>
            <div class="lucky-info">
              <img src="../../img/img_participants.png" alt="">
              <div class="info-block">
                <p class="lucky-name">获奖者：<span class="text-blue">雾袅袅</span></p>
                <p>用户ID：<span>四川成都 218.108.36.98</span></p>
                <p>期号：<span>D2017047YSY0002</span></p>
                <p>本期参与：<span>100</span></p>
                <p>幸运号：<span>10010123</span></p>
              </div>
            </div>
          </div>
        </li>
        <li>
          <div class="latest-item">
            <h4>期号:D20170407YSY0002 (揭晓时间：2017-04-12 17:14:00.385)</h4>
            <div class="lucky-info">
              <img src="../../img/img_participants.png" alt="">
              <div class="info-block">
                <p class="lucky-name">获奖者：<span class="text-blue">雾袅袅</span></p>
                <p>用户ID：<span>四川成都 218.108.36.98</span></p>
                <p>期号：<span>D2017047YSY0002</span></p>
                <p>本期参与：<span>100</span></p>
                <p>幸运号：<span>10010123</span></p>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div class="last-tips">
        <h4>已经到最底部了</h4>
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
  //往期揭晓
  .treasure-latest{
    background: #F7F7F7;
    .latest-lists{
      li{
        margin-bottom: .1rem;
        background: #fff;
      }
    }
    .latest-item{
      padding:0.3rem;
      height:2.84rem;
      width:100%;
      h4{
        font-size: 0.24rem ;
        color: #000;
        margin-bottom: 0.24rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        font-weight: 400;
      }
      .lucky-info{
        display: flex;
        img{
          width:0.6rem;
          height:.6rem;
          margin-top: .3rem;
          border-radius: 100%;
          margin-right: .3rem;
        }
        p{
          font-size: .24rem;
          font-weight: 600;
          color: #3c3c3c;
          margin-bottom: 0.1rem;
          span{
            color: #6c6c6c;
          }
        }
        .lucky-name{
          font-size: 0.28rem;
          font-weight: bold;
          color: #3c3c3c;
          .text-blue{
            color: #3c6df8;
          }
        }

      }
    }
    .last-tips{
      margin-top: 1rem;
      position: relative;
      border-bottom: 1px solid #B9B9B9;
      h4{
        background: #F7F7F7;
        color: #B9B9B9;
        font-size: 0.24rem;
        font-weight: 400;
        width:2.1rem;
        text-align: center;
        position: absolute;
        left:50%;
        margin-left: -1.05rem;
        top:50%;
        margin-top: -0.12rem;
        &:before,&:after{
          content: '';
          display: block;
          width:0.1rem;
          height:0.1rem;
          border-radius: 100%;
          background: #b9b9b9;
          position: absolute;
        }
        &:before{
          left:0;
          top:50%;
          margin-top: -0.05rem;
        }
        &:after{
          top:50%;
          margin-top: -0.05rem;
          right:0;
          left:auto;
        }

      }
    }
  }
</style>
