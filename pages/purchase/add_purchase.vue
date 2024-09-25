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
            <div
              class="absolute hidden bg-white shadow-md mt-1 group-hover:block w-[150px] ZIndex"
            >
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
      <div class="flex flex-row">
        <p class="text-2xl p-10">ขอซื้อสินค้า (PR)</p>
        <svg
          class="breadcrumb"
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M9.29 15.88L13.17 12L9.29 8.12a.996.996 0 1 1 1.41-1.41l4.59 4.59c.39.39.39 1.02 0 1.41L10.7 17.3a.996.996 0 0 1-1.41 0c-.38-.39-.39-1.03 0-1.42"
          />
        </svg>
        <p class="text-2xl p-10 add-purchase">เพิ่มใบขอซื้อ</p>
      </div>
      <div class="flex flex-row">
        <div class="w-44 ml-10 flex flex-col basis-40 mr-10">
          <label for="warehouse"
            >คลัง <span class="text-red-500">*</span> :</label
          >
          <select id="warehouse" v-model="selectedWarehouse" class="select">
            <option value="">----เลือกคลัง----</option>
            <option value="คลัง 1">คลัง 1</option>
            <option value="คลัง 2">คลัง 2</option>
            <option value="คลัง 3">คลัง 3</option>
            <option value="คลัง 4">คลัง 4</option>
          </select>
          <span class="font-bold">{{
            selectedWarehouse || "ยังไม่ได้เลือกคลัง"
          }}</span>
        </div>
        <div class="flex_basis mt-8">
          <div>
            สถานะเอกสาร : <span class="text-cyan-400">{{ statusDocument }}</span>
          </div>
        </div>
        <div class="w-44 ml-10 flex flex-col basis-40 mr-10">
          <label for="numberofpurchase"
            >เลขที่ใบขอซื้อ <span class="text-red-500">*</span> :</label
          >
          <input
            type="text"
            name="numberofpurchase"
            id="numberofpurchase"
            class="input"
            v-model="currentPRNo"
            disabled
            :placeholder="currentPRNo ? '' : 'ยังไม่มี PR_No'"
          />
        </div>
        <div class="w-44 flex flex-col basis-40 mr-10">
          <label for="dateNo">วันที่ <span class="text-red-500">*</span> :</label>
          <input class="input" type="date" name="dateNo" id="dateNo" />
        </div>
        <div class="w-44 flex flex-col basis-40 mr-10">
          <label for="dateSend"
            >กำหนดส่ง <span class="text-red-500">*</span> :</label
          >
          <input class="input" type="date" name="dateSend" id="dateSend" />
        </div>
      </div>
      <div class="flex flex-row">
        <div class="w-44 flex flex-col basis-4/6 ml-10 mt-5">
          <label for="seller">
            รหัสผู้ขาย <span class="text-red-500">*</span> :
          </label>
          <!-- Search Box and Button -->
          <div class="flex items-center space-x-2">
            <input
              type="text"
              v-model="selectedOption.code"
              readonly
              class="px-3 py-2 border rounded w-40"
              placeholder="เลือกตัวเลือก..."
            />
            <button
              @click="openModal"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 float-left"
            >
              ค้นหา
            </button>
            <!-- แสดงที่อยู่ที่ได้จากตาราง -->
            <div class="">
              <span
                >{{ selectedOption.name }} {{ selectedOption.address }}
                {{ selectedOption.phone }} {{ selectedOption.email }}</span
              >
            </div>
            <!-- Modal -->
          </div>
          <div
            v-if="isModalOpen"
            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <div class="bg-white rounded-lg shadow-lg w-full mx-40 ZIndex">
              <div class="p-4 border-b">
                <h2 class="text-xl font-semibold">ผู้ขายสินค้า</h2>
              </div>
  
              <div class="p-4">
                <div class="mb-4">
                  <input
                    type="text"
                    v-model="searchQuery"
                    placeholder="ค้นหารหัสหรือชื่อผู้ขาย..."
                    class="w-full px-3 py-2 border rounded"
                  />
                  <div class="overflow-x-auto">
                    <table class="min-w-full text-sm align-middle">
                      <thead class="bg-gray-100">
                        <tr>
                          <th class="pl-2 py-2 text-left">เลือก</th>
                          <th class="py-2 text-left">รหัส</th>
                          <th class="py-2 text-left">ชื่อ</th>
                          <th class="py-2 text-left">ที่อยู่</th>
                          <th class="py-2 text-left">โทรศัพท์</th>
                          <th class="py-2 text-left">อีเมล</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="vendor in filteredVendors"
                          :key="vendor.code"
                          class="border-b hover:bg-gray-50"
                        >
                          <td class="pl-4 py-2">
                            <input
                              type="radio"
                              :id="vendor.code"
                              name="code"
                              :value="vendor.code"
                              v-model="tempSelectedCode"
                            />
                          </td>
                          <td class="py-2">{{ vendor.code }}</td>
                          <td class="py-2">{{ vendor.name }}</td>
                          <td class="py-2">{{ vendor.address }}</td>
                          <td class="py-2">{{ vendor.phone }}</td>
                          <td class="py-2">{{ vendor.email }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="p-4 border-t flex justify-end space-x-2">
                  <button
                    @click="closeModal"
                    class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                  >
                    ยกเลิก
                  </button>
                  <button
                    @click="confirmSelection"
                    :disabled="!tempSelectedCode"
                    class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                  >
                    ยืนยัน
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-44 flex flex-col basis-40 mt-5 relative right-12">
          <label class="z-index-2" for="refData"
            >เลขที่เอกสารอ้างอิง <span class="text-red-500">*</span> :</label
          >
          <input
            class="input z-index-2"
            type="text"
            name="refData"
            id="refData"
            required
          />
        </div>
      </div>
      <div class="flex flex-row">
        <div class="w-44 flex flex-col basis-96 ml-10">
          <label for="field"> ฝ่าย <span class="text-red-500">*</span> : </label>
          <!-- Search Box and Button -->
          <div class="flex items-center space-x-2">
            <input
              type="text"
              v-model="selectedOption2.code"
              readonly
              class="px-3 py-2 border rounded w-40"
              placeholder="เลือกตัวเลือก..."
            />
            <button
              @click="openModal2"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 float-left"
            >
              ค้นหา
            </button>
            <div class="">
              <span>{{ selectedOption2.name }} </span>
            </div>
            <!-- Modal -->
          </div>
          <div
            v-if="isModalOpen2"
            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <div class="bg-white rounded-lg shadow-lg w-full mx-40 ZIndex">
              <div class="p-4 border-b">
                <h2 class="text-xl font-semibold">ฝ่าย</h2>
              </div>
  
              <div class="p-4">
                <div class="mb-4">
                  <input
                    type="text"
                    v-model="searchQuery2"
                    placeholder="ค้นหารหัสหรือชื่อ..."
                    class="w-full px-3 py-2 border rounded"
                  />
                  <div class="overflow-x-auto">
                    <table class="min-w-full text-sm align-middle">
                      <thead class="bg-gray-100">
                        <tr>
                          <th class="pl-2 py-2 text-left">เลือก</th>
                          <th class="py-2 text-left">รหัส</th>
                          <th class="py-2 text-left">ชื่อ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="field in filteredFields"
                          :key="field.code"
                          class="border-b hover:bg-gray-50"
                        >
                          <td class="pl-4 py-2">
                            <input
                              type="radio"
                              :id="field.code"
                              name="code"
                              :value="field.code"
                              v-model="tempSelectedCode2"
                            />
                          </td>
                          <td class="py-2">{{ field.code }}</td>
                          <td class="py-2">{{ field.name }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="p-4 border-t flex justify-end space-x-2">
                  <button
                    @click="closeModal2"
                    class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                  >
                    ยกเลิก
                  </button>
                  <button
                    @click="confirmSelection2"
                    :disabled="!tempSelectedCode2"
                    class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                  >
                    ยืนยัน
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-44 flex flex-col basis-96 ml-10">
          <label for="field"> แผนก <span class="text-red-500">*</span> : </label>
          <!-- Search Box and Button -->
          <div class="flex items-center space-x-2">
            <input
              type="text"
              v-model="selectedOption3.code"
              readonly
              class="px-3 py-2 border rounded w-40"
              placeholder="เลือกตัวเลือก..."
            />
            <button
              @click="openModal3"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 float-left"
            >
              ค้นหา
            </button>
            <div class="">
              <span>{{ selectedOption3.department_name }} </span>
            </div>
            <!-- Modal -->
          </div>
          <div
            v-if="isModalOpen3"
            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <div class="bg-white rounded-lg shadow-lg w-full mx-40 ZIndex">
              <div class="p-4 border-b">
                <h2 class="text-xl font-semibold">แผนก</h2>
              </div>
  
              <div class="p-4">
                <div class="mb-4">
                  <input
                    type="text"
                    v-model="searchQuery3"
                    placeholder="ค้นหารหัสหรือชื่อ..."
                    class="w-full px-3 py-2 border rounded"
                  />
                  <div class="overflow-x-auto">
                    <table class="min-w-full text-sm align-middle">
                      <thead class="bg-gray-100">
                        <tr>
                          <th class="pl-2 py-2 text-left">เลือก</th>
                          <th class="py-2 text-left">รหัส</th>
                          <th class="py-2 text-left">ชื่อฝ่าย</th>
                          <th class="py-2 text-left">ชื่อแผนก</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="department in filteredDepartments"
                          :key="department.code"
                          class="border-b hover:bg-gray-50"
                        >
                          <td class="pl-4 py-2">
                            <input
                              type="radio"
                              :id="department.code"
                              name="code"
                              :value="department.code"
                              v-model="tempSelectedCode3"
                            />
                          </td>
                          <td class="py-2">{{ department.code }}</td>
                          <td class="py-2">{{ department.name }}</td>
                          <td class="py-2">{{ department.department_name }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="p-4 border-t flex justify-end space-x-2">
                  <button
                    @click="closeModal3"
                    class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                  >
                    ยกเลิก
                  </button>
                  <button
                    @click="confirmSelection3"
                    :disabled="!tempSelectedCode3"
                    class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                  >
                    ยืนยัน
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="w-44 flex flex-col basis-96 ml-10">
          <label for="field">
            โครงการ <span class="text-red-500">*</span> :
          </label>
          <!-- Search Box and Button -->
          <div class="flex items-center space-x-2">
            <input
              type="text"
              v-model="selectedOption4.code"
              readonly
              class="px-3 py-2 border rounded w-40"
              placeholder="เลือกตัวเลือก..."
            />
            <button
              @click="openModal4"
              class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 float-left"
            >
              ค้นหา
            </button>
            <div class="">
              <span>{{ selectedOption4.project_name }} </span>
            </div>
            <!-- Modal -->
          </div>
          <div
            v-if="isModalOpen4"
            class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          >
            <div class="bg-white rounded-lg shadow-lg w-full mx-40">
              <div class="p-4 border-b">
                <h2 class="text-xl font-semibold">โครงการ</h2>
              </div>
  
              <div class="p-4">
                <div class="mb-4">
                  <input
                    type="text"
                    v-model="searchQuery4"
                    placeholder="ค้นหารหัสหรือชื่อ..."
                    class="w-full px-3 py-2 border rounded"
                  />
                  <div class="overflow-x-auto">
                    <table class="min-w-full text-sm align-middle">
                      <thead class="bg-gray-100">
                        <tr>
                          <th class="pl-2 py-2 text-left">เลือก</th>
                          <th class="py-2 text-left">รหัส</th>
                          <th class="py-2 text-left">ชื่อ</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr
                          v-for="project in filteredProjects"
                          :key="project.code"
                          class="border-b hover:bg-gray-50"
                        >
                          <td class="pl-4 py-2">
                            <input
                              type="radio"
                              :id="project.code"
                              name="code"
                              :value="project.code"
                              v-model="tempSelectedCode4"
                            />
                          </td>
                          <td class="py-2">{{ project.code }}</td>
                          <td class="py-2">{{ project.project_name }}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="p-4 border-t flex justify-end space-x-2">
                  <button
                    @click="closeModal4"
                    class="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
                  >
                    ยกเลิก
                  </button>
                  <button
                    @click="confirmSelection4"
                    :disabled="!tempSelectedCode4"
                    class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
                  >
                    ยืนยัน
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>
<script setup>
  
  import { ref, onMounted, computed } from "vue";
  import { useRouter, useCookie } from "#app";
  // ช่องเลือกคลัง
  const selectedWarehouse = ref("");
  
  // สถานะเอกสาร (ตัวอย่าง)
  const statusDocument = ref("ร่าง (Draft)");
  
  // ตัวแปรสำหรับเก็บเลขที่ใบขอซื้อปัจจุบัน
  const currentPRNumber = ref(0);
  
  // ตัวแปรสำหรับแสดง PR_No
  const currentPRNo = ref("");
  
  // ฟังก์ชันสร้าง PR_No ใหม่
  const generatePRNo = () => {
    currentPRNumber.value += 1;
    const newNumberStr = String(currentPRNumber.value).padStart(5, "0");
    return `PR240${newNumberStr}`;
  };
  
  // ตั้งค่า PR_No เมื่อโหลดคอมโพเนนต์
  onMounted(() => {
    // ดึงค่าจาก Local Storage ถ้ามี
    const storedPRNumber = parseInt(
      localStorage.getItem("currentPRNumber") || "0",
      10
    );
    currentPRNumber.value = storedPRNumber;
    // ตั้งค่า PR_No เป็น PR24000001 ถ้าไม่มีการบันทึกมาก่อน
    currentPRNo.value = `PR240${String(currentPRNumber.value + 1).padStart(
      5,
      "0"
    )}`;
  });
  
  // ฟังก์ชันบันทึกใบขอซื้อใหม่
  const savePR = () => {
    if (!selectedWarehouse.value) {
      alert("กรุณาเลือกคลัง");
      return;
    }
  
    // สร้าง PR_No ใหม่
    const newPRNo = generatePRNo();
  
    // เก็บค่าปัจจุบันใน Local Storage
    localStorage.setItem("currentPRNumber", currentPRNumber.value);
  
    // ตั้งค่า PR_No ในฟิลด์
    currentPRNo.value = newPRNo;
  
    // รีเซ็ตคลัง
    selectedWarehouse.value = "";
  
    // รีเฟรชสถานะเอกสาร
    statusDocument.value = "ร่าง (Draft)"; // ตัวอย่าง
  
    // แจ้งเตือนการสร้าง PR ใหม่
    alert(`สร้างใบขอซื้อใหม่เรียบร้อย: ${newPRNo}`);
  };
  
  // ฟังก์ชันสำหรับรีเซ็ต PR_No ให้กลับมาเป็น PR24000001
  
  // ฟังก์ชัน Logout
  const router = useRouter();
  const isAuthenticated = useCookie("isAuthenticated", { default: () => false });
  
  const handleLogout = () => {
    isAuthenticated.value = false;
    router.push("/login");
  };
  // ตัวแปรสำหรับควบคุมการเปิดปิดโมดอล
  const isModalOpen = ref(false);
  const isModalOpen2 = ref(false);
  const isModalOpen3 = ref(false);
  const isModalOpen4 = ref(false);
  // ตัวแปรสำหรับเก็บค่าที่เลือกใน Search Box
  const selectedOption = ref({
    code: "",
    name: "",
    address: "",
    phone: "",
    email: "",
  });
  const selectedOption2 = ref({
    code: "",
    name: "",
  });
  const selectedOption3 = ref({
    code: "",
    department_name: "",
  });
  const selectedOption4 = ref({
    code: "",
    project_name: "",
  });
  // ตัวแปรสำหรับเก็บค่าที่เลือกในโมดอลชั่วคราว
  const tempSelectedCode = ref("");
  const tempSelectedCode2 = ref("");
  const tempSelectedCode3 = ref("");
  const tempSelectedCode4 = ref("");
  // รายการผู้ขายconst tempSelectedCode = ref("");
  const vendors = ref([
    {
      code: "V001",
      name: "Vendor 001",
      address: "Address 001, Bangkoknoi Bangkok 10000",
      phone: "0856987452",
      email: "v001@gmail.com",
    },
    {
      code: "V002",
      name: "Vendor 002",
      address: "Address 002, Bankkapi Bangkok 11000",
      phone: "0869578458",
      email: "v002@gmail.com",
    },
    {
      code: "V003",
      name: "Vendor 003",
      address: "Address 003, Prayathai Bangkok 15000",
      phone: "0851475632",
      email: "v003@gmail.com",
    },
    {
      code: "V004",
      name: "Vendor 004",
      address: "Address 004, Prayathai Bangkok 15000",
      phone: "0837586325",
      email: "v004@gmail.com",
    },
    {
      code: "V005",
      name: "Vendor 005",
      address: "Address 005, Banglak Bangkok 14000",
      phone: "0614758568",
      email: "v005@gmail.com",
    },
    {
      code: "V006",
      name: "Vendor 006",
      address: "Address 006, Banglak Bangkok 14000",
      phone: "0875694236",
      email: "v006@gmail.com",
    },
    {
      code: "V007",
      name: "Vendor 007",
      address: "Address 007, Banglak Bangkok 14000",
      phone: "0635874568",
      email: "v007@gmail.com",
    },
    {
      code: "V008",
      name: "Vendor 008",
      address: "Address 008, Banglak Bangkok 14000",
      phone: "0845236987",
      email: "v008@gmail.com",
    },
  ]);
  
  const fields = ref([
    {
      code: "D001",
      name: "ฝ่ายขาย",
    },
    {
      code: "D002",
      name: "ฝ่ายบุคคล",
    },
    {
      code: "D003",
      name: "ฝ่ายการตลาด",
    },
    {
      code: "D004",
      name: "ฝ่ายผลิต",
    },
    {
      code: "D005",
      name: "ฝ่ายการเงิน",
    },
    {
      code: "D006",
      name: "ฝ่ายบัญชี",
    },
    {
      code: "D007",
      name: "ฝ่ายคลังสินค้า",
    },
  ]);
  const departments = ref([
    {
      code: "S001",
      name: "ฝ่ายขาย",
      department_name: "แผนก 001",
    },
    {
      code: "S002",
      name: "ฝ่ายขาย",
      department_name: "แผนก 002",
    },
    {
      code: "S003",
      name: "ฝ่ายขาย",
      department_name: "แผนก 003",
    },
    {
      code: "S004",
      name: "ฝ่ายบุคคล",
      department_name: "แผนก 004",
    },
    {
      code: "S005",
      name: "ฝ่ายบุคคล",
      department_name: "แผนก 005",
    },
    {
      code: "S006",
      name: "ฝ่ายคลังสินค้า",
      department_name: "แผนก 006",
    },
  ]);
  const projects = ref([
    {
      code: "P001",
      project_name: "Project 001",
    },
    {
      code: "P002",
      project_name: "Project 002",
    },
    {
      code: "P003",
      project_name: "Project 003",
    },
    {
      code: "P004",
      project_name: "Project 004",
    },
    {
      code: "P005",
      project_name: "Project 005",
    },
    {
      code: "P006",
      project_name: "Project 006",
    },
    {
      code: "P007",
      project_name: "Project 007",
    },
  ]);
  // ฟังก์ชันเปิดโมดอล
  const openModal4 = () => {
    isModalOpen4.value = true;
    // ตั้งค่า tempSelectedCode เป็นค่าปัจจุบัน
    tempSelectedCode4.value = selectedOption4.value.code;
  };
  const openModal3 = () => {
    isModalOpen3.value = true;
    // ตั้งค่า tempSelectedCode เป็นค่าปัจจุบัน
    tempSelectedCode3.value = selectedOption3.value.code;
  };
  const openModal2 = () => {
    isModalOpen2.value = true;
    // ตั้งค่า tempSelectedCode เป็นค่าปัจจุบัน
    tempSelectedCode2.value = selectedOption2.value.code;
  };
  const openModal = () => {
    isModalOpen.value = true;
    // ตั้งค่า tempSelectedCode เป็นค่าปัจจุบัน
    tempSelectedCode.value = selectedOption.value.code;
  };
  
  // ฟังก์ชันปิดโมดอล
  const closeModal = () => {
    isModalOpen.value = false;
  };
  const closeModal2 = () => {
    isModalOpen2.value = false;
  };
  const closeModal3 = () => {
    isModalOpen3.value = false;
  };
  const closeModal4 = () => {
    isModalOpen4.value = false;
  };
  // ฟังก์ชันยืนยันการเลือก
  const confirmSelection = () => {
    // ค้นหาผู้ขายที่ถูกเลือกจาก code
    const selectedVendor = vendors.value.find(
      (vendor) => vendor.code === tempSelectedCode.value
    );
    if (selectedVendor) {
      selectedOption.value = {
        code: selectedVendor.code,
        name: selectedVendor.name,
        address: selectedVendor.address,
        phone: selectedVendor.phone,
        email: selectedVendor.email,
      };
      isModalOpen.value = false;
    }
  };
  const confirmSelection2 = () => {
    // ค้นหาผู้ขายที่ถูกเลือกจาก code
    const selectedFields = fields.value.find(
      (field) => field.code === tempSelectedCode2.value
    );
    if (selectedFields) {
      selectedOption2.value = {
        code: selectedFields.code,
        name: selectedFields.name,
      };
      isModalOpen2.value = false;
    }
  };
  const confirmSelection3 = () => {
    // ค้นหาผู้ขายที่ถูกเลือกจาก code
    const selectedDepartments = departments.value.find(
      (department) => department.code === tempSelectedCode3.value
    );
    if (selectedDepartments) {
      selectedOption3.value = {
        code: selectedDepartments.code,
        department_name: selectedDepartments.department_name,
      };
      isModalOpen3.value = false;
    }
  };
  const confirmSelection4 = () => {
    // ค้นหาผู้ขายที่ถูกเลือกจาก code
    const selectedProjects = projects.value.find(
      (project) => project.code === tempSelectedCode4.value
    );
    if (selectedProjects) {
      selectedOption4.value = {
        code: selectedProjects.code,
        project_name: selectedProjects.project_name,
      };
      isModalOpen4.value = false;
    }
  };
  const searchQuery = ref("");
  const filteredVendors = computed(() => {
    if (!searchQuery.value) {
      return vendors.value;
    }
    const searchLower = searchQuery.value.toLowerCase();
    return vendors.value.filter((vendor) => {
      return (
        vendor.code.toLowerCase().includes(searchLower) ||
        vendor.name.toLowerCase().includes(searchLower)
      );
    });
  });
  const searchQuery2 = ref("");
  const filteredFields = computed(() => {
    if (!searchQuery2.value) {
      return fields.value;
    }
    const searchLower2 = searchQuery2.value.toLowerCase();
    return fields.value.filter((field) => {
      return (
        field.code.toLowerCase().includes(searchLower2) ||
        field.name.toLowerCase().includes(searchLower2)
      );
    });
  });
  const searchQuery3 = ref("");
  const filteredDepartments = computed(() => {
    if (!searchQuery3.value) {
      return departments.value;
    }
    const searchLower3 = searchQuery3.value.toLowerCase();
    return departments.value.filter((department) => {
      return (
        department.code.toLowerCase().includes(searchLower3) ||
        department.department_name.toLowerCase().includes(searchLower3)
      );
    });
  });
  const searchQuery4 = ref("");
  const filteredProjects = computed(() => {
    if (!searchQuery4.value) {
      return projects.value;
    }
    const searchLower4 = searchQuery4.value.toLowerCase();
    return projects.value.filter((project) => {
      return (
        project.code.toLowerCase().includes(searchLower4) ||
        project.project_name.toLowerCase().includes(searchLower4)
      );
    });
  });
  
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
  .input {
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
  .breadcrumb {
    margin-top: 31px;
    position: relative;
    right: 42px;
  }
  .add-purchase {
    position: relative;
    right: 80px;
  }
  .ZIndex {
    z-index: 3;
  }
  .flex_basis {
    flex-basis: 183px;
  }
  .z-index-2 {
    z-index: 1;
  }
  