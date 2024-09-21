<!-- pages/index.vue -->
<template>
  <div>
    <nav class="w-full h-18 navbar flex">
      <div class="basis-1/2">
        <p class="text-2xl font-bold">Got Balance - ERP</p>
      </div>
      <div class="basis-1/2"></div>
      <div class="basis-1/4">
        <div class="flex flex-row justify-center items-center mt-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"
              class="primary-color"
              style="margin-top: 5px"
            />
          </svg>
          <p class="font-bold">user@example.com</p>
        </div>
      </div>

      <button
        @click="handleLogout"
        class="bg-sky-500 basis-40 h-10 rounded-md text-white"
      >
        ออกจากระบบ
      </button>
    </nav>
    <div class="flex justify-center mt-36">
      <div
        class="w-96 h-64 shadow-md rounded-md border flex flex-col pt-10"
      >
        <div>
          <p class="text-xl font-bold text-center">ชื่อบริษัท</p>
          <div class="mt-8 flex justify-center">
            <select
              id="country"
              name="country"
              autocomplete="country-name"
              class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
            >
              <option>---- เลือกชื่อบริษัท ----</option>
              <option>มะพร้าวน้ำหอม</option>
              <option>เจริญ</option>
              <option>รุ่งเรือง</option>
              <option>ร่ำรวย</option>
            </select>
          </div>
          <div class="flex justify-center">
            <NuxtLink to="/main-menu">
                <button class="button-complete p-4 w-40 h-auto rounded-md mt-10">ตกลง</button>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();
const isAuthenticated = useCookie("isAuthenticated", { default: () => false });

const handleLogout = () => {
  isAuthenticated.value = false;
  router.push("/login");
};
</script>

<style scoped>
.navbar {
  background-color: #1aff8c;
  padding: 1rem;
}
.primary-color {
  color: #0ea5e9;
}
.button-complete {
    background-color: #1AFF8C;
}
</style>
