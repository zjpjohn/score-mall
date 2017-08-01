<template>
  <div class="app-wrapper">
    <div class="container task-detail">
      <div class="shadow"></div>
      <div class="main-box">
        <div class="task-block">
          <div class="task-icon">
            <img src="../../assets/images/icon_others@2x.png" alt="">
          </div>
          <div class="task-intro">
            <div class="task-line">
              <p class="task-name">一生约APP下载</p>
              <p class="task-value">800积分</p>
            </div>
            <div class="task-line">
              <div class="progress">
                <p>剩余8789次</p>
                <span class="progressbar" style="width: 70%;"></span>
              </div>
            </div>
          </div>
        </div>
        <div class="introduce-block">
          <h4 >任务介绍</h4>
          <div class="intro-des">
            <p>通过任务链接跳转相对应的应用市场，下载一生约APP，并注册登录使用。</p>
            <p>PS：所有报名活动并下载使用的同学都能获得一生约800积分。快快下载吧。</p>
          </div>
        </div>
        <div class="introduce-block">
          <h4>审核时间</h4>
          <div class="time-intro">
            <p>提交审核后120小时内</p>
          </div>
        </div>
        <div class="task-link">
          <a class="btn-link" href="##"><i class="task-icon"></i>任务链接</a>
        </div>
        <div class="task-steps">
          <h4>任务引导</h4>
          <ul class="step-block">
            <li>
              <div class="step-intro">
                点击【任务链接】，在浏览器中打开一生约APP下载页面进行下载
              </div>
              <div class="step-imgs">
                <img src="static/img/mylog.png" alt="">
                <img src="static/img/mylog.png" alt="">
              </div>
            </li>
            <li>
              <div class="step-intro">
                对一生约APP进行评价并截图，最后添加一生约微信公众号。
              </div>
              <div class="step-imgs">
                <img src="static/img/mylog.png" alt="">
                <img src="static/img/mylog.png" alt="">
              </div>
            </li>
          </ul>
        </div>
      </div>




    </div>
    <div class="sticky-footer">
      <button class="order-btn"><a href="javascript:void(0)">领取任务</a></button>
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
  .task-detail{
    .shadow{
      height:1px;
      box-shadow: 0 2px 8px 0 rgba(0,0,0,0.10);
    }
    .main-box{
      padding:0.3rem;
      background: #fff;
      .task-block{
        border-bottom: 1px solid #E7E7E7;
        padding-bottom: 0.3rem;
        display: flex;
        .task-icon{
          width:1.2rem;
          height:1.2rem;
          border-radius: 100%;
          overflow: hidden;
          margin-right: 0.3rem;
          img{
            width:100%;
            height:100%;
          }
        }
        .task-intro{
          flex:1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .task-line{
            display: flex;
            justify-content: space-between;
            margin-bottom: 0.36rem;
            &:last-child{
              margin-bottom: 0;
            }
            .progress{
              margin-bottom: 0.1rem;
            }
          }
          .task-name{
            font-size:0.3rem;
            color: #666666;
          }
          .task-value{
            font-size:0.3rem;
            font-weight: bold;
            color: #333333;
          }
        }
      }
      .introduce-block{
        font-family: "微软雅黑";
        border-bottom: 1px solid #E7E7E7;
        padding-bottom: 0.3rem;
        font-size: 0.3rem;
        color: #666666;
        h4{
          font-size:0.3rem;
          color: #333333;
          margin-top: 0.3rem;
          margin-bottom: 0.2rem;
        }
        .intro-des{
          line-height: 1.4em;
        }
      }
      .task-link{
        padding:0.3rem 0;
        border-bottom: 1px solid #E7E7E7;
        .btn-link{
          width:100%;
          height:1rem;
          line-height: 1rem;
          display: block;
          background: rgba(60,109,248,0.05);
          border-radius: 0.08rem;
          font-size: 0.3rem;
          color: #3C6DF8;
          text-align: center;
          i{
            display: inline-block;
            width:0.3rem;
            height:0.3rem;
            margin-right: 0.15rem;
            background: url("../img/task/icon_link@2x.png") no-repeat center center;
            background-size: 100% 100%;
          }

        }
      }
      .task-steps{
        h4{
          font-size:0.3rem;
          padding:0.24rem 0;
          color: #333333;
        }
        .step-block{
          padding-left: 0.5rem;
          position: relative;
          &:before{
            content: '';
            display: block;
            width:0.02rem;
            background: #D4D4D4;
            height:100%;
            position: absolute;
            top:0;
            left:0.15rem;
          }
          &:after{
            content: '';
            display: block;
            width:0.3rem;
            height:0.3rem;
            background: url("../img/task/1@2x.png") no-repeat  center center;
            background-size: 100% 100%;
            position: absolute;
            bottom:0;
            left:0;
          }
          li{
            margin-bottom: 0.4rem;
            .step-intro{
              font-size: 0.3rem;
              color: #666666;
              margin-bottom: 0.3rem;
              position: relative;
              &:before{
                content: '';
                display: block;
                width:0.3rem;
                height:0.3rem;
                background: url("../img/task/1@2x.png") no-repeat  center center;
                background-size: 100% 100%;
                position: absolute;
                top:0;
                left:-0.48rem;
              }
            }
            .step-imgs{

              img{
                display: inline-block;
                width:1.2rem;
                height:1.2rem;
                margin-right: 0.2rem;
              }

            }
          }
        }
      }
    }
  }
</style>
