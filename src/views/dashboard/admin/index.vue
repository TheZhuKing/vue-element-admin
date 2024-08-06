<template>
  <div class="dashboard-admin-container">
    <github-corner class="github-corner" />
    <panel-group @handleSetLineChartData="handleSetLineChartData" />
    <el-row style="background:#fff;padding:16px 16px 0;margin-bottom:32px;">
        <line-chart :chart-data="lineChartData" />
    </el-row>
    <el-row :gutter="32">
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <!-- 雷达图 -->
          <BaseChart
          :dataTrans="raddarChart_dataTrans"
          :chart-data="raddarChart_data"
          :options="raddarChart_style"
        />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <!--  -->
          <BaseChart
          :dataTrans="PieChart_dataTrans"
          :chart-data="PieChart_data"
          :options="PieChart_style"
        />
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <div class="chart-wrapper">
          <BaseChart
          :dataTrans="barChart_dataTrans"
          :chart-data="barChart_data"
          :options="barChart_style"
        />
        </div>
      </el-col>
    </el-row>
    <el-row :gutter="8">
      <el-col :xs="{span: 24}" :sm="{span: 24}" :md="{span: 24}" :lg="{span: 12}" :xl="{span: 12}" style="padding-right:8px;margin-bottom:30px;">
        <transaction-table />
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <!-- <todo-list /> -->
      </el-col>
      <el-col :xs="{span: 24}" :sm="{span: 12}" :md="{span: 12}" :lg="{span: 6}" :xl="{span: 6}" style="margin-bottom:30px;">
        <!-- <box-card /> -->
      </el-col>
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
import transactionTable from './components/transactionTable.vue'
// import todoList from './components/todolist/index.vue'
import {
  raddarChart_data,
  raddarChart_style,
  raddarChart_dataTrans,
  PieChart_data,
  PieChart_style,
  PieChart_dataTrans,
  barChart_data,
  barChart_style,
  barChart_dataTrans,
} from './components/chart'

export default {
    data() {
        return {
          raddarChart_data,
          raddarChart_style,
          raddarChart_dataTrans,
          PieChart_data,
          PieChart_style,
          PieChart_dataTrans,
          barChart_data,
          barChart_style,
          barChart_dataTrans,
          lineChartData: lineChartData.newVisitis
        }
    },
    components:{
        githubCorner,
        panelGroup,
        LineChart,                                                           
        transactionTable,
        // todoList
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
    .chart-wrapper {
      background: #fff;
      padding: 16px 16px 0;
      margin-bottom: 32px;
    }
}
</style>