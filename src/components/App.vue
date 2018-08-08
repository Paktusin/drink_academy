<template>
    <div>
        <Loader/>
        <transition name="fade">
            <div v-show="loaded" class="App" v-bind:style="{backgroundImage:`url(${backImage})`}">
                <img style="display: none" v-bind:src="backImage" v-on:load="imgLoad"/>
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <div class="mainTitle neon" v-bind:class="getNeonClass()">
                                drink academy
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="blackboard">
                                <div class="p-3">
                                    <Drink v-if="randomDrinks.length > 0" v-bind:drink="randomDrinks[0]"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
    import dataService from "../dataService";
    import Drink from "./Drink.vue";
    import backImage from '../img/back.jpg'
    import Loader from "./Loader.vue";

    export default {
        name: "App",
        components: {Loader, Drink},
        data() {
            return {
                loaded: false,
                neonOn: false,
                neonBroke: false,
                backImage,
                randomDrinks: []
            }
        },
        methods: {
            getNeonClass() {
                let cl = '';
                cl += this.neonOn ? 'on ' : '';
                cl += this.neonBroke ? 'broke ' : '';
                return cl;
            },
            imgLoad(e) {
                this.loaded = true;
                setTimeout(() => {
                    this.neonOn = true;
                    setInterval(() => {
                        this.neonBroke = true;
                        setTimeout(() => {
                            this.neonBroke = false;
                        }, 2000);
                    }, 5000);
                }, 1000);
            }
        },
        beforeCreate() {
            dataService.randomDrinks().then(drinks => {
                this.randomDrinks = drinks;
            })
        }
    }
</script>

<style>
    .mainTitle {
        font-family: 'Neon', serif;
        font-size: 5rem;
        line-height: 4rem;
        text-align: center;
        margin-bottom: 1.5rem;
        margin-top: 1rem;
    }

    .App {
        background-size: cover;
        background-repeat: no-repeat;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }
</style>