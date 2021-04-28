/**
 * @author ClearLuvMoki
 * @filename index.js
 * @date 2021-04-28 星期三
 * @description 主页面接口
 */
import Taro from '@tarojs/taro'

/**
 * @author ClearLuvMoki
 * @filename index.js
 * @date 2021-04-28 星期三
 * @todo 获取新闻列表
 */
const getNewsApi = async () => {
    Taro.showLoading({title: '加载中'})
    let resData = {}
    await Taro.request({
        url: 'http://v.juhe.cn/toutiao/index',
        method: 'GET',
        data: {
            key: 'c9fdb9910f62230edb7fb6a9da8a2b61', // 聚合数据的key， 免费的每天支持一百条
            type: 'guoji', // 暂时查询国际信息，详情请看聚合api： https://www.juhe.cn/docs/api/id/235
        }
    }).then(
        (res) => {
            Taro.hideLoading()
            const { data } = res
            if (data?.error_code*1 === 0) {
                resData = data?.result
            }
        }
    )
    return resData
}
export { getNewsApi }