import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const EventItem = ({ item }) => {

    return (
        <View style={styles.container}>
            <View style={[styles.leftContainer, {backgroundColor: item.section.color}]}>
                <Text style={styles.dateText}>{item.item.date}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Text style={[styles.titleText, {color: item.section.color}]}>{item.item.description}</Text>
            </View>
        </View>
    )
}

export default EventItem

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 0.2,
        borderColor: 'grey',
        borderRadius: 5,
        flexDirection: 'row',
        flex: 1
    },
    leftContainer: {
        flex: 1,
        borderTopLeftRadius: 5,
        borderBottomStartRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 11
    },
    rightContainer: {
        flex: 3,
        justifyContent: 'center',
        paddingHorizontal: 10,
        paddingVertical: 11
    },
    dateText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    titleText: {
        fontSize: 16,
        fontWeight: '500',
    }
})
