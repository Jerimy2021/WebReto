<template>
  <div class="right">
    <Search></Search>
    <CountryList></CountryList>
  </div>
</template>

<script>
import Search from '@/components/Search.vue';
import CountryList from '@/components/CountryList.vue';

export default {
  name: 'HomeView',
  components: {
    Search,
    CountryList
  },
};
</script>

<style scoped>
.right {
  background-color: skyblue;
}
</style>
