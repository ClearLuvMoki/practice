/**
 * @author ClearLuvMoki
 * @filename discovery.jsx
 * @date 2021-04-28 星期三
 * @description 分享
 */
import { Component } from 'react'
import { View, Text, ScrollView } from '@tarojs/components'
import { getNewsTitleApi } from '../../utils/servers/discoveryApi/index'
import HotNewsCard from '../../components/HotNews/index'
import './discovery.less'


class DiscoverryIndex extends Component {
  constructor(props){
    super(props)
    this.state = {
      navTab: ['新闻', '收藏'],
      chooseNavTab: 0,
      newsList: []
    }
  }

  componentDidMount = () => {
    this.initHotNews()
  }

  /**
   * @author ClearLuvMoki
   * @filename discovery.jsx
   * @date 2021-05-06 星期四
   * @todo 获取今日新闻
   */
  initHotNews = () => {
    getNewsTitleApi().then(
      (res) => {
        console.log(res, 'res')
        this.setState({newsList: res?.stories})
      }
    )
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
    }, () => {
      switch (thi.state.chooseNavTab) {
        case 0:
          this.initHotNews()
          break;
        default:
          break;
      }
    })
  }

  render () {
    const { navTab, chooseNavTab, newsList } = this.state
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
        {
          chooseNavTab*1 === 0 && (
            <View className="flexCard">
              {
                newsList && newsList.map(item => (
                  <HotNewsCard
                    infoItem={item}
                    title={item?.title}
                    image={item?.images[0]}
                    anthor={item?.hint}
                  />
                ))
              }
            </View>
          )
        }
       {
         chooseNavTab*1 === 1 && (
          <View hidden={false}>
            <Text>收藏</Text>
          </View>
         )
       }
      </View>
    )
  }
}

export default DiscoverryIndex

