<script setup>
import { storeToRefs } from 'pinia';
import { ref, watch, watchEffect } from 'vue';
import { useUserStore } from '@/stores/counter'; 
import Payment from './Payment.vue'
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';

const userStore = useUserStore(); 
const { userPaymentUrl, userIsProgress } = userStore; // 保持响应式
console.log(userPaymentUrl.value, '查看路径')
console.log(userIsProgress.value, '查看状态')
watch(userStore, (newValue, oldValue) => {  
      console.log(`count changed from ${oldValue} to ${newValue}`, newValue.userPaymentUrl);  
      console.log(`count changed from userIsProgress`, newValue.userIsProgress);  
    });
</script>

<template>
  <div class="global_css" >
    <el-container>
      <el-header class="header">
          <Header />
      </el-header>
      <el-main class="main">
        <Payment />
      </el-main>
      <el-footer class="footer"><Footer /></el-footer>
    </el-container>
  </div>
  
  
</template>

<style scoped>
.payment {
  width: 100%;
  height: 100vh;
}
</style>