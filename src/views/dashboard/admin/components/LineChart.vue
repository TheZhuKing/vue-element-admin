<template>
    <BaseChart
      :dataTrans="dataTrans"
      :chart-data="chartData"
      :options="options"
    />
        
</template>
<script>
export default {
    props:['chartData'],
    data() {
        return {
        options:{
          xAxis: {
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            boundaryGap: false,
            axisTick: {
              show: false
            }
          },
          grid: {
            left: 10,
            right: 10,
            bottom: 20,
            top: 30,
            containLabel: true
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {
              type: 'cross'
            },
            padding: [5, 10]
          },
          yAxis: {
            axisTick: {
              show: false
            }
          },
          legend: {
            data: ['expected', 'actual']
          },
          series: [{
            name: 'expected', itemStyle: {
              normal: {
                color: '#FF005A',
                lineStyle: {
                  color: '#FF005A',
                  width: 2
                }
              }
            },
            smooth: true,
            type: 'line',
            data: [],
            animationDuration: 2800,
            animationEasing: 'cubicInOut'
          },
          {
            name: 'actual',
            smooth: true,
            type: 'line',
            itemStyle: {
              normal: {
                color: '#3888fa',
                lineStyle: {
                  color: '#3888fa',
                  width: 2
                },
                areaStyle: {
                  color: '#f3f8ff'
                }
              }
            },
            data: [],
            animationDuration: 2800,
            animationEasing: 'quadraticOut'
          }]
        }
        }
    },
    methods:{
        dataTrans(o,data){
            let arr=Object.entries(data)
            for(let index in arr){
                o.series[index].data=arr[index][1]
            }
            console.log(o,'----o');
            return o
        }
    }
}
</script>

<style>

</style>