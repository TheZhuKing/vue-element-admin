<template>
  <div v-if="!item.hidden">
    <template v-if="hasOneShowingChild(item.children,item)&&(!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
        <app-link v-if="onlyOneChild.meta" :to="resolvePath(onlyOneChild.path)">
            <el-menu-item>
                <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" />
            </el-menu-item>
        </app-link>
        
    </template>
    <el-submenu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
        <template slot="title">
            <item v-if="item.meta" :icon="item.meta && item.meta.icon" :title="item.meta.title" />
        </template>
        <sidebar-item
        v-for="child in item.children"
        :key="child.path"
        :is-nest="true"
        :item="child"
        :base-path="resolvePath(child.path)"
        class="nest-menu"
      />

    </el-submenu>

  </div>
</template>

<script>
import path from 'path'
import Item from './Item'
import AppLink from './Link'
import { isExternal } from '@/utils/validate'
export default {
    name: 'SidebarItem',
    components:{
        Item,
        AppLink
    },
    data() {
        return {
            onlyOneChild:''
        }
    },
    props:{
        item:{
            type:Object,
            default:{}
        },
        basePath:{
            type:String,
            default:''
        }
    },
    methods:{
        hasOneShowingChild(children=[],parent){
            let onlyOneChild=children.filter(item=>{
                 if(item.hidden){
                    return false
                 }else{
                    this.onlyOneChild=item
                    return true
                 }
            })
            if(onlyOneChild.length == 1){
                return true
            }
            if(onlyOneChild.length == 0){
                this.onlyOneChild={...parent,path:'',noShowingChildren:true}
                return true
            }
            return false
        },
        resolvePath(routePath) {
            if (isExternal(routePath)) {
                return routePath
            }
            if (isExternal(this.basePath)) {
                return this.basePath
            }
            return path.resolve(this.basePath, routePath)
        }
    }

}
</script>

<style>

</style>