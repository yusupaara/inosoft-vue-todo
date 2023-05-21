<template>
    <form class="form">
        <input type="text" v-model="inputform">
        <button-co @click="reset" text="Reset" color="red" />
        <button-co @click="addList" text="Submit" />
    </form>
</template>

<script>
export default {
    emit:["emit-submit"],
    data:function(){
        return {
            inputform: ''
        }
    },
    methods:{
        addList(){
            this.$emit("emit-submit", this.inputform)
            this.reset()
        },
        reset(){
            this.inputform = ''
        }
    }
}
</script>