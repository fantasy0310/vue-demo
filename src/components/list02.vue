<template>
<div>
    <h1>{{ tabName }}</h1> 
    <infoList v-bind:info="items"></infoList>
</div>
</template>
<script>
import  infoList from './table.vue';
export default{
    data(){
        return{
            tabName: '我是列表02',
            items:[
                {
                    tabName: '我是列表02甄嬛传0',
                    tabNum: '我是列表021001'
                },
                {
                    tabName: '我是列表02甄嬛传1',
                    tabNum: '我是列表02002'
                },
                {
                    tabName: '我是列表02d甄嬛传2',
                    tabNum: '我是列表021003'
                },
                {
                    tabName: '我是列表02甄嬛传3',
                    tabNum: '我是列表021004'
                }
            ]
        }
    },
    components: {
       infoList,
    }
}
</script>
<style  scoped>
</style>