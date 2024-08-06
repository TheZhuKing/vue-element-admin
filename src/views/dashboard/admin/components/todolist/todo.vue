<template>
    <li :class="{completed:todo.done,editing:editing}" class="todo" >
        <div class="view">
            <input type="checkbox" :checked="todo.done" class="toggle" @change="toggleTodo(todo)">
            <label v-text="todo.text" @dblclick="editing = true"></label>
        </div>
        <input
        v-show="editing"
        :value="todo.text" 
        class="edit"
        @keyup.enter="doneEdit"
        @keyup.esc="cancelEdit"
        @blur="doneEdit"
      >1111
    </li>
</template>

<script>
const STORAGE_KEY = 'todos'
export default {
    props: {
        todo: {
            type: Object,
            default: function() {
                return {}
            }
        }
    },
    data() {
        return {
            editing:false
        }
    },
    methods:{
        toggleTodo(todo){
            // todo.done = !todo.done
            this.$emit('toggleTodo', todo)
        },
        setLocalStorage() {
            window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos))
        },
    }
}
</script>

<style>

</style>