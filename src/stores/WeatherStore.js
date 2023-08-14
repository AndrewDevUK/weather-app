import { defineStore } from 'pinia';
import axios from 'axios';
import { ref } from 'vue';

const API_KEY = 'd9acc0c70fe1453082b124200232606';
const API_BASE_URL = 'http://api.weatherapi.com/v1/';

export const useWeatherStore = defineStore('product', {
    state: () => ({
        location: {
            city: 'London',
            country: 'United Kingdom',
            timezone: 'Europe/London',
            localtime: '2023-04-26 00:00',
        },
        currentCondition: {
            temp_celcius: '30',
        },
        error: ref(false)
    }),
    getters: {
        getCity(state) {
            return state.location.city;
        },
        getCurrentTempCelcius (state) {
            return state.currentCondition.temp_celcius;
        }
    },
    actions: {
        updateLocation(city) {
            axios.get(API_BASE_URL + 'current.json?key=' + API_KEY + '&q=' + city)
            .then(response => {
                this.location.city = response.data.location.name;
                this.location.country = response.data.location.country
                this.location.timezone = response.data.location.tz_id
                this.location.localtime = response.data.location.localtime

                this.currentCondition.temp_celcius = response.data.current.temp_c
                this.error = false;
            })
            .catch( error => {
                console.log("error");
                return this.error = true;
            });
        }
    },
});