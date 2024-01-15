<template>
  <div class="SearchContainer">
    <div class="SearchInput">
      <input v-model="searchQuery" @keyup.enter="searchCountry" type="text" placeholder="Buscar..." />
      <button @click="searchCountry">
        <font-awesome-icon icon="search" />
      </button>
    </div>
    <div class="CountryInfo" v-if="countryInfo !== null">
      <h2>{{ countryInfo.name.common }}</h2>
      <p>Capital: {{ countryInfo.capital[0] }}</p>
      <img :src="countryInfo.flags.png" alt="Flag" />
    </div>
    <div v-else>
      <p>No se encontraron resultados.</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Search',
  data() {
    return {
      searchQuery: '',
      countryInfo: null,
    };
  },
  methods: {
    async searchCountry() {
      try {
        if (this.searchQuery.trim() === '') {
          this.countryInfo = null; 
          return;
        }

        const response = await axios.get(`https://restcountries.com/v3.1/all`);
        const filteredCountries = response.data.filter(country =>
          country.name.common.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
        this.countryInfo = filteredCountries.length > 0 ? filteredCountries[0] : null;
        console.log('Country Info:', this.countryInfo);
      } catch (error) {
        console.error('Error al buscar país:', error.message);
      }
    },
  },
};
</script>

<style scoped>
.SearchContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10px;
  position: relative;
}

.SearchInput {
  display: flex;
  align-items: center;
}

input {
  width: 300px;
  padding: 10px;
  border-radius: 5px 0 0 5px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 1rem;
}

button {
  background-color: crimson;
  padding: 10px 15px;
  border: 1px solid crimson;
  border-radius: 0 5px 5px 0;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #900;
  border-color: #900;
}

.CountryInfo {
  margin-top: 20px;
  text-align: center;
}
</style>
