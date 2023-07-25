<template>
<div class='main__wrap'>
    <div>
        <span class="name">Id</span>: {{ currentPost.id}}
    </div>
    <div>
      <span class="name">Name</span>: {{ currentPost.name}}
    </div>
    <div>
      <span class="name">Text</span>: {{ currentPost.body}}
    </div>
    <div>
      <span class="name">Email</span>: {{ currentPost.email}}
    </div>
</div>
</template>

<script>
import {
    mapGetters,
    mapState,
} from 'vuex';
export default {
    name: 'currenPost',
    computed: {
        ...mapState({
            currentPost: state => state.currentPost,
        }),
    },

    mounted() {
        console.log(this.$route.params.id)
        this.$store.commit('currentPost', this.$route.params.id)
    }
}
</script>

<style lang="scss" scoped>
.main__wrap {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 50px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 100px;
    .name {
      font-weight: bold;
    }
}

</style>
