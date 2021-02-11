import React, {useState} from 'react'
import {Button, StyleSheet, Text, View, FlatList} from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'


export default function App() {
    const [goals, setGoals] = useState([])
    const [isAddMode, setIsAddMode] = useState(false)

    const addGoalHandler = (goalTitle) => {
        setGoals( [...goals, {id: Math.random().toString(), value: goalTitle}])
        setIsAddMode(false)
    }

    const removeGoalHandler = (goalId) => {
        setGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId)
        })
    }

    const cancelButtonHandler = () => {
        setIsAddMode(false)
    }


    return (
        <View style={styles.screen}>
            <Button title='Add new goal' onPress={() => setIsAddMode(true)} />
            <GoalInput
                onCancel={cancelButtonHandler}
                visible={isAddMode}
                addGoalHandler={addGoalHandler}
            />
            <FlatList
                keyExtractor={(item, index) => item.id}
                data={goals}
                renderItem={itemData => (
                    <GoalItem
                        id={itemData.item.id}
                        onDelete={removeGoalHandler}
                        title={itemData.item.value}/>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        padding: 50
    }
})
