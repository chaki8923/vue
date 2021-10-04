import Vue from 'vue'

Vue.component(
  'creat-task',{
    methods:{
      alert_click(){
        return alert('ううううう');
      }
    },
    template:'<input type="text" v-on:click="alert_click" class="todo-creat--input" placeholder="ADD TODO">'
  }
);

new Vue({el:'.todo-creat'});