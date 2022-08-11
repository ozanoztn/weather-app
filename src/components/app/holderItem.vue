<template>
<div class="itemContainer">
    <div class="leftSection">
        <i :class=icon></i> 
            <p class="itemTitle">
{{title}} 
            </p> 
    </div>
    <div class="rightSection">
        {{titleInfo}}
    </div>
</div>    
</template>

<style scoped>
.itemContainer{
    width: 85%;
background: rgba(255, 255, 255, 0.4);
border: 0.5px solid rgba(255, 255, 255, 0.3);
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    height: 3.6rem;
    border-radius: 10px;
    align-items: center;
    padding: 0rem 1.2rem 0 1.2rem;
}
.leftSection{
    display: flex;
    align-items: center;
}
.holderIcon{
    width: 30px;
    margin-right: 1rem;
    font-size: 1.8rem;
background: rgba(255, 255, 255, 0.9);
box-shadow: 0px 9px 10px -3px rgba(23, 126, 37, 0.15), 0px 0px 10px rgba(0, 0, 0, 0.07);
border-radius: 8px;
    padding: 0.5rem;
    text-align: center;
}
.itemTitle{
 font-size: 1.3rem;
 font-family: 'Inter';
 font-style: normal;
 font-weight: 400;
 line-height: 8px;
 color: #303345;
}

</style>

<script>
export default{
props:['title','icon','titleInfo']
}
</script>