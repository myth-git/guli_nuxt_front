import axios from 'axios'
import cookie from 'js-cookie'

// 创建axios实例
const service = axios.create({
    baseURL: 'http://localhost:9001', // api的base_url
    timeout: 20000 // 请求超时时间
})
//第三步 创建拦截器 http request
service.interceptors.request.use(    //每次发送请求使用这个拦截器
    config => {
        //debugger
        //判断cookie里面是否有名称是guli_token数据
        if (cookie.get('guli_token')) {
            //把获取cookie值放到header请求头里面
            config.headers['token'] = cookie.get('guli_token');
        }
        return config
    },
    err => {
        return Promise.reject(err);
    })

export default service