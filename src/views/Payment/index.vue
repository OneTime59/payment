<script setup>
import Payment from './Payment.vue'
import Header from '../../components/Header.vue';
import Footer from '../../components/Footer.vue';
</script>

<template>
  <div class="global_css">
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