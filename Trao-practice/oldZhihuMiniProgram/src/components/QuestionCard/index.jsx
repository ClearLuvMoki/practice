/**
 * @author ClearLuvMoki
 * @filename index.tsx
 * @date 2021-04-30 星期五
 * @description 问题的组件
 */
import React, { Component } from 'react'
import { View, Text, Image } from '@tarojs/components'
import './index.less'


export default class QuestionCard extends Component {
    constructor(props){
        super(props)
        this.state = {}
    }

   

    render () {
        const { title, except } = this.props
        return (
            <View id="question-contaienr">
                <View className="title-container">
                    {title}
                </View>
            </View>
        )
    }
}