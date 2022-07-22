import request from "../untils/request";

export const getInfo = ()=>{
  return request(
    {
      url: '/api/list',
      method: 'get',
      params:{
        t:Date.now()
      }
    }
  )
}