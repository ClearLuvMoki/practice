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


    render() {
        const { answerItem } = this.props
        return (
            <View id="container">
                <View className="title-container">
                    <view className="author flex1">
                        <Image className="author_img" src={answerItem?.author?.avatar_url}></Image>
                    </view>
                    <view className="flex8">
                        <Text className="author-name">{answerItem?.author?.name}</Text>
                    </view>
                </View>
                <View className="content-container">
                    <View className='question'>
                        <View className='question-link'>
                            <Text>{answerItem?.question?.title}</Text>
                        </View>
                    </View>
                    <View className='answer-body'>
                        <View>
                            <Text>{answerItem?.excerpt}</Text>
                        </View>
                        <View className='answer-actions'>
                            <View>
                                <View>{answerItem?.thanks_count} 赞同 </View>
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
