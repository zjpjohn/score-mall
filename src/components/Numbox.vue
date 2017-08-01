<template>
  <div class="numbox">
    <button class="btn-minimum" type="button" @click="mini" :disabled="value==1">-</button>
    <input class="input-num" type="number" v-model="value"/>
    <button class="btn-add" type="button" @click="add" :disabled="value == 10">+</button>
  </div>
</template>
<script type="text/ecmascript-6">
    export default {
      name: 'numBox',
      data () {
        return {
          value: 1
        }
      },
      methods: {
        add () {
          this.value += 1
        },
        mini () {
          if (this.value > 1) {
            this.value -= 1
          } else {
            return false
          }
        }
      },
      props: {
        num: {
          type: Number,
          default: 1
        }
      },
      created () {
        this.value = this.num
      }
    }
</script>
<style rel="stylesheet/scss" lang="scss" scoped>
  .numbox{
    border-radius: 4px;
    overflow: hidden;
    border: 1px solid #666666;
    .input-num{
      width:1.08rem;
      height:0.52rem;
      border:none;
      text-align: center;
      margin:0;
      padding:0;
    }
    button{
      width:0.52rem;
      height:0.52rem;
      text-align: center;
      line-height: 0.52rem;
      color: #333;
      border:none;
      border-radius: 0;
      padding:0;
      font-size: 28px;
    }
    .btn-minimum{
      border-right: 1px solid #666666;
    }
    .btn-add{
      border-left: 1px solid #666666;
    }
    button:disabled{
      color:#B9B9B9;
    }
  }
</style>
