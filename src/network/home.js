import {request} from './request';

// 获取主页数据
export function getBanner() {
  return request({
    url: '/home/getBannerList'
  })
}