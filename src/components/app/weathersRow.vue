<template>
    <div class="rowContainer">
        <div class="daySelect">
            <button class="dayButton" v-if="!today" v-on:click="()=>{selectedDay--;updateWeatherConditionsOfTheDays();}">{{button.back}}</button>
    <h3 v-if="!today">{{days[selectedDay].datetime}}</h3>
    <h3 v-if="today">Today</h3>
            <button class="dayButton" v-if="days[selectedDay]!=days[days.length-1]" v-on:click="()=>{selectedDay++;updateWeatherConditionsOfTheDays();}">{{button.next}}</button>
        </div>

<weather-of-day-vue :days='this.days[this.selectedDay]'/>

    </div>
</template>

<style scoped>
.rowContainer{
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
}
.daySelect{
        display: flex;
    justify-content: center;
    align-items: center;
}

.dayButton{
    font-size: 1.5rem;
    width: 2.5rem;
    height: 2.5rem;
    background-color:transparent;
    border-radius: 999px;
    border-color: transparent;;
}
.dayButton:hover{
    background-color:rgba(255, 255, 255,0.55);
    transition:700ms;
}

</style>

<script>
import weatherOfDayVue from './weatherOfDay.vue'

export default{
    data(){
        return{
today:true,
selectedDay:0,
button:{
    next:'>',
    back:'<'
},
        }
    },

    components:{
weatherOfDayVue
    },
    props:['date','days'],
methods:{
updateWeatherConditionsOfTheDays(){
this.today= (this.date[0]==this.days[this.selectedDay].datetime) ? true:false
}
},

    updated(){
        this.updateWeatherConditionsOfTheDays();
    }
}
</script>