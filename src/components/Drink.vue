<template>
    <div class="drink">
        <div class="row">
            <div class="col-12 justify-content-center d-flex flex-column">
                <h1 class="title text-center m-0">{{drink.strDrink}}</h1>
                <p class="m-0 text-center">{{drink.strCategory}}, {{drink.strAlcoholic}}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-5 my-4">
                <div class="img-container stack rotated-left">
                    <img class="img-fluid" v-bind:src="drink.strDrinkThumb"/>
                </div>
            </div>
            <div class="col-12 col-md-7">
                <h3 class="text-center m-0">Ingredients:</h3>
                <div v-for="ing in ingredients()" class="ingredient col-12">
                    <img class="img-fluid"
                         v-bind:src="`https://www.thecocktaildb.com/images/ingredients/${ing.name}-Small.png`">
                    <span class="name">{{ing.name}} {{ing.doze}}</span>
                </div>
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
                    .map(key => ({
                        name: this.drink[key],
                        doze: this.drink[key.replace('strIngredient', 'strMeasure')]
                    }));
            }
        }
    }
</script>

<style lang="scss">
    .drink {
        word-break: break-all;
        .img-container {
            width: 70%;
            margin: 0 auto;
            .img-fluid {
                max-height: 500px;
            }
        }
        .ingredient {
            margin-bottom: .3rem;
            img {
                max-height: 50px;
            }
        }
    }
</style>