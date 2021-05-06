/**
 * @author ClearLuvMoki
 * @filename index.jsx
 * @date 2021-04-28 星期三
 * @description 新闻卡片组件
 */
import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.less'


export default class NewsCard extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

    /**
     * @author ClearLuvMoki
     * @filename index.jsx
     * @date 2021-04-30 星期五
     * @props {
     * 这里没用ts感觉亏死了
     * infoItem 这里是传进来的消息对象
     * title 标题
     * authorName 作者名字
     * authorImg 作者头像
     * authorHeadLine 作者个签
     * excerpt 消息的简述
     * thankCount 点赞个数
     * }
     */
    render() {
        const { infoItem, title, authorName, authorImg, authorHeadLine, excerpt, thankCount } = this.props
        return (
            <View id="container">
                <View className="title-container">
                    <View className="author flex1">
                        <Image className="author_img" src={authorImg}></Image>
                    </View>
                    <View className="flex8">
                        <Text className="author-name">{authorName}</Text>
                    </View>
                </View>
                <View className="content-container">
                    <View className='question'>
                        <View className='question-link'>
                            <Text>{title}</Text>
                        </View>
                    </View>
                    <View className='answer-body'>
                        <View>
                            <Text>{excerpt}</Text>
                        </View>
                        <View className='answer-actions'>
                            <View>
                                <View>{thankCount} 赞同 </View>
                            </View>
                            <View >
                                <View>{Math.ceil(Math.random()*100)} 评论 </View>
                            </View>
                            <View>
                                <View>关注问题</View>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}
