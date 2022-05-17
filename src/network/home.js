import { request } from './request'
export function getHomeMultidata() {
    // 返回一个promise
    return request({
        url: 'home/multidata'
    })
}



// request({
//     url: '/home/multidata'
// }).then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// })