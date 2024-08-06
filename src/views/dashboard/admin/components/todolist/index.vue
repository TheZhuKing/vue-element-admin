<template>
    <section class="todoapp">
        <header class="header">
            <input class="new-todo" autocomplete="off" placeholder="Todo List" @keyup.enter="addTodo"/>
        </header>
        <section v-show="todos.length" class="main">
            <input id="toggle-all" :checked="allChecked" class="toggle-all" type="checkbox" @change="toggleAll({ done: !allChecked })">
            <label for="toggle-all" />
            <ul class="todo-list">
              <todo
                v-for="(todo, index) in filteredTodos"
                :key="index"
                :todo="todo"
                @toggleTodo="toggleTodo"
              />
            </ul>
          </section>
        <footer class="footer">

        </footer>
    
    </section>
</template>

<script>
const filters = {
  all: todos => todos,
  active: todos => todos.filter(todo => !todo.done),
  completed: todos => todos.filter(todo => todo.done)
}
const defalutList = [
  { text: 'star this repository', done: false },
  { text: 'fork this repository', done: false },
  { text: 'follow author', done: false },
  { text: 'vue-element-admin', done: true },
  { text: 'vue', done: true },
  { text: 'element-ui', done: true },
  { text: 'axios', done: true },
  { text: 'webpack', done: true }
]
import todo from './todo.vue'
export default {
    components:{
        todo
    },

    data(){
        return{
            allChecked:false,
            visibility:'all',
            todos:defalutList
        }
    },
    methods:{
        toggleAll({done}){
            this.todos.forEach(todo => {
                todo.done = done
                this.setLocalStorage()
            })
        },
        toggleTodo(val) {
            val.done = !val.done
            // this.setLocalStorage()
        },
    },
    computed:{
        filteredTodos() {
            return filters[this.visibility](this.todos)
        },
       
    }
}
</script>

<style lang="scss">
  @import './index.scss';
</style>