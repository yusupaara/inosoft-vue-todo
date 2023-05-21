import axios from "axios";
import { createApp, createStore } from "vuex";

export default createStore({
    state: {
        list: [
            // { title: 'menyapu' },
            // { title: 'cuci piring' },
            // { title: 'pel' },
        ],
    },
    getters: {
        getData(state){
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
        getList (context){
            let url = "api/getAllData"
            axios.get(url).then((response) => {
                context.commit("UPDATE_TODO", response.data)
            })
        }
    },
    mutations: {
        ADD_TODO (state, payload){
            state.list.push(payload)
        },
        DELETE_TODO (state, payload){
            state.list.splice(payload, 1)
        },
        UPDATE_TODO (state, payload){
            state.list = [...payload]
        }
    }
})