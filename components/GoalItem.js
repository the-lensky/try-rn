import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native'

const GoalItem = ({title, onDelete, id}) => {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onDelete(id)}
        >
            <View style={styles.listItem}>
                <Text>{title}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    listItem: {
        marginVertical: 5,
        padding: 10,
        backgroundColor: '#dee0e2',
        borderColor: 'black',
        borderWidth: 1
    }
})

export default GoalItem