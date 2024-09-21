<template>
    <div class="flex justify-center mt-36">
        <div class="login-container shadow-inner ">
      <h1>เข้าสู่ระบบ</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <label for="email">ชื่อผู้ใช้งาน:</label>
          <input type="email" id="email" v-model="email" required />
        </div>
        <div>
          <label for="password">รหัสผ่าน:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">เข้าสู่ระบบ</button>
        <div v-if="loginError" class="error-message">
          อีเมลหรือรหัสผ่านไม่ถูกต้อง
        </div>
      </form>
    </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  // ค่าเริ่มต้นของช่องกรอก
  const email = ref('user@example.com')
  const password = ref('password123')
  
  // ค่าอีเมลและรหัสผ่านที่ถูกต้อง
  const defaultEmail = 'user@example.com'
  const defaultPassword = 'password123'
  
  // สถานะข้อผิดพลาด
  const loginError = ref(false)
  
  // สถานะการเข้าสู่ระบบ (ใช้ useCookie ของ Nuxt)
  const isAuthenticated = useCookie('isAuthenticated', { default: () => false })
  
  const handleSubmit = () => {
    if (email.value === defaultEmail && password.value === defaultPassword) {
      isAuthenticated.value = true
      loginError.value = false
      router.push('/')
    } else {
      loginError.value = true
    }
  }
  </script>
  
  <style scoped>
  .login-container {
    width: 400px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #1AFF8C;
  }
  label {
    display: block;
    margin-bottom: 5px;
  }
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  button {
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  button:hover {
    background-color: #0056b3;
  }
  .error-message {
    margin-top: 20px;
    color: red;
  }
  </style>
  