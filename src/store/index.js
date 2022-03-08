import { createApp } from 'vue'
import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
    state() {
        return {
            showpageloading: false,
            isFullscreen: false,
            buycarts: []
        }
    },
    mutations: {
        setshowloading(state, show) {
            state.showpageloading = show
        },
        setFullscreen(state, payload) {
            state.isFullscreen = payload
        },
        addBuycarts(state, payload) {
            state.buycarts.push(payload);
        },
        addBuycartsNum(state, payload) {
            state.buycarts[payload].num++
        },
        minusBuycartsNum(state, payload) {
            state.buycarts[payload].num--
            if (state.buycarts[payload].num == 0) {
                state.buycarts.splice(payload, 1)
            }
        },
    },
    getters: {
        totalPrice(state) {
            let toprice = state.buycarts.reduce((pre, item) => {
                return pre + item.price * item.num
            }, 0)
            return toprice
        }
    }
})

export default store
