<template>
  <div class="dashboard-admin-container">
    <github-corner class="github-corner" />
    <panel-group @handleSetLineChartData="handleSetLineChartData" />
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <line-chart :chart-data="lineChartData" />
    </el-row>
  </div>
</template>

<script>
const lineChartData = {
  newVisitis: {
    expectedData: [100, 120, 161, 134, 105, 160, 165],
    actualData: [120, 82, 91, 154, 162, 140, 145]
  },
  messages: {
    expectedData: [200, 192, 120, 144, 160, 130, 140],
    actualData: [180, 160, 151, 106, 145, 150, 130]
  },
  purchases: {
    expectedData: [80, 100, 121, 104, 105, 90, 100],
    actualData: [120, 90, 100, 138, 142, 130, 130]
  },
  shoppings: {
    expectedData: [130, 140, 141, 142, 145, 150, 160],
    actualData: [120, 82, 91, 154, 162, 140, 130]
  }
}
import githubCorner from '@/components/githubCorner/index.vue'
import panelGroup from './components/panelGroup.vue'
import LineChart from './components/LineChart'

export default {
    data() {
        return {
            lineChartData: lineChartData.newVisitis
        }
    },
    components:{
        githubCorner,
        panelGroup,
        LineChart                                                           
    },
    methods: {
        handleSetLineChartData(type){
            this.lineChartData=lineChartData[type]
        }
    },
}
</script>

<style lang="scss" scoped>
.dashboard-admin-container{
    padding: 32px;
    background: #f0f2f5;
    height: 100%;
    position: relative;
    .github-corner{
        position: absolute;
        right: 0;
        top: 0;
    }
}
</style>