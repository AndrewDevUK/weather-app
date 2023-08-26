<template>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><i class="fa-solid fa-meteor"></i></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Weather App</a>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input v-model="location" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit" @click.prevent="updateLocation">Search</button>
      </form>
    </div>
  </div>
</nav>
</template>
<script setup>
import { ref } from 'vue';
import { useWeatherStore } from '../stores/WeatherStore';

const store = useWeatherStore();
const location = ref('');

const updateLocation = () => {
  store.updateLocation(location.value);
};
</script>