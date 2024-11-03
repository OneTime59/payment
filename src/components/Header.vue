<template>
    <el-container>
      <el-header class="layout-header">
        <div class="header_center">
            <div><img src="/bbkong.svg" class="header_img"/></div>
            <div>科技改变生活. 便利比比皆是</div>
            <div class="remaining_time" v-show="userTime !== '0'">会员剩余时间{{ userTime }}天</div>
            <div>
                <el-button @click="logoutBun" round>退出</el-button>
            </div>
        </div>
    </el-header>
    </el-container>
</template>

<script setup>
import { logout } from '@/utils/api';
import { useRouter } from 'vue-router';
import { storeToRefs } from 'pinia';
import { useUserStore } from '@/stores/counter'; 
const userStore = useUserStore(); 
const { userTime } = storeToRefs(userStore); // 保持响应式
  
const router = useRouter();
const logoutBun = () => {
    logout({
        access_token: localStorage.getItem('access_token')
    }).then(res => {
        router.push('/login');
        localStorage.clear();
    })
}
</script>

<style scoped lang='scss'>
.layout-header{
    display: table;
    .header_center{
        display: flex;
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中 */
        padding: 0 10px;
        gap: 18vw;
        .header_img {
            height: 20px;
        }
        .header_center_btn{
            margin-left: 30px;
        }
        .remaining_time {
            border: 2px solid rgb(122, 182, 247);
            border-radius: 10px;
            background: rgb(122, 182, 247);
        }
    }
}
</style>