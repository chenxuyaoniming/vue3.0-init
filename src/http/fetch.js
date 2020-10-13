
const defaultMethods = {
    method: 'get',
    mode: 'cors',
    headers: {
        'Content-type': 'application/json'
    },
}
const statusCode = [200, 301, 302]
/**
 * 
 * @param {超时设置} time 
 */
const timeout = (time = 5000) => new Promise((resolve, reject) => {
    setTimeout(() => {
        reject({status: 500, msg: 'timeout'})
    }, time);
})
/**
 * 
 * @param {请求url} url 
 * @param {参数} methods 
 * @description post参数放在methods.body上 JSON.stringify() get放在methods.query上，在http内进行拼接
 */

const http = (url, methods) => {
    let newUrl = '';
    if (methods && methods.method === 'get' && methods.query) {
        newUrl = Object.keys(methods.query).reduce((newVal, k) => {
            newVal += `${k}=${methods.query[k]}&`;
            return newVal;
        }, `${url}?`)
    } else {
        newUrl = url;
    }

    const fetchPromise = () => new Promise((resolve, reject) => {
        fetch(newUrl, {...defaultMethods, ...methods})
            .then(res => {
                if (statusCode.includes(res.status)) {
                    resolve(res)
                } else {
                    reject(res)
                }
            })
            .catch(err => reject(err))
    })

    return Promise.race([
        timeout(),
        fetchPromise()
    ])
}



export default http;