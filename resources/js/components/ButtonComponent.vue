<template>
    <button type="button" @click="functionClick" :class="color">{{ text }}</button>
</template>

<script>
export default {
    emits:["emit-click"],
    props:{
        text: {
            type: String,
            default: ""
        },
        color: {
            type: String,
            default: ""
        }
    },
    methods:{
        functionClick(){
            this.$emit('emit-click')
        }
    }
}
</script>

<style scoped>
.transparent {
    font-size: 11px;
    color: lightcoral;
    background: transparent;
}
.red{
    background: lightcoral;
    border: 1px solid lightcoral;
}
</style>