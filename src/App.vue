<template>
  <div class="container">
      <phone></phone>
  </div>
</template>


<style scoped>
.container{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 961px;
position: relative;

background: linear-gradient(119.54deg, #FEE3BC 23.22%, #F39876 99.52%);
}
</style>


<script>
import phone from './components/phone.vue'
export default{
components:{
phone
}
}
</script>