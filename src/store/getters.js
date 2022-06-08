export default {
    cartListLength(state) {
        return state.cartList.length
    },
    cartList(state) {
        return state.cartList
    },
    isSelectAll(state) {
        return state.cartList.length === 0 ? false : !state.cartList.some((item) => !item.checked);
    }
}