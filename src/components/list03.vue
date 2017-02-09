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
            tabName: '我是列表03',
            items:[
                {
                    tabName: '我是列表03甄嬛传0',
                    tabType:'我是列表03直播1',
                    tabNum: '我是列表031001'
                },
                {
                    tabName: '我是列表03甄嬛传1',
                    tabType:'我是列表03直播2',
                    tabNum: '我是列表03002'
                },
                {
                    tabName: '我是列表03d甄嬛传2',
                    tabType:'我是列表03直播3',
                    tabNum: '我是列表031003'
                },
                {
                    tabName: '我是列表03甄嬛传3',
                    tabType:'我是列表03直播4',
                    tabNum: '我是列表031004'
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