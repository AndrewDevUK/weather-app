<script setup>
import { useWeatherStore } from '../stores/WeatherStore';
import { ref } from 'vue';

const location = ref('London');
const store = useWeatherStore();

const update = () => {
  console.log(store.updateLocation(location.value))
}
</script>

<template>
  <header-nav />
  <main>
    <div  id="container">
      <div class="text-center display-5">{{ store.getCity }}</div>
      <div class="text-center display-6">{{ store.getCurrentTempCelcius }}&deg;C</div>
    </div>
    <div>
      <form class="col-6" novalidate>
        <div class="mb-3">
          <input v-model="location" type="text" placeholder="City name..." class="form-control" :class="{'is-invalid': store.error}" required>
          <div class="invalid-feedback">
            Invalid city name!
          </div>
        </div>
        <button type="submit" class="btn btn-primary" hidden @click.prevent="update">Update</button>
      </form>
    </div>
  </main>
</template>
