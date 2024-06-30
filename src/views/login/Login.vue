<template>
    <div class="login_box">
        <div class="login_inlet">
            <div class="login_title"><strong>登录</strong></div>
            <div class="login_flex">
                <el-form
                    :model="form" 
                    :rules="rules" 
                    label-width="auto" 
                    style="width: 100%"
                    ref="ruleFormRef"
                >
                    <el-form-item label="账号" prop="login_name">
                        <el-input v-model="form.login_name" />
                    </el-form-item>
                    <el-form-item label="安全问题" prop="login_password">
                        <el-input v-model="form.login_password" />
                    </el-form-item>
                    <el-form-item>
                        <el-radio-group v-model="form.login_isRemember">
                            <el-radio :value="1">记住密码</el-radio>
                        </el-radio-group>
                        <div>
                            <el-button link type="primary" @click="forgotPassword">忘记密码？</el-button>
                        </div>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" width="100%" @click="submitForm(ruleFormRef)">登录</el-button>
                        <el-button link type="primary" @click="registerUser">注册</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';
import { getUsers } from '../../utils/api'

const ruleFormRef = ref()
const router = useRouter();
// 登录的数据
const form = reactive({
    login_name: '',
    login_password: '',
    login_isRemember: false,
})
const rules = reactive({
    login_name: [
    { 
        required: true, 
        message: '请输入正确的用户名', 
        trigger: 'blur' 
    }
  ],
  login_password: [
    {
      required: true,
      message: '请输入正确的密码',
      trigger: 'blur',
    },
  ],
})
// 提交
const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
      getUsers().then(users => {
            console.log(users);
        })
        .catch(error => {
            console.error(error);
        });
    } else {
      console.log('error submit!', fields)
    }
  })
}
// 进入注册
const registerUser = () => {
    router.push('/register');
}
// 忘记密码
const forgotPassword = () => {
    router.push('/findUser');
}
</script>

<style scoped lang='scss'>
.login_box {
    display: flex;
    justify-content: center;
    /* 水平居中 */
    align-items: center;
    /* 垂直居中 */
    height: 100vh;
    background-color: #D9D9D9;
    // opacity: 0.5;
    .login_inlet {
        width: 40vw;
        height: 60vh;
        border-radius: 5%;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
        background-color: #FFF;
        
        .login_title {
            margin-top: 20px;
            text-align: center;
            font-size: 20px;
            letter-spacing: 10px;

        }
        .login_flex{
            padding: 40px 150px;
        }
    }
}
</style>