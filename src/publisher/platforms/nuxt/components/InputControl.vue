<template>
     <input type="text" :class="className" placeholder="Please insert some text" />
</template>
<script>

export default {
    props : {
        className: "Input_Standard",
    }
}
</script>
<style scoped>
    .Input_Standard {
        border: 1px solid orange;
    }
</style>