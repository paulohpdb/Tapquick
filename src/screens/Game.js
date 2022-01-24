import React, { Component } from 'react'
import {View, Text, TouchableOpacity} from 'react-native'

export default class Game extends Component {
    state = {
        score: 0
    }

    render() {
        return (
            <View>
                <Text>Game screen</Text>
            </View>
        )
    }
}