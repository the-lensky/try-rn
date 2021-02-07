import React, {useState} from 'react'
import {Button, StyleSheet, Text, View, TextInput, ScrollView, FlatList} from 'react-native'
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'


export default function App() {

    const [goals, setGoals] = useState([])


    const addGoalHandler = (goalTitle) => {
        setGoals(currentGoals => [...goals, {id: Math.random().toString(), value: goalTitle}])
    }

    const removeGoalHandler = (goalId) => {
        setGoals(currentGoals => {
            return currentGoals.filter((goal) => goal.id !== goalId)
        })
    }


    return (
        <View style={styles.screen}>
            <GoalInput
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
