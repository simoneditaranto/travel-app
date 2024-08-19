<script>

export default {

    name: 'HomePage',

}

</script>

<template>

    <router-link :to="{ name: 'create-travel' }" class="nav-link">
        Crea Viaggio
    </router-link>
    <router-link :to="{ name: 'travels-list' }" class="nav-link">
        Lista dei tuoi viaggi
    </router-link><router-link :to="{ name: 'travels-to-do' }" class="nav-link">
        Viaggi che hai creato
    </router-link>

</template>

<style>


</style>