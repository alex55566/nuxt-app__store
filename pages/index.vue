<template>
   <ul>
        <li v-for="fruit in fruits">
            {{ fruit }}
        </li>
    </ul>
</template>

<script>
export default {
  name: 'IndexPage',

    computed: {
        fruits() {
            return this.$store.state.fruits
        },
    },

}
</script>

<style scoped lang="scss">
.test {
  background-color: green
}
</style>
