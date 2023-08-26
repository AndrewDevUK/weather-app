<template>
  <div>
    <HeaderNav />
  </div>
  <div class="container">
    <RouterView />
  </div>
  
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router';
import HeaderNav from '@/components/HeaderNav.vue';
</script>