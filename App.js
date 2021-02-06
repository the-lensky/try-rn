import {StatusBar} from 'expo-status-bar'
import React from 'react'
import {Button, StyleSheet, Text, View, TextInput} from 'react-native'



export default function App() {
    return (
        <View style={{padding:30}}>
            <View>
                <TextInput placeholder='Hello its me'/>
                <Button title='ADD' />
            </View>
            <View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({})
