/**
 * @author ClearLuvMoki
 * @filename index.jsx
 * @date 2021-05-05 星期三
 * @description 今日热点新闻
 */
import React, { Component } from 'react'
import { View, Image, Text } from '@tarojs/components'
import './index.less'

export default class HotNewsCard extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }
    
    render() {
        const { infoItem, title, image, anthor } = this.props
        return (
            <View id="HotNewsCardItem">
                <View className="content">
                    <View className="title">{title}</View>
                    <View className="image"><Image  className="imageContent" src={image}></Image></View>
                </View>
                <View className="anthor">{anthor}</View>
            </View>
        )
    }
}
