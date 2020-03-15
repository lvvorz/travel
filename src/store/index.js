import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store ({
    state: {
        city: '上海'
    },
    // //由city里的list中的methods中的change传来
    // actions: {
    //     changeCity(ctx, city) {
    //         ctx.commit('changeCity', city)

    //     }
    // },

    mutations: {
        changeCity(state, city) {
        state.city = city
        }
    }
})