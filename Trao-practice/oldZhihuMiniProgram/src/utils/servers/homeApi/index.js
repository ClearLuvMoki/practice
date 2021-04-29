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
 * @todo 获取知乎列表
 * @param { limit } 条数
 * @param { offset } 开始位置
 */
const getNewsApi = async (limit, offset) => {
    Taro.showLoading({title: '加载中'})
    let resData = {}
    await Taro.request({
        url: 'https://api.zhihu.com/explore/answers', // 知乎接口
        method: 'GET',
        data: {
            limit,
            offset
        }
    }).then(
        (res) => {
            Taro.hideLoading()
            if (res?.statusCode*1 === 200) {
                const { data } = res
                resData = data
            }
        }
    )
    return resData
}
export { getNewsApi }