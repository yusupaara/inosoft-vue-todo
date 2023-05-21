<template>
    <ul class="list">
        <li v-for="(item, index) in listdata" :key="index">
            {{ item.title }}<button-co class="delete" @click="deleteList(index)" text="Hapus" color="transparent" /></li>
    </ul>
</template>
<script>
export default {
    emits:["emit-delete"],
    props:{
        listdata: {
            type: Array,
            default: () => {
                return []
            }
        }
    },
    methods:{
        deleteList(index){
            this.$emit('emit-delete', index)
        }
    }
}
</script>