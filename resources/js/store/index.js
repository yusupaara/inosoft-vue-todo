import { createApp, createStore } from "vuex";

export default createStore({
    state: {
        list: [
            { title: 'menyapu' },
            { title: 'cuci piring' },
            { title: 'pel' },
        ],
    },
    getters: {
        getToDo(state){
            return state.list;
        }
    },
    actions: {
        addList (context, payload){
            context.commit("ADD_TODO", payload)
        },
        deleteList (context, payload){
            context.commit("DELETE_TODO", payload)
        },
    },
    mutations: {
        ADD_TODO (state, payload){
            state.list.push(payload)
        },
        DELETE_TODO (state, payload){
            state.list.splice(payload, 1)
        }
    }
})