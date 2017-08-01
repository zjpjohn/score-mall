<template>
  <div class="app-wrapper">
    <div class="container submit-check">
      <p class="count-down ">剩余提交时间 03:59:59</p>
      <div class="check-phone">
        <h4><img src="../../img/task/icon_edit@2x.png" oninput="this.value=this.value.replace(/\D/,'')">手机号码</h4>
        <div class="input-wrapper">
          <input type="text" placeholder="输入手机号">
        </div>
      </div>
      <div class="check-img">
        <h4><img src="../../img/task/icon_upload@2x.png" alt="">下载完成后，首页截图</h4>
        <div class="upload-img">
          <span class="upload-show"><img src="" alt=""></span>
          <input id="uploadFile" type="file">
        </div>
      </div>
      <div class="example">
        <h4><img src="../../img/task/icon_Example@2x.png" alt="">上传示例</h4>
        <div class="img-wrapper">
          <img src="../../img/igList.png" alt="">
        </div>
      </div>
    </div>

    <div class="sticky-footer">
      <a href="./task-progress-end.html"  class="order-btn">提交审核</a>
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
<style rel="stylesheet/scss" lang="scss" scoped >
  @import "../../assets/scss/index";
  //提交审核
  .submit-check{
    background: #fff;
    padding:0 0.3rem;
    .count-down{
      font-size: 0.3rem;
      text-align: center;
      padding:0.6rem;
      color: #3C6DF8;
    }
    h4{
      font-size:0.3rem;
      color: #333333;
      margin-bottom: 0.4rem;
      line-height: 1.2em;
      margin-left: -0.52rem;
      img{
        width:0.4rem;
        height:0.4rem;
        margin-right: 0.12rem;
        vertical-align: bottom;
      }
    }
    .check-phone{
      margin:0 0.52rem;
      margin-bottom: 0.3rem;
      margin-bottom: 0.3rem;
      .input-wrapper{
        border-bottom: 1px solid #E7E7E7;
      }
      input{
        width:100%;
        border:none;
        font-size: 0.3rem;
        margin-bottom: 0;
        &::placeholder{
          color: #B9B9B9;
        }
      }
    }
    .check-img{
      border-bottom: 1px solid #E7E7E7;
      margin:0 0.52rem;
      margin-bottom: 0.3rem;
      .upload-img{
        margin-bottom: 0.3rem;
        width:1.6rem;
        height:1.6rem;
        border-radius: 0.08rem;
        background: url("../img/task/btn_camera@2x.png") no-repeat center center;
        background-size: 0.8rem 0.8rem;
        position: relative;
        overflow: hidden;
        .upload-show{
          display: block;
          height:100%;
          position: absolute;
          left:0;
          right:0;
          top:0;
          bottom:0;
          z-index: 1;
          overflow: hidden;
          padding:0.02rem;
          img{
            width:100%;
            height:100%;
            border:0;
          }
        }
        input{
          display: block;
          width:100%;
          height:100%;
          position: absolute;
          left:0;
          top:0;

          opacity:0;
          z-index: 9;
        }
      }
    }
    .example{
      margin:0 0.52rem;
      margin-bottom: 0.3rem;
      .img-wrapper{
        width:1.6rem;
        height:1.6rem;
        overflow: hidden;
        img{
          width:100%;
          height:auto;
        }
      }
    }
  }
</style>
