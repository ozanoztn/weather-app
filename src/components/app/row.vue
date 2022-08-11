<template>
    <div class="rowContainer">
        <div class="temperature">
            <p class="temperatureRate">{{data.temperature}}<span class="celcius">°C</span></p>
       <p class="weather">{{data.weather}}</p>
       </div>
    </div>
</template>


<style scoped>
.rowContainer{
display: flex;
justify-content: center;
}

.fa-solid{
    font-size: 6rem;
    display: flex;
    align-items: center;
    height: 10rem;
}

.temperature{
    margin-left: 1.3rem;
    font-size: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.weather{
margin: 0;
font-size: 1.5rem;
text-align: center;
}

.temperatureRate{
    font-size: 5rem;
    display: flex;
    justify-content: center;
    align-self:center;
    margin: 0;
    font-weight: 700;
    padding-left: 1.7rem;
}

.celcius{
    font-size: 1.5rem;
    padding-top: 0.3rem;
}

</style>

<script>
import {updateDatas} from '../../mixins/updateDatas'
export default{
    data(){
        return{
            component:'row',
            data:{
temperature:'',
weather:''
            }
        }
    },
    mixins:[updateDatas],
    props:['date','days'],
updated(){
this.updateTodaysDatas();
}
}
</script>