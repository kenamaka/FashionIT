import React, {useState4} from 'react'
import { StyleSheet, Button,TextInput, View } from 'react-native'

export default function Home() {
    return (
        <View style={styles.container}>
            <View style ={styles.search}>
            <TextInput placeholder="Search..." style={styles.text} />
                <Button title="search" />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:20

        },
    search: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItem:'center'
        
        
    },
    text: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width:'70%'
        
    }

})
