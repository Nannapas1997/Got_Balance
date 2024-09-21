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
  
      <p class="text-2xl p-10">ขอซื้อสินค้า (PR)</p>
      <div class="flex flex-row">
        <div class="w-64 ml-10 flex flex-col">
          <label for="purchaser">ผู้ขาย :</label>
          <input type="text" id="purchaser" v-model="searchPurchaser" required />
        </div>
        <div class="w-44 ml-10 flex flex-col">
          <label for="date-since">วันที่ขอซื้อ(ตั้งแต่) :</label>
          <input type="date" id="date-since" v-model="searchDateSince" required />
        </div>
        <div class="w-44 ml-10 flex flex-col">
          <label for="date-to">วันที่ขอซื้อ(ถึง) :</label>
          <input type="date" id="date-to" v-model="searchDateTo" required />
        </div>
        <div class="w-64 ml-10 flex flex-col">
          <label for="status">สถานะ :</label>
          <select id="status" class="select" v-model="searchStatus">
            <option selected>----เลือกสถานะ----</option>
            <option value="ร่าง (Draft)">ร่าง (Draft)</option>
            <option value="รออนุมัติ (Waiting for Approve)">
              รออนุมัติ (Waiting for Approve)
            </option>
            <option value="อนุมัติ (Approve)">อนุมัติ (Approve)</option>
            <option value="ยกเลิก (Reject)">ยกเลิก (Reject)</option>
          </select>
        </div>
        <div class="w-36 ml-10 flex flex-col">
          <button @click="applyFilters" class="search rounded-md">ค้นหา</button>
        </div>
      </div>
      
      <div class="container mx-auto p-4">
        <!-- ตารางข้อมูล -->
         <div class="flex justify-end">
            <NuxtLink to="/add-purchase">
                <button class="purchase-no flex flex-row justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"/></svg>
                    <p>เพิ่มใบขอซื้อ</p>
                </button>
            </NuxtLink>
            
         </div>
        <div class="overflow-x-auto">
          <table class="min-w-full text-sm align-middle">
            <thead class="bg-gray-100">
              <tr>
                <th class="px-4 py-2 text-left">วันที่</th>
                <th class="px-4 py-2 text-left">เลขที่ PR</th>
                <th class="px-4 py-2 text-left">ชื่อผู้ขาย</th>
                <th class="px-4 py-2 text-left">เอกสาร</th>
                <th class="px-4 py-2 text-left">สุทธิ</th>
                <th class="px-4 py-2 text-left">สถานะ</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="company in paginatedPR"
                :key="company.id"
                class="border-b hover:bg-gray-50"
              >
                <td
                  class="px-4 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {{ company.date }}
                </td>
                <td class="px-4 py-2">{{ company.PR_No }}</td>
                <td class="px-4 py-2">{{ company.name }}</td>
                <td class="px-4 py-2">{{ company.document }}</td>
                <td class="px-4 py-2">{{ company.amount }}</td>
                <td class="px-4 py-2">{{ company.status }}</td>
              </tr>
              <tr v-if="paginatedPR.length === 0">
                <td colspan="6" class="px-4 py-2 text-center">ไม่พบข้อมูล</td>
              </tr>
            </tbody>
          </table>
        </div>
  
        <!-- Pagination Controls -->
        <nav
          class="flex justify-between items-center mt-4"
          aria-label="Table navigation"
        >
          <span class="text-sm text-gray-700">
            แสดงหน้าที่ {{ currentPage }} จาก {{ totalPages }}
          </span>
          <ul class="inline-flex items-center -space-x-px">
            <!-- ปุ่ม Previous -->
            <li>
              <button
                :disabled="currentPage === 1"
                @click="goToPage(currentPage - 1)"
                class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Previous"
              >
                <span aria-hidden="true">&laquo;</span>
              </button>
            </li>
  
            <!-- ปุ่มเลขหน้าต่างๆ -->
            <li v-for="page in paginationRange" :key="page">
              <button
                @click="goToPage(page)"
                :class="[ 
                  'px-3 py-2 leading-tight border border-gray-300',
                  page === currentPage
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
                ]"
              >
                {{ page }}
              </button>
            </li>
  
            <!-- ปุ่ม Next -->
            <li>
              <button
                :disabled="currentPage === totalPages"
                @click="goToPage(currentPage + 1)"
                class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Next"
              >
                <span aria-hidden="true">&raquo;</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  
  <script setup>
import { ref, computed } from 'vue';
import { pr } from '~/data/pr'; // ตรวจสอบว่า pr ถูกนำเข้าอย่างถูกต้อง

console.log('Imported pr:', pr); // Debug: ตรวจสอบค่า pr

// ค่าคงที่สำหรับจำนวนรายการต่อหน้า
const itemsPerPage = ref(10);

// ค่าควบคุมหน้า
const currentPage = ref(1);

// ช่องค้นหา
const searchPurchaser = ref('');
const searchDateSince = ref('');
const searchDateTo = ref('');
const searchStatus = ref('');

// ตัวแปรเก็บผลลัพธ์การค้นหา
const filteredPR = ref([...pr]); // ให้ค่าเริ่มต้นเป็นสำเนาของ pr เสมอ

// ฟังก์ชันค้นหาเมื่อกดปุ่มค้นหา
const applyFilters = () => {
  filteredPR.value = pr.filter((item) => {
    // ตรวจสอบผู้ขาย
    const matchPurchaser = searchPurchaser.value
      ? item.name.toLowerCase().includes(searchPurchaser.value.toLowerCase())
      : true;

   // ตรวจสอบวันที่ขอซื้อ (ตั้งแต่)
   const matchDateSince = searchDateSince.value
      ? new Date(item.date).setHours(0, 0, 0, 0) >= new Date(searchDateSince.value).setHours(0, 0, 0, 0)
      : true;

    // ตรวจสอบวันที่ขอซื้อ (ถึง)
    const matchDateTo = searchDateTo.value
      ? new Date(item.date).setHours(0, 0, 0, 0) <= new Date(searchDateTo.value).setHours(0, 0, 0, 0)
      : true;
    // ตรวจสอบสถานะ
    const matchStatus = searchStatus.value
      ? item.status === searchStatus.value
      : true;

    return matchPurchaser && matchDateSince && matchDateTo && matchStatus;
  });

  // รีเซ็ตหน้าไปที่ 1 เมื่อมีการค้นหาใหม่
  currentPage.value = 1;
};

// ฟังก์ชันในการไปยังหน้าเฉพาะ
const goToPage = (page) => {
  if (page === '...') return; // ไม่ทำอะไรถ้าเป็น "..."
  if (page < 1) {
    page = 1;
  } else if (page > totalPages.value) {
    page = totalPages.value;
  }
  currentPage.value = page;
};

// จำนวนหน้าทั้งหมด
const totalPages = computed(() => {
  return filteredPR.value ? Math.ceil(filteredPR.value.length / itemsPerPage.value) : 0;
});

// ช่วงหน้าที่จะแสดงใน Pagination
const paginationRange = computed(() => {
  const total = totalPages.value;
  const current = currentPage.value;
  const delta = 2;
  const range = [];

  for (let i = Math.max(2, current - delta); i <= Math.min(total - 1, current + delta); i++) {
    range.push(i);
  }

  if (current - delta > 2) {
    range.unshift('...');
  }

  if (current + delta < total - 1) {
    range.push('...');
  }

  range.unshift(1);

  if (total > 1) {
    range.push(total);
  }

  return range;
});

// ข้อมูลที่จะแสดงในหน้าปัจจุบัน
const paginatedPR = computed(() => {
  if (!filteredPR.value) return [];
  const start = (currentPage.value - 1) * itemsPerPage.value;
  const end = start + itemsPerPage.value;
  return filteredPR.value.slice(start, end);
});

// ฟังก์ชัน Logout
import { useRouter, useCookie } from '#imports'; // ใช้การนำเข้าจาก #imports
const router = useRouter();
const isAuthenticated = useCookie('isAuthenticated', { default: () => false });

const handleLogout = () => {
  isAuthenticated.value = false;
  router.push('/login');
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
  .select {
    width: 100%;
    padding: 8px;
    margin-bottom: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  .search {
    background-color: #0ea5e9;
    padding: 12px;
    color: white;
    margin-top: 22px;
  }
  .purchase-no {
    background-color: #1AFF8C;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    margin-bottom: 1rem;
    border-radius: 8px;
  }
  </style>
  