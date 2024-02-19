<script>
export default {
    functional:true,
    props:{
        icon:{
            type:String,
            default:''
        },
        title:{
            type:String,
            default:''
        },
    },
    render(h,context){
        let {icon,title}=context.props
        const vNode=[]
        if(icon){
            if(icon.includes('el-icon')){
                vNode.push(<i class={[icon,'sub-el-icon']}/>)
            }else{
                vNode.push(<svg-icon icon-class={icon}/>)
            }
        }
        if(title){
            vNode.push(<span>{(title)}</span>)
        }
        return vNode

    }

}
</script>

<style>

</style>