<template>
    <div class="login_box">
        <div class="login_inlet">
            <div class="login_title"><strong>找回密码</strong></div>
            <div class="login_flex">
                <el-form
                    :model="form" 
                    :rules="rules" 
                    label-width="auto" 
                    style="width: 100%"
                    ref="ruleFormRef"
                >
                    <el-form-item label="账号" prop="login_account">
                        <el-input v-model="form.account" />
                    </el-form-item>
                    <el-form-item label="安全问题">
                        <el-input v-model="form.secure_problem" />
                    </el-form-item>
                    <el-form-item label="安全答案" prop="secure_answer">
                        <el-input v-model="form.secure_answer" />
                    </el-form-item>
                    <el-form-item label="重置密码" prop="reset_password">
                        <el-input v-model="form.reset_password" />
                    </el-form-item>
                    <el-form-item label="确认密码" prop="confirm_password">
                        <el-input v-model="form.confirm_password" />
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" width="100%" @click="submitForm(ruleFormRef)">确认</el-button>
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

const ruleFormRef = ref()
const isLogin = ref(true)
const router = useRouter();
// 登录的数据
const form = reactive({
    login_account: '',
    secure_answer: '',
    reset_password: '',
    confirm_password: '',
})
const rules = reactive({
    login_account: [
    { 
        required: true, 
        message: '请输入正确的用户名', 
        trigger: 'blur' 
    }
  ],
  secure_answer: [
    {
      required: true,
      message: '请输入正确的密码',
      trigger: 'blur',
    },
  ],
  reset_password: [
    {
      required: true,
      message: '请输入正确的密码',
      trigger: 'blur',
    },
  ],
  confirm_password: [
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