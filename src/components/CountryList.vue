<template>
    <div>
      <h2>Lista de Países</h2>
      <ul>
        <li v-for="country in sortedCountries" :key="country.code" class="country-item">
          {{ country.name }}
        </li>
      </ul>
    </div>
  </template>
  
  <style>
  .country-item {
    list-style: none;
    margin: 5px 0;
    padding: 10px;
    background-color: #f2f2f2;
    border-radius: 5px;
    border: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .country-item:hover {
    background-color: #e0e0e0;
    cursor: pointer;
  }
  </style>
  
  <script setup>
  import { computed } from 'vue';
  import { useQuery } from '@vue/apollo-composable';
  import gql from 'graphql-tag';
  
  const ALL_COUNTRIES = gql`
    query {
      countries {
        code
        name
      }
    }`;
  
  const { result } = useQuery(ALL_COUNTRIES);
  const countries = computed(() => result.value?.countries ?? []);
  const sortedCountries = computed(() => {
    return countries.value.slice().sort((a, b) => a.name.localeCompare(b.name));
  });
  </script>
  