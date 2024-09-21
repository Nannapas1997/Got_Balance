<template>
  <div class="flex flex-row">
    <div class="w-64 ml-10 flex flex-col">
      <label for="purchaser">ผู้ขาย :</label>
      <input type="text" id="purchaser" required />
    </div>
    <div class="w-44 ml-10 flex flex-col">
      <label for="date-since">วันที่ขอซื้อ(ตั้งแต่) :</label>
      <input type="date" id="date-since" required />
    </div>
    <div class="w-44 ml-10 flex flex-col">
      <label for="date-to">วันที่ขอซื้อ(ถึง) :</label>
      <input type="date" id="date-to" required />
    </div>
    <div class="w-64 ml-10 flex flex-col">
      <label for="status">สถานะ :</label>
      <select id="status" class="select">
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
        <button class="search rounded-md">ค้นหา</button>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
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
    background-color: #0EA5E9;
    padding: 12px;
    color: white;
    margin-top: 22px
}
</style>
