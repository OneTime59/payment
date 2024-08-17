<template>
    <div class="header_title">
        <el-row>
            <el-col :span="9">
                <div class="header_title_img">
                    <img src="/bbkong.svg" class="header_img"/>
                    <!-- <div>BIBICO</div> -->
                </div>
            </el-col>
            <el-col :span="12">
                <div class="header_title_r">科技改变生活. 便利比比皆是</div>
            </el-col>
            <el-col :span="3" class="center-text">
                <el-button @click="logoutBun" round>退出</el-button>
            </el-col>
        </el-row>
    </div>
</template>

<script setup>
import { logout } from '@/utils/api';
import { useRouter } from 'vue-router';

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
.header_title {
    height: 40px;
    .header_title_img {
        display: flex; /* 设置为Flexbox布局 */
        width: 100%;
        height: 100%;
        margin: 20px;
    }
}

.header_img {
    height: 20px;
    margin-right: 10px;
}

.header_text {
    text-align: center;
    line-height: 80px;
}

.header_title_r {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
}
.center-text {
    text-align: center;
}
</style>