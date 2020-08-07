import React, { useState, useEffect } from 'react'
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { getQuestion, checkResult } from '../services/question'

export default function QuestionScreen() {
    const [score, setScore] = useState(0)
    const [question, setQuestion] = useState(getQuestion())

    useEffect(() => {
        let data = getQuestion()
        setQuestion(data);
        console.log(data)
    },[])

    const handleClick = (option) => {
        if(checkResult(question.answer, option))
            setScore(score+5)
        else
            setScore(score - 5)
    }

    const handleSkip = () => {
        let data = getQuestion();
        setQuestion(data);
    }

    return (
        <View>
            <View>
            <Text>Score : {score}</Text>
            <Text>Timer : 50s</Text>
            </View>
            <View>
                <View>
                    <Text> {question.question} </Text>
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
                <TouchableWithoutFeedback style={styles.skipBtn} onPress={handleSkip}>
                    <Text style={styles.skipBtn}>SKIP</Text>
                </TouchableWithoutFeedback>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    option : {
        width : 250,
        padding : 20
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
    skipBtn : {
        width : 350,
        backgroundColor : "dodgerblue",
        color : "white",
        fontSize : 20,
        textAlign : "center",
        padding : 20,
        marginTop : 20,
        borderRadius : 20
    }
})

