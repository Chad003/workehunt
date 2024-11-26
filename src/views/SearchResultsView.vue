<script setup lang="ts">
  import { computed } from "vue"
  import { useRoute } from "vue-router"

  const route = useRoute();

  const searchresults = computed(() => {
    return route.query.q.toUpperCase();
  })

</script>

<template>
  <h1 class="search">SEARCHING FOR {{searchresults}}...</h1>
</template>

<style scoped>
  .search {
    text-transform: capitalize;
    animation-name: --fade;
  }

  @keyframes --fade {
    0% {
      background-color: red;
    }

    25% {
      background-color: yellow;
    }

    50% {
      background-color: blue;
    }

    100% {
      background-color: green;
    }
  }
</style>