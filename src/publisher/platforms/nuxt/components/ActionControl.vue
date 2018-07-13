<template>
     <a :class="className">This is an ActionControl</a>
</template>
<script>

export default {
    props : {
        className: "Button_Standard",
    }
}
</script>
<style scoped>
    .Button_Standard {
        color: orange;
    }
</style>