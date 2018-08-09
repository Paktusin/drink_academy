<template>
    <div class="drink">
        <div class="row">
            <div class="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3">
                <div class="img-container stack rotated-left">
                    <img class="img-fluid" v-bind:src="drink.strDrinkThumb"/>
                </div>
            </div>
            <div class="col-12 col-sm-6 col-md-7 col-lg-8 col-xl-9">
                <h1 class="title text-center">{{drink.strDrink}}</h1>
                <p class="m-0">{{drink.strCategory}}, {{drink.strAlcoholic}}</p>
                <span>Ingredients:</span>
                <ul>
                    <li v-for="ing in ingredients()">- {{ing}}</li>
                </ul>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <h3 class="text-center m-0">Instructions:</h3>
                <p>{{drink.strInstructions}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Drink",
        props: ['drink'],
        methods: {
            ingredients() {
                return Object.keys(this.drink)
                    .filter(key => key.indexOf('strIngredient') !== -1 && this.drink[key] !== null && this.drink[key] !== '')
                    .map(key => `${this.drink[key]}  ${this.drink[key.replace('strIngredient','strMeasure')]}`);
            }
        }
    }
</script>

<style lang="scss">
    .drink {
        word-break: break-all;
        .img-container {
            @media (max-width: 756px) {
                width: 80%;
                margin: 0 auto;
            }
            @media (max-width: 576px) {
                width: 60%;
                margin: 2rem auto;
            }
            .img-fluid {
                max-height: 500px;
            }
        }
    }
</style>