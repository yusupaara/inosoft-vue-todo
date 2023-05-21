<template>
    <div class="container">
    <h1 class="title">To-Do</h1>
    <input-form @emit-submit="addList" />
    <list :listdata="list" @emit-delete="deleteList" />
</div>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
    data:function(){
        return {
            // list: [
            //     { title: 'menyapu' },
            //     { title: 'cuci piring' },
            //     { title: 'pel' },
            // ],
            // input: ''
        }
    },
    computed:{
        ...mapGetters({
            list: 'getToDo'
        })
    },
    mounted(){
        console.log('Component mounted.')
    },
    methods:{
        addList(datainput){
            let newList = {
                title: datainput,
            }
            // this.list.push(newList)
            this.$store.dispatch('addList', newList)
        },
        deleteList(index){
            // this.list.splice(index, 1)
            this.$store.dispatch('deleteList', index)
        }
    }
}
</script>