<template>
    <el-row :gutter="40" class="panel-group">
        <el-col :xs="12" :sm="12" :lg="6" class="card-panel-col" v-for="(item,index) in cardList" :key="index">
          <div class="card-panel" @click="handleSetLineChartData(item.emitText)">
            <div class="card-panel-icon-wrapper" :class="[item.iconClass]">
              <svg-icon :icon-class="item.icon" class-name="card-panel-icon" />
            </div>
            <div class="card-panel-description">
              <div class="card-panel-text">
                {{ item.text }}
              </div>
              <count-to :start-val="0" :end-val="item.num" :duration="2600" class="card-panel-num" />
            </div>
          </div>
        </el-col>
    </el-row>
</template>

<script>
import countTo from 'vue-count-to'
export default {
    data() {
        return {
            cardList:[
                {
                    text:'New Visits',
                    icon:'peoples',
                    num: 102400,
                    iconClass:'icon-people',
                    emitText:'newVisitis'
                },
                {
                    text:'Messages',
                    icon:'message',
                    num: 81212,
                    iconClass:'icon-message',
                    emitText:'messages'
                },
                {
                    text:'Purchases',
                    icon:'money',
                    num: 9280,
                    iconClass:'icon-money',
                    emitText:'purchases'
                },
                {
                    text:'Shoppings',
                    icon:'shopping',
                    num: 13600,
                    iconClass:'icon-shopping',
                    emitText:'shoppings'
                }

            ]
        }
    },
    components:{
        countTo
    },
    methods: {
        handleSetLineChartData(type) {
            this.$emit('handleSetLineChartData', type)
        }
    },
}
</script>

<style lang="scss" scoped>
.panel-group{
    margin-top:18px;
    .card-panel{
        cursor: pointer;
        background: #fff;
        color: #666;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 14px 26px 14px 14px;
        margin-bottom: 32px;
        .card-panel-icon-wrapper{
            transition: all 0.38s ease-out;
        }
        &:hover{
            .card-panel-icon-wrapper{
                color: #fff;
            }
            .icon-message{
                background: #36a3f7;
            }
            .icon-people{
                background:#40c9c6;
            }
            .icon-money{
                background: #f4516c;
            }
            .icon-shopping{
                background: #34bfa3;
            }
        }
        .card-panel-icon{
            font-size: 48px;
            padding:16px;
           
        }
        .icon-people{
            color: #40c9c6;
        }
        .icon-message{
            color: #36a3f7;
        }
        .icon-money{
            color: #f4516c;
        }
        .icon-shopping{
            color: #34bfa3;
        }
        .card-panel-description{
            font-weight: bold;
            .card-panel-text{
                color: rgba(0, 0, 0, .45);
                margin-bottom: 12px;
                font-size: 16px;
            }
            .card-panel-num{
                font-size: 20px;
            }
        }
     
    }
}
</style>