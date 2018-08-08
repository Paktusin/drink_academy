<template>
    <div class="drink">
        <h1 class="title">{{drink.strDrink}}</h1>
        <img class="img-fluid" v-bind:src="drink.strDrinkThumb"/>
    </div>
</template>

<script>
    export default {
        name: "Drink",
        props: ['drink']
    }
</script>

<style lang="scss">
    .drink{

    }
</style>