export const state = () => ({
    posts: [],
    currentPost: [],
    quantityPostsPerPage: 10,
    loading: false,
    error: false,
    currentPage: 1,
    sortId: false,
})

export const mutations = {
    getData(state, data) {
        state.posts = data
    },
    showLoader(state, isLoad) {
        state.loading = isLoad
    },
    showError(state, isError) {
        state.loading = isError
    },
    changePage(state, newPage) {
        state.currentPage = newPage
    },
    sortId(state, isSort) {
        state.sortId = isSort
    },
    currentPost(state, idPost) {
        state.currentPost = state.posts.find(item => Number(item.id) === Number(idPost))
        console.log(state.currentPost)
    }
}

export const actions = {
    async nuxtServerInit({ dispatch }) {
        await dispatch('getData')
    },
    async getData(context) {
        console.log(context)
        try {
            context.commit('showLoader', true)
            let response = await fetch('https://jsonplaceholder.typicode.com/comments')
            let data = await response.json()
            console.log(data)
            context.commit('getData', data);
        } catch (e) {
            context.commit('showError', true)

        } finally {
            context.commit('showLoader', false)

        }
    },
}

export const getters = {
    paginationQuantity: (state) => {
        return Math.ceil(state.posts.length / state.quantityPostsPerPage)
    },
    getDataPage: state => page => {
        console.log(page)
        const offset = (page - 1) * state.quantityPostsPerPage
        console.log(state.posts.slice(offset, offset + state.quantityPostsPerPage))
        return state.posts.slice(offset, offset + state.quantityPostsPerPage).sort((a, b) => {
            if (!state.sortId)
                return 1;
            if (state.sortId)
                return -1;
            return 0;
        });
    },
}

