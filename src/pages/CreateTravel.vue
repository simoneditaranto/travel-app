<script>

import { store } from '../store';
import { countries } from 'countries-list';

export default {

    name: 'CreateTravel',

    data() {

        return {

            store,

            // variabile che mi fornisce tutti gli stati del mondo, presi dalla libreria
            countries: countries,

            // state: '',
            // dateStart: '',
            // dateEnd: '',

            actualIndex: 0,
            isNewTrip: false,
            isNewDay: false,

            // acutalDate: '',

        }

    },

    methods: {

        // definisco il metodo che aggiunge un nuovo viaggio
        addNewTrip() {

            // evito che la pagina si ricarichi all'invio del form
            const myForm = document.getElementById('myForm');

            myForm.addEventListener('submit', function(event) {
                event.preventDefault();

                this.reset();
            });

            console.log('submit premuto');
            const newTrip = {
                tripPlace : document.getElementById('states').value,
                tripDateStart : document.getElementById('date-start').value,
                tripDateEnd : document.getElementById('date-end').value,
            };
            store.trips.push(newTrip);
            this.actualIndex = this.store.trips.indexOf(newTrip);
            console.log(this.actualIndex);
            console.log(store.trips);
            this.isNewTrip = true;
            // console.log(this.countries);
            // console.log(this.acutalDate);

            
        },

        addNewTripDay() {

            // evito che la pagina si ricarichi all'invio del form
            const myForm = document.getElementById('myFormTrip');

            myForm.addEventListener('submit', function(event) {
                event.preventDefault();

                this.reset();
            });

            console.log('submit premuto');
            const newTripDay = {
                tripDate : document.getElementById('single-day').value,
                tripPlace : document.getElementById('city-name').value,
                // tripDescription : document.getElementById('description').value,
            };
            store.days.push(newTripDay);
            // this.actualIndex = this.store.trips.indexOf(newTrip);
            // console.log(this.actualIndex);
            console.log(store.days);
            // this.isNewTrip = true;

            this.isNewDay = true;

        },
        
        addNewToDo() {

            // evito che la pagina si ricarichi all'invio del form
            const myForm = document.getElementById('form-to-do');

            myForm.addEventListener('submit', function(event) {
                event.preventDefault();

                this.reset();
            });

            console.log('submit premuto');
            const toDo = document.getElementById('to-do').value;

            store.stages.push(toDo);
            console.log(store.stages);

            

        },

        deleteToDo(index) {
            store.stages.splice(index, 1);
        },

        getCurrentDate() {

            const date = new Date();
            const year = date.getFullYear();
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');

            return `${year}-${month}-${day}`;
            
        },

        // getStartDate() {

        //     console.log(document.getElementById('date-start'));
        //     // return document.getElementById('date-start').value;

        // },

    },

    created() {

        // this.getCurrentDate();

    },

}

</script>

<template>

    <div class="container">
        
        <form id="myForm">

            <label for="states">Stato</label>
            <select id="states" name="states">
            <option :value="currentState.name" v-for="currentState in countries">{{ currentState.name }}</option>
            </select>
            
            <br>

            <label for="date-start">Data inizio:</label>
            <input type="date" id="date-start" name="date-start" :value="getCurrentDate()" :min="getCurrentDate()"/>

            <label for="date-end">Data fine:</label>
            <input type="date" id="date-end" name="date-end"
            :value="getCurrentDate()" :min="getCurrentDate()"/>
            <!-- :value="getStartDate()" :min="getStartDate()" -->

            <input type="submit" value="Submit" @click="addNewTrip()">
        </form>

        <div class="new-trip" v-if="isNewTrip">
            <div class="trip-state">{{ store.trips[actualIndex].tripPlace }}</div>
            <div class="trip-start">{{ store.trips[actualIndex].tripDateStart }}</div>
            <div class="trip-end">{{ store.trips[actualIndex].tripDateEnd }}</div>

            <form id="myFormTrip">

                <!-- <label for="day">Data</label>
                <input type="text" id="day"> -->
                <label for="single-day">Giorno:</label>
                <input type="date" id="single-day" name="single-day" :value="store.trips[actualIndex].tripDateStart" :min="store.trips[actualIndex].tripDateStart" :max="store.trips[actualIndex].tripDateEnd"/>
                <br>
                <label for="city-name">Città</label>
                <input type="text" id="city-name">
                <br>

                <input type="submit" value="Submit" @click="addNewTripDay()">

            </form>

        </div>

        <div class="to-do" v-if="isNewDay">

            <form id="form-to-do">
                <label for="to-do">Cose da fare:</label>
                <input type="text" id="to-do">

                <input type="submit" value="Submit" @click="addNewToDo()">
            </form>

            <ul>
                <li v-for="(currentToDo, index) in store.stages">{{ currentToDo }}<span @click="deleteToDo(index)">  x</span></li>
                
            </ul>

        </div>

    </div>

    <router-link :to="{ name: 'home' }" class="nav-link">
        Torna alla home
    </router-link>

</template>

<style lang="scss">

.container {

    background-color: rgba(0, 255, 0, .3);

    .new-trip {
        background-color: bisque;
    }

    .to-do {
        background-color: beige;

        ul {
            li {
                span {
                    color: red;
                }
            }
        }
    }

}

</style>