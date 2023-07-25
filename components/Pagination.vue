<template>
<div class="page__wrap">
    <button :class="[{'page__current': page === currentPage}, 'page']" v-for="page in paginationQuantity" :key="page" @click="$store.commit('changePage', page)">
        {{ page }}
    </button>
</div>
</template>

<script>
import {
    mapGetters,
    mapState,
} from 'vuex';
export default {
    name: 'Pagination',
    computed: {
        ...mapGetters({
            paginationQuantity: 'paginationQuantity',
        }),
        ...mapState({
            currentPage: state => state.currentPage,
        }),
    }
}
</script>

<style lang="scss" scoped>
.page__wrap {
    display: grid;
    row-gap: 10px;
    column-gap: 5px;
    grid-template-columns: repeat(20, 1fr);
}

.page {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    border: 1px solid burlywood;
    padding: 5px;
}

.page__current {
    border: 2px solid blueviolet;
}
</style>
