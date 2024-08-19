<script>

export default {

    name: 'TravelsList',

}

</script>

<template>

    <div class="container">

        <h2>Ecco la lista dei viaggi che hai fatto</h2>

        <h3>Fai una recensione completa del viaggio</h3>

    </div>

    <router-link :to="{ name: 'home' }" class="nav-link">
        Torna alla home
    </router-link>

</template>

<style lang="scss">

</style>