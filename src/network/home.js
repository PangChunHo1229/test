import { request } from './request'
export function getHomeMultidata() {
    // 返回一个promise
    return request({
        url: 'home/multidata'
    })
}

export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}



// request({
//     url: '/home/multidata'
// }).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })