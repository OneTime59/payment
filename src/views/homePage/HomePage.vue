<template>
    <div class="common-layout">
    <el-container>
      <el-header class="layout-header">
        <div class="header_center">
            <div><img src="/bbkong.svg" class="header_img"/></div>
            <div>
                <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
                    <el-tab-pane label="首页" name="homePage"></el-tab-pane>
                    <el-tab-pane label="产品" name="product"></el-tab-pane>
                </el-tabs></div>
            <div>
                <el-button type="primary" round @click="goToLogin">登录</el-button>
                <el-button round @click="goToRegister">注册</el-button>
            </div>
        </div>
    </el-header>
        <el-main>
            <div v-if="activeName === 'homePage'">
                <div class="homeImg">
                    <div class="homgTxt">
                        <strong class="title">比比控</strong>
                        <p>在这个瞬息万变的时代，科技不仅仅是工具更是我们生活的一部分，我们的人工智能技术，不只是冰冷的代码，而是充满温度的陪伴。</p>
                        <p>我们相信，科技的价值在于让生活更美好。我们希望能通用最新的智能科技，让你的每一天都充满美好喝感动。</p>
                        <p>让我们一起，走进AI的新未来。</p>
                        <!-- <el-button type="primary">JSON</el-button> -->
                    </div>
                    <div><img src="/public/homeAi.svg" alt="" class="homgAi"></div>
                </div>
                <div class="middle">
                    <img src="/public/homg/图片 3.svg">
                </div>
                <div class="bottomLine">
                    <p>售后保障</p>
                </div>
                <div class="bottomImg">
                    <div>
                        <img src="/public/homg/Frame.svg" alt="承诺7天无效退款" width="80px" height="80px">
                        <p>承诺7天无效退款</p>
                        <p>购买完成后，可根据相应退款条件申请退款</p>
                    </div>
                    <div>
                        <img src="/public/homg/Group 123.svg" alt="100%安全" width="80px" height="80px">
                        <p>100%安全</p>
                        <p>安全支付，保障资金安全</p>
                    </div>
                    <div>
                        <img src="/public/homg/Group 136.svg" alt="客户信赖" width="80px" height="80px">
                        <p>客户信赖</p>
                        <p>服务过1000万+满意与忠诚的客户</p>
                    </div>
                    <div>
                        <img src="/public/homg/Group 137.svg" alt="取消续费" width="80px" height="80px">
                        <p>取消续费</p>
                        <p>如果您不再需要续费，则可以随时取消续费</p>
                    </div>
                </div>
                <div class="bottomTxt">
                    <p>© 2024 深圳比比控科技有限公司 版权所有  粤公网安备 44030602006215号    粤ICP备2024188267号</p>
                </div>
            </div>
            <div v-else>
                <div class="homeImg">
                    <div class="homgTxt">
                    <strong class="title">比比控</strong>
                    <p>每一张照片，都是一段珍贵的记忆，每一个像素，都承载着难忘的瞬间。然而，时间的流逝和技术的限制，可能让这些记忆变得模糊不清。</p>
                    <p>我们的比比图产品，专为复苏这些珍贵回忆而生。无论是你童年时的老照片，还是与挚爱共度的美好时光，我们的技术都能让它们焕然一新，清晰如初。</p>
                    <p>我们不仅是在提升图片质量，更是在保护和传承你心中最珍贵的情感和故事。让每一张照片都充满生命力，让每一个瞬间都值得铭记。</p>
                    <p>让我们的比比图产品，为你的记忆注入新的生命力。让过去的温暖，继续温暖未来。</p>
                    <!-- <el-button type="primary">JSON</el-button> -->
                    </div>
                    <div><img src="/public/homg/product.svg" alt="" class="homgAi"></div>
                </div>
            </div>
        </el-main>
    </el-container>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const activeName = ref('homePage');
const router = useRouter();

const goToLogin = () => {
    router.push('/login');
}
// 进入注册
const goToRegister = () => {
    router.push('/register');
}
</script>

<style scoped lang='scss'>
.common-layout {
    .layout-header{
        display: table;
        .header_center{
            // display: table-cell;
            // vertical-align: middle;
            display: flex;
            justify-content: center; /* 水平居中 */
            align-items: center; /* 垂直居中 */
            padding: 0 10px;
            gap: 30vw;
            .header_img {
                height: 20px;
            }
            .header_center_btn{
                margin-left: 30px;
            }
        }
    }
    .el-header {
      padding: 0px !important; /* 使用 !important 可以确保覆盖其他样式 */
    }
    .homeImg {
        background-image: url('/public/homeImg.svg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        display: flex;
        justify-content: center; /* 水平居中 */
        align-items: center; /* 垂直居中 */
        gap: 10vw;
        height: calc(100vh - 80px);
        // width: calc(100vw - 70px);
        .homgTxt{
            width: 30vw;
            .title {
                font-size: 40px;
            }
            p {
                font-size: 18px;
            }
        }
        .homgAi{
            width: 20vw;
        }
    }
    .middle {
        img{
            // width: calc(100vw - 70px);
            width: 100%;
        }
    }
    .bottomLine{
        margin: 20px 0;
        p{
            text-align: center;
            width: 100%; /* 或者你可以设置一个具体的宽度 */
            font-size: 25px;
            font-weight: bold;
        }
    }
    .bottomImg{
        display: flex;
        justify-content: center; /* 水平居中 */
        // align-items: center; /* 垂直居中 */
        gap: 5vw;
        margin: 20px 0;
        div{
            width: 200px;
            text-align: center;
            p:first-of-type {
                font-size: 20px;
                font-weight: bold;
            }
            p:nth-of-type(2){
                color: #8C8C8C;
            }
        }
    }
    .bottomTxt{
        display: flex;
        justify-content: center; /* 水平居中 */
        p{
            font-size: 20px;
        }
    }
}
p, img {
    user-select: none; /* 阻止用户选择文本 */
    -webkit-user-select: none; /* 为Chrome, Safari等浏览器添加前缀 */
    -moz-user-select: none; /* 为Firefox添加前缀 */
    -ms-user-select: none; /* 为IE/Edge添加前缀 */
    cursor: default; /* 当鼠标悬停在链接上时，‌设置光标为默认样式 */
}

</style>