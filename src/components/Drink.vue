<template>
    <div class="drink">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-4 col-xl-3">
                <div class="img-container stack rotated-left">
                    <img class="img-fluid" v-bind:src="drink.strDrinkThumb"/>
                </div>
            </div>
            <div class="col-12 col-md-6 col-lg-8 col-xl-9">
                <h1 class="title">{{drink.strDrink}}</h1>
                <p>{{drink.strCategory}}, {{drink.strAlcoholic}}</p>
                <p>Ingredients: {{ingredients()}}</p>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <h3 class="text-center">Instructions</h3>
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
                return Object.keys(this.drink).filter(key => key.indexOf('strIngredient') !== -1 && this.drink[key] !== '').map(key => this.drink[key]).join(', ');
            }
        }
    }
</script>

<style lang="scss">
    .drink {
        word-break: break-all;
        font-size: 24pt;
        p {
            margin: 0;
        }
        h1 {
            font-size: 2.5em;
            margin: 0;
            line-height: 1em;
            @media (max-width: 756px) {
                font-size: 2em;
                margin: 0;
                line-height: 1em;
            }
        }
        h3 {
            margin: 0;
            font-size: 1.5em;
        }
        .img-container {
            @media (max-width: 756px) {
                width: 80%;
                margin: 1rem auto;
            }
            .img-fluid {
                max-height: 500px;
            }
        }
    }
</style>