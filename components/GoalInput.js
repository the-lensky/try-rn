import React, {useEffect, useState} from 'react'
import {Button, TextInput, View, StyleSheet} from 'react-native'

const GoalInput = ({addGoalHandler}) => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    return (
        <View style={styles.inputContainer}>
            <TextInput placeholder='Hello its me'
                       style={styles.input}
                       value={enteredGoal}
                       onChangeText={goalInputHandler}
            />
            <Button
                onPress={() => addGoalHandler(enteredGoal)}
                title='ADD'/>
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: '85%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10
    }
})

export default GoalInput