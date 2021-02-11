import React, {useEffect, useState} from 'react'
import {Button, TextInput, View, StyleSheet, Modal} from 'react-native'

const GoalInput = ({addGoalHandler, visible, onCancel}) => {
    const [enteredGoal, setEnteredGoal] = useState('')

    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText)
    }

    const addGoalHandlerSubmit = () => {
        addGoalHandler(enteredGoal)
        setEnteredGoal('')

    }

    return (
        <Modal visible={visible} animationType='slide'>
            <View style={styles.inputContainer}>
                <TextInput placeholder='Hello its me'
                           style={styles.input}
                           value={enteredGoal}
                           onChangeText={goalInputHandler}
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title='CANCEL'
                            color='red'
                            onPress={onCancel}
                        />
                    </View>
                    <View style={styles.button}>
                        <Button
                            onPress={addGoalHandlerSubmit}
                            title='ADD'
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '85%',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        padding: 10,
        marginBottom: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
})

export default GoalInput