<template>
    <div>
        <Loader v-if="!loaded"/>
        <transition name="fade">
            <div v-show="loaded" class="App" v-bind:style="{backgroundImage:`url(${backImage})`}">
                <img style="display: none" v-bind:src="backImage" v-on:load="imgLoad"/>
                <img style="display: none" v-bind:src="chalk" v-on:load="imgLoad"/>
                <div class="container">
                    <div class="row">
                        <div class="col-12 mb-3">
                            <div class="mainTitle neon" v-bind:class="getNeonClass()">
                                drink academy
                            </div>
                            <div class="text-center">
                                <a class="neon neon-btn random-btn" v-on:click="getDrink()">
                                    next random drink
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <div class="blackboard">
                                <div class="px-3 pb-2">
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
    import chalk from '../img/chalkboard-blue.jpg'
    import Loader from "./Loader.vue";

    export default {
        name: "App",
        components: {Loader, Drink},
        data() {
            return {
                loaded: false,
                images: 0,
                neonOn: false,
                neonBroke: false,
                backImage,
                chalk,
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
                this.images++;
                this.checkAllLoad();
            },
            checkAllLoad() {
                if (this.images >= 2) {
                    this.loaded = true;
                    setTimeout(() => {
                        this.neonOn = true;
                        setInterval(() => {
                            this.neonBroke = true;
                            setTimeout(() => {
                                this.neonBroke = false;
                            }, 2000);
                        }, 10000);
                    }, 1000);
                }
            },
            getDrink() {
                dataService.randomDrinks().then(drinks => {
                    this.randomDrinks = drinks;
                })
            }
        },
        beforeMount() {
            this.getDrink()
        }
    }
</script>

<style lang="scss">
    .mainTitle {
        font-family: 'Neon', serif;
        font-size: 65pt;
        line-height: 45pt;
        text-align: center;
        margin-bottom: 1.5rem;
        margin-top: 1rem;
        @media (max-width: 756px) {
            font-size: 45pt;
            line-height: 35pt;
        }
    }

    .App {
        > .container > .row > .col-12 {
            @media (max-width: 756px) {
                padding: 0;
            }
        }
        background-size: cover;
        background-repeat: no-repeat;
        min-height: 100vh;
        display: flex;
        flex-direction: column;
        .blackboard {
            min-height: 700px;
        }
    }
</style>