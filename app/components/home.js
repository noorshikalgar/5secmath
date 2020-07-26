import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableWithoutFeedback} from 'react-native'

const rules = [
    "Answer every question in given time",
    "Time will be set as per your level you choose",
    "Skip a question and 5 points from score will be deducted",
    "Gone out of time, question will be new and 5 points will be deducted"
];

export default function Home() {
    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.logo}>5SECMATH</Text>
            </View>
            <View style={styles.rules}>
                <FlatList
                    style={styles.rules}
                    data={rules}
                    renderItem={({item}) => (<Text style={styles.rule}>{item}</Text>)}
                    keyExtractor={(item) => item}
                    ItemSeparatorComponent={() => (<View style={styles.seperator}></View>)}
                    ListHeaderComponent={()=>(<Text style={styles.listHeader}>RULES</Text>)}
                />
            </View>
            <TouchableWithoutFeedback style={styles.Button} onPress={() => alert("Game started...!")}>
                <Text style={styles.Button} >Start Game</Text>
            </TouchableWithoutFeedback>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : "80%",
        justifyContent : "center",
        alignItems : "center"
    },
    logo : {
        fontSize : 45,
        fontFamily : "Roboto",
        fontWeight : "900",
        color : "#3d3d3d",
        marginBottom : 45
    },
    rules : {
        height : "55%",
        padding : 15,
        backgroundColor : "tomato",
        borderRadius : 20
    },
    rule : {
        color : "white",
        fontSize : 18,
        marginBottom : 5,
        textAlign : "center",
    },
    Button : {
        width : "80%",
        padding : 20,
        color : "white",
        textAlign : "center",
        textTransform : "uppercase",
        fontSize : 18,
        backgroundColor : "dodgerblue",
        marginTop : 45
    },
    seperator : {
        backgroundColor : "red",
        marginTop : 5,
        marginBottom : 5,
        height : 3,
        width : "100%"
    },
    listHeader : {
        textAlign : "center",
        marginBottom : 30,
        color : "white",
        fontSize : 25
    }
})

