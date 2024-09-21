import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export default defineNuxtPlugin((nuxtApp) => {
  const pinia = createPinia()
  pinia.use(piniaPluginPersistedstate) // ใช้ปลั๊กอิน

  nuxtApp.vueApp.use(pinia)
  nuxtApp.pinia = pinia
})