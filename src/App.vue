<script>

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {

  components: {

    AppHeader,
    AppMain,
    AppFooter,

  },

}

</script>

<template>

    
  <AppHeader></AppHeader>

  <router-view></router-view>

  <AppFooter></AppFooter>


</template>

<style lang="scss" scoped>



</style>
