<template>
  <div class="main_content">
    <div id="bedroom01"></div>
  </div>
</template>
<script>
  import echarts from 'echarts';
  import Vue from 'vue';
  import VueRouter from 'vue-router';
  import VueResource from 'vue-resource';

  Vue.use(VueRouter);
  Vue.use(VueResource);

  // var Data = [
  //         {value: 26, name: '学习氛围差'},
  //         {value: 21, name: '学习氛围一般'},
  //         {value: 18, name: '学习氛围很好'},
  //         {value: 12, name: '学习氛围非常好'}
  //       ];
  // var dataOption =  [];

  export default {
    name: 'chart',
    data () {
      return {
        chart: null,
        opinion: [],
        opinionData: [],
        opinionPct: [],
        // apiUrl: 'http://10.75.232.87:8083/cdn/statistics/area/ispJson?startTime=2016-11-29&endTime=2016-11-29&provId=&domain=&businessLine'
      }
    },
    ready () {
      // this.getData(); 
    },
    methods: {
      getData () {
        var _this = this;
        this.$http.get(this.apiUrl).then((data) => {
              var item = data.data.datalist.length;
               for(var i=0;i<item;i++){
                  _this.opinion.push(data.data.datalist[i].name);
                  _this.opinionData.push({name:data.data.datalist[i].name,value:data.data.datalist[i].value});
                  _this.opinionPct.push({name:data.data.datalist[i].name,percent:data.data.datalist[i].percent});
               }
               console.log(_this.opinion);
               console.log(_this.opinionData);
               this.drawPie('bedroom');
          }).catch(function(response) {
            console.log('123');
          })
      },
      drawPie (id) {
        this.chart = echarts.init(document.getElementById(id))
        this.chart.setOption({
          // title: {
          //   text: 'ISP流量统计图',
          //   left: 'center',
          //   top: 10,
          //   textStyle: {
          //     fontSize: 24,
          //     fontFamily: 'Helvetica',
          //     fontWeight: 400
          //   }
          // },
          // tooltip: {
          //   trigger: 'item',
          //   formatter: "{a} <br/>{b}: {c} ({d}%)"
          // },
          // toolbox: {
          //   feature: {
          //     saveAsImage: {},
          //     dataView: {}
          //   },
          //   right: 15,
          //   top: 10
          // },
          // legend: {
          //     orient: 'vertical',
          //     left: 5,
          //     top: 10,
          //     data: this.opinion,
          // },
          // series: [
          //   {
          //     name: 'ISP流量',
          //     type: 'pie',
          //     radius: ['50%', '70%'],
          //     center: ['50%', '60%'],
          //     avoidLabelOverlap: false,
          //     label: {
          //       normal: {
          //           show: false,
          //           position: 'center' //提示文字居中显示
          //       },
          //       emphasis: {
          //         show: true,
          //         textStyle: {
          //           fontSize: '24',
          //           fontWeight: 'bold'
          //         }
          //       }
          //     },
          //     labelLine: {
          //       normal: {
          //         show: false
          //       }
          //     },
          //     data: this.opinionData,
          //     itemStyle: {
          //       emphasis: {
          //         shadowBlur: 10,
          //         shadowOffset: 0,
          //         shadowColor: 'rgba(0, 0, 0, 0.5)'
          //       }
          //     }
          //   }
          // ]
           tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎','百度','谷歌','必应','其他']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['周一','周二','周三','周四','周五','周六','周日']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'直接访问',
            type:'bar',
            data:[320, 332, 301, 334, 390, 330, 320]
        },
        {
            name:'邮件营销',
            type:'bar',
            stack: '广告',
            data:[120, 132, 101, 134, 90, 230, 210]
        },
        {
            name:'联盟广告',
            type:'bar',
            stack: '广告',
            data:[220, 182, 191, 234, 290, 330, 310]
        },
        {
            name:'视频广告',
            type:'bar',
            stack: '广告',
            data:[150, 232, 201, 154, 190, 330, 410]
        },
        {
            name:'搜索引擎',
            type:'bar',
            data:[862, 1018, 964, 1026, 1679, 1600, 1570],
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'dashed'
                    }
                },
                data : [
                    [{type : 'min'}, {type : 'max'}]
                ]
            }
        },
        {
            name:'百度',
            type:'bar',
            barWidth : 5,
            stack: '搜索引擎',
            data:[620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
            name:'谷歌',
            type:'bar',
            stack: '搜索引擎',
            data:[120, 132, 101, 134, 290, 230, 220]
        },
        {
            name:'必应',
            type:'bar',
            stack: '搜索引擎',
            data:[60, 72, 71, 74, 190, 130, 110]
        },
        {
            name:'其他',
            type:'bar',
            stack: '搜索引擎',
            data:[62, 82, 91, 84, 109, 110, 120]
        }
    ]
        })
      }
    },
    mounted () {
      this.$nextTick(function() {
          this.getData();
          this.drawPie('bedroom01');
      })
    }
  }
</script>
<style scoped>
#bedroom01 {
  position: relative;
  left: 50%;
  margin-left: -400px;
  margin-bottom: 70px;
  width: 800px;
  height: 600px;
  border: solid #ccc 1px;
  box-shadow: 0 0 8px #ccc;
  border-radius: 10px;
}   
</style>