<template>
  <main>
    <div  id="container">
      <div class="text-center display-5">{{ store.getCity }}</div>
      <div class="text-center display-6">{{ store.getCurrentTempCelcius }}&deg;C</div>
    </div>
  </main>
</template>
<script setup>
import { useWeatherStore } from '../stores/WeatherStore';

const store = useWeatherStore();
</script>