/**
 * @author ClearLuvMoki
 * @filename discovery.jsx
 * @date 2021-04-28 星期三
 * @description 分享
 */
import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import { getNewsTitleApi } from '../../utils/servers/discoveryApi/index'
import './discovery.less'


class DiscoverryIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      navTab: ['新闻', '收藏'],
      chooseNavTab: 0,
    }
  }

  componentDidMount = () => {
    getNewsTitleApi()
  }


  /**
   * @author ClearLuvMoki
   * @filename discovery.jsx
   * @date 2021-04-30 星期五
   * @todo 点击navTab
   */
  clickNavTab = (index) => {
    this.setState({
      chooseNavTab: index
    })
  }

  render () {
    const { navTab, chooseNavTab } = this.state
    console.log(chooseNavTab, 'chooseNavTab')
    return (
      <View id="discoveryStyles">
        <View  className='toptab flex-wrp'>
          {
            navTab && navTab.map((item, index) => {
              return (
                <View 
                  className={chooseNavTab === index ? 'toptab flex-item active' : 'toptab flex-item'}
                  onClick={() => this.clickNavTab(index)}
                >
                  {item}
                </View>
              )
            })
          }
        </View>
        <View>
          <Text>新闻</Text>
        </View>
        <View>
          <Text>收藏</Text>
        </View>
      </View>
    )
  }
}

export default DiscoverryIndex

