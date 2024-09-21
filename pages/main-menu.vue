<template>
    <div>
      <nav class="w-full h-18 navbar flex">
        <div class="basis-1/4">
          <p class="text-2xl font-bold mt-1">Got Balance - ERP</p>
        </div>
        <div class="basis-3/4 flex flex-row mt-3">
          <!-- เริ่มต้นเมนู "ระบบซื้อ" พร้อม Dropdown -->
          <div class="relative pr-6 group">
            <p class="hover cursor-pointer">ระบบซื้อ</p>
            <!-- เมนูย่อย -->
            <div class="absolute hidden bg-white shadow-md mt-1 group-hover:block w-[150px]">
              <ul>
                <li class="px-4 py-2 hover:bg-gray-100">
                  <NuxtLink to="/purchase/item1">ขอซื้อสินค้า(PR)</NuxtLink>
                </li>
                <li class="px-4 py-2 hover:bg-gray-100">
                  <NuxtLink to="/purchase/item2">สั่งซื้อสินค้า(PO)</NuxtLink>
                </li>
                <li class="px-4 py-2 hover:bg-gray-100">
                  <NuxtLink to="/purchase/item3">ซื้อสินค้า (BI)</NuxtLink>
                </li>
                <li class="px-4 py-2 hover:bg-gray-100">
                  <NuxtLink to="/purchase/item4">ลดหนี้ (DR)</NuxtLink>
                </li>
                <li class="px-4 py-2 hover:bg-gray-100">
                  <NuxtLink to="/purchase/item5">เพิ่มหนี้(Cost Sheet)</NuxtLink>
                </li>
                <li class="px-4 py-2 hover:bg-gray-100">
                  <NuxtLink to="/purchase/item6">รายงาน</NuxtLink>
                </li>
              </ul>
            </div>
          </div>
          <!-- จบเมนู "ระบบซื้อ" -->
          <p class="pr-6 hover">ระบบขาย</p>
          <p class="pr-6 hover">เจ้าหนี้</p>
          <p class="pr-6 hover">ลูกหนี้</p>
          <p class="pr-6 hover">สินค้า</p>
          <p class="pr-6 hover">บัญชีแยกประเภท</p>
          <p class="pr-6 hover">ข้อมูลพื้นฐาน</p>
          <p class="pr-6 hover">ผู้ใช้ระบบ</p>
        </div>
        <div class="basis-1/4">
          <div class="flex flex-row justify-center items-center mt-1">
            <!-- ข้อมูลผู้ใช้ -->
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
  .hover:hover {
    color: blue;
  }
  </style>
  