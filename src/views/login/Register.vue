<template>
    <div class="login_box">
        <div class="login_inlet">
            <div class="login_title"><strong>注册</strong></div>
            <div class="login_flex">
                <el-form
                    :model="form_register" 
                    :rules="rules_register" 
                    label-width="auto" 
                    style="width: 100%"
                    ref="ruleFormRef_register"
                >
                    <el-form-item label="账户" prop="register_name">
                        <el-input v-model="form_register.register_name" />
                    </el-form-item>
                    <el-form-item label="密码" prop="register_password">
                        <el-input v-model="form_register.register_password" />
                    </el-form-item>
                    <el-form-item label="确认密码" prop="register_password_confirm">
                        <el-input v-model="form_register.register_password_confirm" />
                    </el-form-item>
                    <el-form-item label="安全问题" prop="register_security">
                        <el-input v-model="form_register.register_security" />
                    </el-form-item>
                    <el-form-item label="安全答案" prop="register_answer">
                        <el-input v-model="form_register.register_answer" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" width="100%" @click="submitFormRegister(ruleFormRef_register)">注册</el-button>
                        <el-button link type="primary" @click="goBack">返回</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
import { useRouter } from 'vue-router';

const ruleFormRef_register = ref()
const router = useRouter();
// 注册的数据
const form_register = reactive({
    register_name: '',
    register_password: '',
    register_password_confirm: '',
    register_security: '',
    register_answer: ''
})
const rules_register = reactive({
    register_name: [
        { 
            required: true, 
            message: '请输入正确的用户名', 
            trigger: 'blur' 
        },
    ],
    register_password: [
        {
        required: true,
        message: '请输入正确的密码',
        trigger: 'blur',
        },
    ],
    register_password_confirm: [
        {
        required: true,
        message: '请输入正确的密码',
        trigger: 'blur',
        },
    ],
    register_security: [
        {
        required: true,
        message: '请输入密保问题',
        trigger: 'blur',
        },
    ],
    register_answer: [
        {
        required: true,
        message: '请输入正确的密保答案',
        trigger: 'blur',
        },
    ],
})
// 注册账号提交
const submitFormRegister = async (formEl) => {
  if (!formEl) return
  await formEl.validate((valid, fields) => {
    if (valid) {
      console.log('submit!');
      ElMessage.success('注册成功！')
      router.push('/login');
    } else {
      console.log('error submit!', fields)
    }
  })
}

const goBack = () => {
    router.push('/login');
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