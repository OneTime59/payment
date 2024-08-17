<script setup>
import { reactive, ref } from 'vue'

const state = reactive([
  {
    title: '月度套餐',
    currentPrice: '19.00', // 现价
    originalPrice: '30.00', // 原价
    timeLimit: '1个月',
    key: '1'
  },
  {
    title: '季度套餐',
    currentPrice: '198.00', // 现价
    originalPrice: '365.00', // 原价
    timeLimit: '1年',
    key: '2'
  },
  {
    title: '终身套餐',
    currentPrice: '398.00', // 现价
    originalPrice: '708.00', // 原价
    timeLimit: '终身',
    key: '3'
  }
])
const activities = [
  {
    content: '第一步：扫码支付',
    key: 0,
  },
  {
    content: '第二步：购买成功',
    key: 1
  },
]
const active = ref(0);
const dialogVisible = ref(false)
const purchasePrice = reactive({
  ageing: '12个月',
  price: '168.00',
})

function particulars(key) {
  this.dialogVisible = true;
}
</script>

<template>
  <div class="boss">
    <strong class="boss_title">购买软件（Windows）</strong>
    <p>√承诺7天无效退款 √闪电发货 √免费技术支持 √免费升级 √支持开票</p>
    <a>选购Mac版本</a>
    <div class="flex-container">
      <!-- <div class="flex-item visiHidd"></div> -->
      <div class="flex-item" v-for="item in state">
        <strong class="title">{{ item.title }}</strong><br>
        <strong class="title_price">{{ item.currentPrice }}</strong>&nbsp;
        <del>{{ item.originalPrice }}</del>
        <div class="limit">√{{ item.timeLimit }} 有效</div>
        <div class="limit">√1台电脑</div>
        <!-- <el-icon><ShoppingCart /></el-icon> -->
        <el-button type="primary" size="large" :style="{ 'width': '200px' }" round
          @click="particulars(item.key)"><el-icon>
            <ShoppingCart />
          </el-icon>&nbsp;<p>立即购买</p></el-button>
        <p>支持付款的方式</p>
        <div>
          <img src="/public/zhifuleixing.svg">
        </div>
      </div>
    </div>
  </div>
  <el-dialog v-model="dialogVisible" title="支付" width="800">
    <el-steps style="width: 50%" :active="active" finish-status="success" align-center>
      <el-step v-for="(activity, index) in activities" :key="index" :title="activity.content" :status="activity.key"/>
    </el-steps>
    <div class="particulars">
      <div>XX软件（window）</div>
      <div>{{purchasePrice.ageing}}有效1台电脑</div>
      <div>应付金额：￥<strong :style="{color: '#FF9000', 'font-size': 18+'px'}">{{ purchasePrice.price }}</strong></div>
      <p>距离二维码过期还有299秒</p>
      <div class="QR_code">二维码</div>
      <img src="/public/zhifuleixing.svg">
      <p>在过程中遇到问题，请联系在线客服>></p>
    </div>
  </el-dialog>
</template>

<style scoped>
.boss {
  text-align: center;
  width: 100%;
  height: 100%;
  background-color: #F9F9F9;

  .boss_title {
    font-size: 20px;
  }
}

.flex-container {
  /* display: flex; */
  /* 设置为Flexbox布局 */
  width: 100%;
  /* height: 100%; */
  /* margin-left: 18%; */
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center;     /* 垂直居中 */
  /* height: 100vh;  */
}

.flex-item {
  margin: 5px;
  /* 为了更好的视觉效果，添加一些外边距 */
  padding: 10px;
  /* 添加一些内边距 */
  background-color: #FFF;
  /* 添加一些背景色 */
  /* border: 1px solid #ddd; 添加一些边框 */
  width: 300px;
  box-shadow: 5px 5px 5px #ddd;
  border-radius: 20px;

  .title {
    font-size: 18px;
  }

  .title_price {
    font-size: 40px;
    margin: 10px;
    color: #F59A23;

  }

  .limit {
    margin: 10px;
  }
}

.visiHidd {
  visibility: hidden;
}

.particulars{
  text-align: center;
  background: #F7F8FC;
  padding: 10px;
  display: grid;
  place-items: center;
  div {
    margin: 10px;
  }
  img{
    height: 50px;
  }
  .QR_code{
    width: 200px;
    height: 200px;
    background: pink;
  }
}
/* .horizontal-timeline {
  display: flex;
  flex-direction: row;
}
 
.horizontal-timeline /deep/ .el-timeline-item {
  flex: 1;
  display: flex;
  align-items: flex-start;
  margin-left: 10px;
}
 
.horizontal-timeline /deep/ .el-timeline-item:first-child {
  margin-left: 0;
}
 
.horizontal-timeline /deep/ .el-timeline-item__content {
  flex-direction: row;
  align-items: center;
}
 
.horizontal-timeline /deep/ .el-timeline-item__timestamp {
  order: 1;
  flex: 0 0 auto;
  margin: 0 0 0 10px;
}
 
.horizontal-timeline /deep/ .el-timeline-item__node {
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: #409eff;
}
 
.horizontal-timeline /deep/ .el-timeline-item__node--large {
  width: 6px;
  height: 6px;
}
 
.horizontal-timeline /deep/ .el-timeline-item__node--normal {
  width: 10px;
  height: 10px;
}
 
.horizontal-timeline /deep/ .el-timeline-item__node--small {
  width: 14px;
  height: 14px;
}
 
.horizontal-timeline /deep/ .el-timeline-item__node--mini {
  width: 18px;
  height: 18px;
} */
.timeline-content {
  margin-top: 10px; /* 文字与时间线之间的距离 */
}
</style>
