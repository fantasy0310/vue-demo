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
            tabName: '我是列表01',
            items:[
                {
                    tabName: 'asdasd甄嬛传0',
                    tabType:'asdasd直播1',
                    tabNum: 'asdasd1001',
                    tabMoney: 'asdasd20元'
                },
                {
                    tabName: 'asdasd甄嬛传1',
                    tabType:'asdasd直播2',
                    tabNum: 'asdasd1asdasd002',
                    tabMoney: 'asdasd30元'
                },
                {
                    tabName: 'asdasd甄嬛传2',
                    tabType:'asdasd直播3',
                    tabNum: 'asdasd1003',
                    tabMoney: '4asdasd0元'
                },
                {
                    tabName: 'asdasd甄嬛传3',
                    tabType:'asdasd直播4',
                    tabNum: 'asdasd1004',
                    tabMoney: 'asdasd50元'
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