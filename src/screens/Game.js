import React, { Component } from 'react'
import {View, Text, TouchableOpacity, FlatList} from 'react-native'


import styles from '../styles/Style'

export default class Game extends Component {
    constructor() {
        super()
        this.state = { 
            visibleBlob: Math.floor(Math.random() * 23+1),
            score: 0,
            endGame: false,
            isVisible: false
        }
    }

    componentDidMount = () => {
        setTimeout(this.endGame, 60000)
    }

    endGame = () => {
        this.setState({endGame: true})
    }

    newBlob = (id) => {

        if (this.state.visibleBlob == id) {
            this.setState({score: this.state.score + 1})
        } else {
            if (this.state.score >= 10) {
                this.setState({score: this.state.score - 10})
            } else {
                this.setState({score: 0})
            }
        }

        this.setState({visibleBlob: Math.floor(Math.random() * 23+1)})
       
    }


    render() {
        if (this.state.endGame == false) {

        return (
            <View>

                <View style={styles.ui}>
                    <Text>Score: {this.state.score}</Text>
                </View>

                <View  style={styles.container}>
                <TouchableOpacity onPress={() => this.newBlob(0)} style={this.state.visibleBlob == 0 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(1)} style={this.state.visibleBlob == 1 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(2)} style={this.state.visibleBlob == 2 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(3)} style={this.state.visibleBlob == 3 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(4)} style={this.state.visibleBlob == 4 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(5)} style={this.state.visibleBlob == 5 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(6)} style={this.state.visibleBlob == 6 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(7)} style={this.state.visibleBlob == 7 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(8)} style={this.state.visibleBlob == 8 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(9)} style={this.state.visibleBlob == 9 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(10)} style={this.state.visibleBlob == 10 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(11)} style={this.state.visibleBlob == 11 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(12)} style={this.state.visibleBlob == 12 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(13)} style={this.state.visibleBlob == 13 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(14)} style={this.state.visibleBlob == 14 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(15)} style={this.state.visibleBlob == 15 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(16)} style={this.state.visibleBlob == 16 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(17)} style={this.state.visibleBlob == 17 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(18)} style={this.state.visibleBlob == 18 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(19)} style={this.state.visibleBlob == 19 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(20)} style={this.state.visibleBlob == 20 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(21)} style={this.state.visibleBlob == 21 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(22)} style={this.state.visibleBlob == 22 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                <TouchableOpacity onPress={() => this.newBlob(23)} style={this.state.visibleBlob == 23 ? styles.blobVisible : styles.blobNotVisible}>

                </TouchableOpacity>

                </View>
                
                
               
            </View>

        ) } else {
            return (
                <View>
                    <Text>Sua pontuação: {this.state.score}</Text>
                </View>
            )
        }
    }
}