<template>
    <div class="holderContainer">
<holder-item-vue title="Rainfall" icon='fa-solid fa-umbrella holderIcon' :titleInfo='datas.rainFall+" cm"'/>
<holder-item-vue title="Wind" icon="fa-solid fa-wind holderIcon" :titleInfo='datas.wind'/>
<holder-item-vue title="Humidity" icon="fa-solid fa-droplet holderIcon" :titleInfo='"%"+datas.humidity'/>
    </div>
</template>

<style scoped>
.holderContainer{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
}
</style>

<script>
import holderItemVue from './holderItem.vue'
import { updateDatas } from '../../mixins/updateDatas'
export default{
    data(){
        return{
component:'rowHolder',
datas:{
    rainFall:'',
    wind:'',
    humidity:''
}
        }
    },
    mixins:[updateDatas],
    components:{
holderItemVue
    },
    props:['date','days'],
    updated(){
        this.updateTodaysDatas();
    }
}
</script>