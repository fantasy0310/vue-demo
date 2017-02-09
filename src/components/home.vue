<template>
<div class="home">
    <div class="bd" style="height: 100%;">
        <div class="weui_tab">
            <ul class="weui_navbar">
                <li class="navbar" 
                    v-for="(tab,index) in tabs"
                    :class="{ 'active':index===selected }"
                    @click="choose(index)">
                    {{tab.tabName}}</li>
            </ul>
            <div class="weui_tab_bd">
                <component :is="currentView" transition="fade" transition-mode="out-in" keep-alive></component>  <!--keep-alive 保持不变-->
            </div>
        </div>
    </div>      
</div>
</template>
<script>
import  tab_1 from './chart.vue';
import  tab_2 from './chartLine.vue';
export default{
    data(){
        return{
            tabs:[
                {tabName: '饼图'},
                {tabName: '折线图'}
            ],
            selected:0,
            currentView:'view_0'
        }
    },
    components:{
        'view_0':tab_1,
        'view_1':tab_2
    },
    methods:{
        choose(index) {
            this.selected=index;
            this.currentView='view_'+index;
        }
    }
}
</script>
<style  scoped>
ul,li{
    list-style: none;
}
.weui_navbar{
     width: 600px;
     margin: -30px auto 0;
     border-bottom:2px solid #ccc; 
     overflow: hidden;
     position: relative;
}
.weui_navbar li{
    width: 50%;
    float: left;
    cursor: pointer;
}
.navbar{
    font-size: 20px;
}
.active{
    font-size: 30px;
    font-weight: 700;
}
/*切换动画*/
.fade-transition {
    transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave {
    opacity: 0;
}
</style>