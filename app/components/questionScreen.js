import React, { useState, useEffect } from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet, Alert } from 'react-native'
import { getQuestion, checkResult } from '../services/question'

import { useTimer } from 'react-timer-hook';

// import {useTimer} from '../services/timer'

export default function QuestionScreen() {
    const [score, setScore] = useState(0)
    const [question, setQuestion] = useState(getQuestion())
    const {  seconds, minutes, start, restart }  = useTimer({ expiryTimestamp : new Date().setSeconds(new Date().getSeconds() + 60), onExpire: () => gameEnd() });;

    useEffect(() => {
        createQuestion()
        if(score < 0)
        gameEnd()
    },[score])

    const startAgain = () => {
   
    }

    const handleClick = (option) => {
        if(checkResult(question.answer, option)){
            setScore(score + 5)
            let data = getQuestion();
            setQuestion(data);
            restart(new Date().setSeconds(new Date().getSeconds() + (seconds + 5)))
        }
        else{
            setScore(score - 5)
            let data = getQuestion();
            setQuestion(data);
            restart(new Date().setSeconds(new Date().getSeconds() + seconds - 5))
        }
    }

    const handleSkip = () => {
        skipQuestion()
    }

    const createQuestion = () => {
        let data = getQuestion();
        setQuestion(data);
    }
    const checkScore = () => {
        if(score < 0){
            gameEnd()
        }
    }

    const restartGame = () => {
        let data = getQuestion()
        setQuestion(data);
        setScore(0)
        restart(new Date().setSeconds(new Date().getSeconds() + 60))
    }
    const skipQuestion = () => {
        setScore(score - 5);
        checkScore()
        createQuestion()
        restart(new Date().setSeconds(new Date().getSeconds() + 60))
    }
    const gameEnd = () => {
        Alert.alert(
            'Game Over',
            score < 0 ? "Your score is too low to continue, Try again ?" : `You scored ${score} points, Try again ?`,
            [
              {
                text: 'Cancel',
                onPress: () => console.log('Cancel Pressed'),
                style: 'cancel'
              },
              { text: 'OK', onPress: () => restartGame() }
            ],
            { cancelable: false }
          );
    }

    return (
        <View  style={styles.container} >
            <View style={styles.card}>
            <Text style={styles.text}>Score : {score}</Text>
                <Text style={styles.text}>Timer : {minutes > 0 ? `${minutes}:${seconds}`  : seconds}s</Text>
            </View>
            <View style={styles.wrapper}>
                <View style={styles.questionContainer}>
                    <Text style={styles.questionText}> {question.question} </Text>
                </View>
                <View>
                    {question.options.map((option, index) => (
                    <TouchableWithoutFeedback style={styles.option} key={index} onPress={() => handleClick(option)}>
                        <Text style={styles.optionText}> {option} </Text>
                    </TouchableWithoutFeedback>
                    ))}
                </View>
            </View>
            <View>
                <TouchableWithoutFeedback style={styles.skipBtnContainer} onPress={handleSkip}>
                    <Text style={styles.skipBtn}>SKIP</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card : {
        width : "100%",
        backgroundColor : "lightgrey",
        padding : 20,
        borderRadius : 5,
        display : "flex",
        flexDirection : "row"
    },
    text : {
        fontSize : 20,
        marginHorizontal : 10
    },
    container : {
        display : "flex",
        padding : 20,
        alignItems : "center",
        justifyContent : "center",
    },
    questionContainer:{
        display : "flex",
        alignItems : "center",
        padding : 20,
        marginVertical : 20
    },
    questionText : {
        fontSize : 50,
        fontWeight : "900"
    },
    option : {
        flex : 1,
        width : 250,
        padding : 20,
        
    },
    optionText : {
        padding : 20,
        margin : 5,
        width : 350,
        borderColor : "black",
        borderRadius : 20,
        borderWidth : 1,
        color : "tomato",
        fontWeight : "bold",
        fontSize : 20,
        textAlign : "center"
    },
    skipBtnContainer : {
        width : 150,
        padding : 20
    },
    skipBtn : {
        marginTop : 50,
        width : 100,
        backgroundColor : "dodgerblue",
        color : "white",
        fontSize : 20,
        textAlign : "center",
        padding : 20,
        borderRadius : 50,
        fontWeight : "900"
    }
})

