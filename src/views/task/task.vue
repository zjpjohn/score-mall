<template>
  <div class="app-wrapper">
    <div class="container task-index">
      <div class="banner">
        <img src="../../assets/images/img_renwu_banner@2x.png" alt="">
      </div>
      <ul class="task-lists">
        <li>
          <a href="./task-detail.html" class="task-block">
            <div class="icon-wrapper">
              <img src="../../assets/images/icon_investigation@2x.png" alt="">
            </div>
            <div class="task-detail">
              <div class="task-line">
                <p class="task-name">一生约健康问卷调查</p>
                <p class="text-blue">400积分</p>
              </div>
              <div class="task-line">
                <div class="progress">
                  <p>剩余4000次</p>
                  <span class="progressbar" style="width: 80%;"></span>
                </div>
                <div class="task-type">
                  <i class="task-icon psq"></i>
                  <span>调查问卷</span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a href="./task-detail.html" class="task-block">
            <div class="icon-wrapper">
              <img src="../../assets/images/btn_renwu@2x.png" alt="">
            </div>
            <div class="task-detail">
              <div class="task-line">
                <p class="task-name">一生约APP下载</p>
                <p class="text-blue">800积分</p>
              </div>
              <div class="task-line">
                <div class="progress">
                  <p>剩余8789次</p>
                  <span class="progressbar"></span>
                </div>
                <div class="task-type">
                  <i class="task-icon reg"></i>
                  <span>注册下载</span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="task-block">
            <div class="icon-wrapper">
              <img src="../../assets/images/icon_movie@2x.png" alt="">
            </div>
            <div class="task-detail">
              <div class="task-line">
                <p class="task-name">租房神器宣传视频</p>
                <p class="text-blue">200积分</p>
              </div>
              <div class="task-line">
                <div class="progress">
                  <p>剩余1200次</p>
                  <span class="progressbar"></span>
                </div>
                <div class="task-type">
                  <i class="task-icon vid"></i>
                  <span>视频播放</span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="task-block">
            <div class="icon-wrapper">
              <img src="../../assets/images/icon_share@2x.png" alt="">
            </div>
            <div class="task-detail">
              <div class="task-line">
                <p class="task-name">分享链接</p>
                <p class="text-blue">200积分</p>
              </div>
              <div class="task-line">
                <div class="progress">
                  <p>剩余2340次</p>
                  <span class="progressbar"></span>
                </div>
                <div class="task-type">
                  <i class="task-icon sha"></i>
                  <span>分享</span>
                </div>
              </div>
            </div>
          </a>
        </li>
        <li>
          <a class="task-block">
            <div class="icon-wrapper">
              <img src="../../assets/images/icon_others@2x.png" alt="">
            </div>
            <div class="task-detail">
              <div class="task-line">
                <p class="task-name">关注微信公众号</p>
                <p class="text-blue">340积分</p>
              </div>
              <div class="task-line">
                <div class="progress">
                  <p>剩余989次</p>
                  <span class="progressbar" style="width: 50%;"></span>
                </div>
                <div class="task-type">
                  <i class="task-icon els"></i>
                  <span>其他</span>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="sticky-footer">
      <a class="order-btn" href="./my-task.html">我的任务</a>
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
  //积分任务首页
  .task-index{
    .banner{
      width:100%;
      height:3rem;
      img{
        width:100%;
        height:100%;
      }
    }
    .task-lists{
      padding: 0.3rem 0.3rem 0 0.3rem;
      li{
        width:100%;
        margin-bottom: 0.3rem;
        box-shadow: 0 0 12px 0 rgba(0,0,0,0.10);
        border-radius: 0.12rem;
        overflow: hidden;
        .task-block{
          height:1.8rem;
          box-sizing: border-box;
          background: #FFFFFF;
          border-radius: 0.12rem;
          padding:0.3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .icon-wrapper{
            width:1.2rem;
            height:1.2rem;
            overflow: hidden;
            margin-right: 0.3rem;

            img{
              width:100%;
              height:100%;
            }
          }
          .task-detail{
            flex:1;
            height:100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding:0.15rem 0;
            .task-line{
              display:flex;
              justify-content: space-between;
              p{
                font-size: 0.3rem;
                color: #666666;
                &.task-name{
                  max-width: 3.66rem;
                  overflow: hidden;
                  text-overflow: -o-ellipsis-lastline;
                  text-overflow: ellipsis;
                  display: -webkit-box;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                }
              }

              .task-type{
                font-size: 0.24rem;
                color: #B9B9B9;
                .task-icon{
                  display: inline-block;
                  width:0.26rem;
                  height:0.26rem;
                  background: url("../../assets/images/task-icon.png") no-repeat;
                  background-size:13px 77px;
                  &.psq{
                    background-position: 0 -51px;

                  }
                  &.reg{
                    background-position: 0 -64px;
                  }
                  &.vid{
                    background-position: 0 -37px;
                  }
                  &.sha{

                    background-position: 0 -25px;
                  }
                  &.els{

                    background-position:0 -12px;
                  }
                }
              }
            }
          }
        }
        .task-remind{
          font-size:0.28rem;
          padding:0.3rem;
          text-align: center;
          color: #B9B9B9;
          position: relative;
          background: #fff;
          &:before{
            content: "";
            display: block;
            position: absolute;
            top:0;
            left:0.3rem;
            right:0.3rem;
            height:0.02rem;
            background: #E7E7E7;
          }
        }
      }
    }
  }
</style>
