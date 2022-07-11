import axios, {  AxiosRequestConfig, AxiosResponse } from "axios";

const service = axios.create({
  baseURL:'http://localhost:3333',
  timeout:10000
})

service.interceptors.request.use(
  (config:AxiosRequestConfig)=>{
    return config
  },
  (error:any)=>{
    console.log('请求拦截器error: ', error);
    Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response:AxiosResponse)=>{
    const code = response.status
    if (code == 200) {
      return response.data.data
    }
    console.error(response.data.msg || '请求失败，请稍后重试')
    return Promise.reject(new Error(response.data.info || 'Error'))
  },
  (error)=>{
    console.log('响应拦截器error: ', error)
    console.error('网络不给力，请稍后重试')
    return Promise.reject(error)
  }
)

export default service