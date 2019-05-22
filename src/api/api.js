import request from '../utils/request';
// const apiMall = 'http://47.104.243.124/qdc';

export function getBannerList(params) {
    return request({
        url: "/qdc/C/banner/getBannerList",
        method: 'post',
        data: params
    })
}