import {
    ADD_COUNTER,
    ADD_TO_CART,
    CHANGE_CHECKED,
    CHECK_ALL
} from './mutations-type'




export default {
    // mutations唯一目的是修改state的状态
    // 尽可能完成的事件比较单一
    [ADD_COUNTER](state, payload) {
        payload.count++
    },
    [ADD_TO_CART](state, payload) {
        payload.checked = true
        state.cartList.push(payload)
    },
    [CHANGE_CHECKED](state, payload) {
        payload.checked = !payload.checked
    },
    [CHECK_ALL](state, payload) {
        payload.item.checked = payload.check
    }
}

// export default {
//     // mutations唯一目的是修改state的状态
//     // 尽可能完成的事件比较单一
//     addCounter(state, payload) {
//         payload.count++
//     },
//     addToCart(state, payload) {
//         state.cartList.push(payload)
//     }
// }