<template>

    <div class="phone">
    
    <header-vue @get-new-city="setNewCityDatas"/>
    <title-vue :resolvedAddress="weatherInfos.resolvedAddress" :date="importantDatas.date" />
    <row-vue :date="importantDatas.date" :days="importantDatas.days" />
    <row-holder-vue :date="importantDatas.date" :days="importantDatas.days"/>
    <weathers-row-vue :date="importantDatas.date" :days="importantDatas.days"/>
    
    </div>
</template>

<style scoped>
.phone{
    background: rgba(255, 255, 255, 0.29);
    border: 6px solid rgba(255, 255, 255, 0.2);
    box-shadow: 30px 30px 40px -10px rgba(0, 0, 0, 0.15);
    backdrop-filter: blur(10px);
    width: 23rem;
    height:52rem ;
    border-radius: 2rem;
    padding: 0.5rem;
    font-family: 'Inter';
}
</style>

<script>
import headerVue from './app/header.vue'
import rowVue from './app/row.vue'
import rowHolderVue from './app/rowHolder.vue'
import weathersRowVue from './app/weathersRow.vue'
import titleVue from './app/title.vue'

import { getInfos } from '../mixins/getInfos'
import {setDate} from '../mixins/setDate'

export default{
    data(){
return{
weatherInfos:[],

importantDatas:{
    resolvedAddress:'',
    date:[],
    days:[]
},


}
    },
    mixins:[getInfos,setDate]
    ,
    components:{
headerVue,
titleVue,
rowVue,
rowHolderVue,
weathersRowVue
    },
methods:{
    sendDatasToRow(){
this.importantDatas.days=this.weatherInfos.days;
    },
async    setNewCityDatas(e){
await e.then((data)=>this.weatherInfos=data);
this.sendDatasToRow();
    }
},
async created(){
await this.getInfos().
then((data)=>this.weatherInfos=data);

this.importantDatas.date=this.setDate();

this.sendDatasToRow();

},
}
</script>