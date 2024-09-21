// middleware/auth.global.js

export default defineNuxtRouteMiddleware((to, from) => {
  const isAuthenticated = useCookie('isAuthenticated', { default: () => false })

  if (isAuthenticated.value && to.path === '/login') {
    // ถ้าผู้ใช้เข้าสู่ระบบแล้วและพยายามเข้าถึง /login ให้นำทางไปยังหน้าแรก
    return navigateTo('/')
  }

  if (!isAuthenticated.value && to.path !== '/login') {
    // ถ้าผู้ใช้ยังไม่ได้เข้าสู่ระบบและพยายามเข้าถึงหน้าที่ไม่ใช่ /login ให้นำทางไปยัง /login
    return navigateTo('/login')
  }
})
