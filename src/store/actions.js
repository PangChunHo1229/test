import {
    ADD_COUNTER,
    ADD_TO_CART,
    CHANGE_CHECKED,
    CHECK_ALL
} from './mutations-type'



export default {
    addCart(context, payload) {
        return new Promise((res, rej) => {

            // payload新添加的商品
            // 数组常用方法 push/pop/unshift/shift/sort/reverse/map/reduce/join/filter
            //第一种 1.

            let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

            // 判断oldProduct
            if (oldProduct) {//数量+1
                context.commit(ADD_COUNTER, oldProduct)
                res('当前数量+1')
            } else {//添加新商品
                payload.count = 1
                // context. state.cartList.push(payload)
                context.commit(ADD_TO_CART, payload)
                res('添加新商品')

            }
            //第二种 2.

            // let oldProduct = null
            // for (let item of state.cartList) {
            //     if (item.iid === payload.iid) {
            //         oldProduct = item
            //     }
            // }
            // 2. 判断oldProduct
            //    if (oldProduct) {
            //     oldProduct.count += 1
            // } else {
            //     payload.count = 1
            //     state.cartList.push(payload)
            // }
        })
    },
    checkClick(context, payload) {
        context.commit(CHANGE_CHECKED, payload)
    },
    checkAll(context, payload22) {
        for (let i = 0; i < context.state.cartList.length; i++) {
            context.commit(CHECK_ALL, {
                item: context.state.cartList[i],
                check: payload22//!this.isSelectAll
            }//一整个{}是payload
            )
        }
    }
}