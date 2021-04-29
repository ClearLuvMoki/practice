/**
 * @author ClearLuvMoki
 * @filename index.jsx
 * @date 2021-04-28 星期三
 * @description 主页
 */
import { Component } from 'react'
import { View, ScrollView, Image, Input } from '@tarojs/components'
import { getNewsApi } from '../../utils/servers/homeApi/index' // 接口
import NewsCard from '../../components/NewsCard/index'
import searchPng from '../../asset/images/search.png'
import lightingPng from '../../asset/images/lighting.png'
import './index.less'

class Index extends Component {
  constructor(props){
    super(props)
    this.state = {
      newsList: []
    }
  }

  componentDidMount = () => {
    this.initList()
  }

  /**
   * @author ClearLuvMoki
   * @filename index.jsx
   * @date 2021-04-28 星期三
   * @todo 获取数据列表
   */
  initList = () => {
    getNewsApi().then(
      (res) => {
        this.setState({newsList: res?.data})
      })
  }

  render () {
    const { newsList } = this.state
    const scrollTop = 0
    const Threshold = 20
    return (
      <View>
        <View className='search flex-wrp'>
          <View className='search-left'>
            <View className='flex-wrp'>
              <View className='search-icon'><Image src={searchPng}></Image></View>
              <View className='search-content'><Input type='text' placeholder={'搜索话题, 问题或人'} placeholderClass='search-placeholder' /></View>
            </View>
          </View>
          <View className='search-right'>
            <Image src={lightingPng}></Image>
          </View>
        </View>
        <ScrollView
          scrollY
          scrollWithAnimation
          scrollTop={scrollTop} // 竖向滚动条位置
          upperThreshold={Threshold}  // 具体顶部/左侧多少距离触发事件
          lowerThreshold={Threshold}  // 具体底部/右侧多少距离触发事件
          onScrollToUpper={() => {}} // 滚动到顶部/左侧触发事件
          onScrollToLower={() => {}} // 滚动到底部/右侧触发事件
        >
          {
            newsList && newsList.length > 0 && newsList.map(item => {
              return (
                <NewsCard answerItem={item}/>
              )
            })
          }
        </ScrollView>
      </View>
    )
  }
}

export default Index

