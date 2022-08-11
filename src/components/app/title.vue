<template>
    <div class="title">
<h2 class="titleText">{{resolvedAddress}}</h2>
<h2 class="date">{{date[0]}} <br> {{date[1]}}</h2>
    </div>
</template>

<style scoped>
.title{
    display: flex;
    flex-direction: column;
    padding-left:25px ;
    margin-top: 1.5rem;
}

.titleText{
    font-size: 32px;
    margin: 0 0 0 0;
}

.date{
    margin-top:1rem ;
    font-size: 16px;
    color: #9A938C;
}
</style>

<script>
export default{
    props:
        [
'resolvedAddress',
'date'
        ]
}
</script>