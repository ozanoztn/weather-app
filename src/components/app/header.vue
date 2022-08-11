<template>
<div class="header">  
        <i class="fa-solid fa-magnifying-glass fa-xl"></i>
        <input type="text" class="search" placeholder="Bir şehir giriniz" v-model="newCity" v-on:keyup.enter="$emit('getNewCity',setCity(newCity))">
        <button class="refresh">
            <i class="fa-solid fa-arrows-rotate fa-xl"></i>
        </button>
</div>    
</template>

<style scoped>
.header{
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
}
.search{
   padding-left: 1rem;
    border-radius: 2rem;
    width: 60%;
    height: 2rem;
    margin-left: 0.7rem;
    margin-right: 0.7rem;
}
.refresh{
    background-color: transparent;
    border: transparent;
    border-radius:999px ;
    padding: 0.5rem;
}
.refresh:hover{
    background-color:rgba(255, 255, 255,0.55);
    transition:700ms;
}
</style>

<script>
import { getInfos } from "../../mixins/getInfos";

export default{
    data(){
return{
    newCity:'',
    newWeatherInfos:[]
}
    },
    mixins:[getInfos],
    methods:{
    async setCity(city) {
            this.city = city;
           return await this.getInfos();
        }
    }

}
</script>
