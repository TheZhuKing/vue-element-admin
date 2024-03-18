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
import githubCorner from '@/components/githubCorner/index.vue'
import panelGroup from './components/panelGroup.vue'
import LineChart from './components/LineChart'

export default {
    data() {
        return {
            
        }
    },
    components:{
        githubCorner,
        panelGroup,
        LineChart                                                           
    },
    methods: {
        handleSetLineChartData(){

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