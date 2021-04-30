/**
 * @author ClearLuvMoki
 * @filename index.js
 * @date 2021-04-30
 * @description 发现页面接口
 */
 import Taro from '@tarojs/taro'

 /**
  * @author ClearLuvMoki
  * @filename index.js
  * @date 2021-04-28 星期三
  * @todo 获取随机一个问题
  */
 const getRandomQuestionApi = async (limit, offset) => {
     Taro.showLoading({title: '加载中'})
     let resData = {}
     await Taro.request({
         url: 'https://api.zhihu.com/explore/random_question', // 改接口返回一个问题，随机
         method: 'GET',
     }).then(
         (res) => {
             Taro.hideLoading()
             if (res?.statusCode*1 === 200) {
                resData = res?.data
             }
             
         }
     )
     return resData
 }

 /**
 * @author ClearLuvMoki
 * @filename index.js
 * @date 2021-04-30 星期五
 * @todo 获取新闻
 */
  const getNewsTitleApi = async (limit, offset) => {
    Taro.showLoading({title: '加载中'})
    let resData = {}
    await Taro.request({
        url: 'http://news-at.zhihu.com/api/4/news/latest', // 改接口返回一个问题，随机
        method: 'GET',
    }).then(
        (res) => {
            console.log(res, 'res')
            Taro.hideLoading()
            // if (res?.statusCode*1 === 200) {
            //    resData = res?.data
            // }
            
        }
    )
    return resData
}

 export { getRandomQuestionApi, getNewsTitleApi }