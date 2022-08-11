<template>
    <div class="daysContainer">
        <div class="dayContainer" v-for="hour in hours" :key="hour.hour">
            <h2 class="hour">{{hour.datetime.slice(0,5)}}</h2>
            <h2 class="temperature">{{hour.temp}} <span class="celcius">°C</span></h2>
        </div>
    </div>

</template>

<style scoped>
.daysContainer{
width: 100%;
display: relative;
overflow: auto;
white-space: nowrap;
}
.dayContainer{
background: rgba(255, 255, 255, 0.7);
box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.08);
border-radius: 20px;
padding:1.1rem;
display: inline-flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 7rem;
margin-right:0.7rem ;
margin-left:0.7rem ;

}
.hour{
font-weight: 400;
line-height: 8px;
font-size: 1.2rem;
}
</style>

<script>
export default{
        updated(){
                this.hours=this.days.hours
        },
        props:['days'],
data(){
    return{
hours:{}
    }
}
}
</script>