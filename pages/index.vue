<template>
<div class='main__wrap'>
    <div class="loading" v-if="loading">Загрузка...</div>
    <div class="error" v-if="error">Что-то пошло не так, повторите позже...</div>
    <table v-if="!loading || !error" class='posts__wrap'>
        <thead class='table__header'>
            <tr>
                <th @click="$store.commit('sortId', !isSortedId)">
                    <button>
                        ID
                    </button>
                </th>
                <th>Name</th>
                <th>Email</th>
            </tr>
        </thead>
        <tbody>

            <tr @click="$router.push(`/posts/${post.id}`)" class='post' v-for="post in postsPerPage" :key="post.id">
                <td >{{ post.id }}</td>
                <td>{{ post.name }}</td>
                <td>{{ post.email }}</td>
            </tr>

        </tbody>
    </table>
    <Pagination />
</div>
</template>

<script>
import Pagination from '../components/Pagination.vue'
import {
    mapState,
    mapGetters
} from 'vuex';
export default {
    components: {
        Pagination
    },
    name: 'IndexPage',
    data() {
        return {
            quantityPostsPerPage: 10,
        }
    },

    computed: {
        ...mapState({
            error: state => state.error,
            loading: state => state.loading,
            page: state => state.currentPage,
            isSortedId: state => state.sortId,

        }),
        postsPerPage() {
            return this.$store.getters.getDataPage(this.page)
        },

    },

    mounted() {
        this.$store.dispatch('getData')
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

    .loading, .error {
        margin-left: auto;
        margin-right: auto;
    }
}

.posts__wrap {
    margin: auto;
    padding-left: 50px;
    padding-right: 50px;
}
</style>
