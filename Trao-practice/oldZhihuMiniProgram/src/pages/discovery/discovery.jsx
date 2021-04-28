/**
 * @author ClearLuvMoki
 * @filename discovery.jsx
 * @date 2021-04-28 星期三
 * @description 分享
 */
import { Component } from 'react'
import { View } from '@tarojs/components'


class DiscoverryIndex extends Component {
  constructor(props){
    super(props)
    this.state = {}
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
        111
      </View>
    )
  }
}

export default DiscoverryIndex

