<script>

export default {

    name: 'TravelsToDo',

}

</script>

<template>

    <div class="container">

        <h2>Ecco la lista dei viaggi hai creato e che farai</h2>

    </div>

    <router-link :to="{ name: 'home' }" class="nav-link">
        Torna alla home
    </router-link>

</template>

<style lang="scss">

</style>