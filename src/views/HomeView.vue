<script setup lang="ts">
  import { ref, onMounted } from "vue";
  import { storeToRefs } from 'pinia';
  import { useLocationStore } from "@/stores/locationStore"
  import { useRouter } from "vue-router"

  const router = useRouter();
  const locationStore = useLocationStore();
  const { LATITIUDE, LONGTITUDE } = storeToRefs(locationStore);

  const inputSearchword = ref();

  async function searchWorkers() {
    locationStore.getLocation();
    router.push(`/search?q=${inputSearchword.value}&latitude=${LATITIUDE.value}&longtitude=${LONGTITUDE.value}`);
  }

</script>

<template>
  <div class="container">
    <div class="logo">
      <span>Worker</span><span>Hunt</span>
    </div>
    <p class="tagline">Look for a worker in your neighborhood</p>
    <div class="search-bar">
      <input type="text" v-model="inputSearchword" @keyup.enter="searchWorkers" placeholder="Search...">
      <button @click="searchWorkers">
        🔍
      </button>
    </div>
  </div>
</template>

<style scoped>
  .container {
    text-align: center;
  }

  .logo {
    font-size: 2.5rem;
  }

  .logo span {
    color: #d93025;
    font-weight: 700;
  }

  .logo span:first-child {
    color: #1a73e8;
  }

  .tagline {
    font-size: 1rem;
    color: #333;
    margin: 0.5rem 0 2rem 0;
  }

  .search-bar {
    position: relative;
    width: 300px;
    margin: 0 auto;
  }

  .search-bar input {
    width: 100%;
    padding: 12px 20px;
    font-size: 1rem;
    border: none;
    border-radius: 50px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    outline: none;
  }

  .search-bar input::placeholder {
    color: #aaa;
  }

  .search-bar button {
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    border: none;
    background: none;
    cursor: pointer;
    font-size: 1.2rem;
    color: #555;
  }
</style>