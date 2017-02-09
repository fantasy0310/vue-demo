<template>
  <div class="main_content">
    <div id="bedroom"></div>
  </div>
</template>
<script>
  import echarts from 'echarts';
  import Vue from 'vue';
  import VueRouter from 'vue-router';
  import VueResource from 'vue-resource';

  Vue.use(VueRouter);
  Vue.use(VueResource);

  var Data = [
      {value:335, name:'直接访问'},
      {value:310, name:'邮件营销'},
      {value:234, name:'联盟广告'},
      {value:135, name:'视频广告'},
      {value:1548, name:'搜索引擎'}
  ];
  var dataOption =  ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎'];

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
          tooltip: {
              trigger: 'item',
              formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          legend: {
              orient: 'vertical',
              x: 'left',
              data: dataOption
          },
          series: [
              {
                  name:'访问来源',
                  type:'pie',
                  radius: ['50%', '70%'],
                  avoidLabelOverlap: false,
                  label: {
                      normal: {
                          show: false,
                          position: 'center'
                      },
                      emphasis: {
                          show: true,
                          textStyle: {
                              fontSize: '30',
                              fontWeight: 'bold'
                          }
                      }
                  },
                  labelLine: {
                      normal: {
                          show: false
                      }
                  },
                  data: Data
              }
          ]
        })
      }
    },
    mounted () {
      this.$nextTick(function() {
          this.getData();
          this.drawPie('bedroom');
      })
    }
  }
</script>
<style scoped>
#bedroom {
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