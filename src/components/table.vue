<template id="table">
<div class="table">
    <table class="mt-20 table-bill text-left">
        <thead>
            <tr>                                                       
                <th>{{ info.length | filterLen }}</th>
                <th>{{ info[0].tabName | filterName }}</th>
                <th>{{ info[0].tabType | filterType }}</th>
                <th>{{ info[0].tabNum | filterNum }}</th>
                <th>{{ info[0].tabMoney | filterMoney }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item,index) in info"  >
                <td>{{ index }} </td>
                <td>{{ item.tabName }}</td>
                <td>{{ item.tabType }}</td>
                <td>{{ item.tabNum }}</td>
                <td>{{ item.tabMoney }}</td>
                <td class="left-line"></td>
            </tr>
        </tbody>
    </table>    
</div>
</template>
<script>
export default{
    props: ["info"],
    filters: {  
        filterLen: function (value) {  
            if( value ){
               return " 序号 " 
            }
        }, 
        filterName: function (value) {  
            if( value ){
               return " 视频名称 " 
            }
        }, 
        filterType: function (value) { 
            if( value ){ 
               return " 视频类型 " 
            }
        }, 
        filterNum: function (value) {  
            if( value ){
              return " 视频ID " 
            }
        }, 
        filterMoney: function (value) {  
            if( value ){
               return " 套餐价格 " 
            }
        }
    },  
    data () {
        return{
            items: [
                {
                    tabName: '甄嬛传0',
                    tabType: '直播1',
                    tabNum: '1001',
                    tabMoney: '20元'
                },
                {
                    tabName: '甄嬛传1',
                    tabType: '直播2',
                    tabNum: '1002',
                    tabMoney: '30元'
                },
                {
                    tabName: '甄嬛传2',
                    tabType: '直播3',
                    tabNum: '1003',
                    tabMoney: '40元'
                },
                {
                    tabName: '甄嬛传3',
                    tabType: '直播4',
                    tabNum: '1004',
                    tabMoney: '50元'
                }
            ]
        }
    }
}
</script>
<style  scoped>
.table-bill {
    border: medium none;
    border-collapse: collapse;
    padding: 0;
    position: relative;
    width: 100%;
}
.table-bill thead {
    background: #f6f7f9 none repeat scroll 0 0;
    color: #73737c;
    line-height: 40px;
}
.table-bill td, .table-bill th {
    font-weight: 400;
    padding: 0 10px;
}
.table-bill tbody tr {
    border-bottom: 1px solid #ededf1;
    height: 50px;
    line-height: 50px;
    padding-left: 4px;
    position: relative;
}
.table-bill tbody tr .left-line {
    border-left: 2px solid #208ac3;
    display: none;
    height: 50px;
    left: 0;
    position: absolute;
}
.table-bill tbody tr:hover {
    background: #f6f7f9 none repeat scroll 0 0;
    box-sizing: border-box;
    cursor: pointer;
}
.table-bill tbody tr:hover .left-line {
    display: block;
}
</style>