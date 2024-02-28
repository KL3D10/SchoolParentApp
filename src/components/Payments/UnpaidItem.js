import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import VectorIcon from '../../utils/VectorIcon'

const UnpaidItem = (props) => {
    return (
        <TouchableOpacity style={styles.container} onPress={() => props.navigation.navigate('PayScreen', {payment: props.item})}>
            <View style={styles.leftContainer}>
                <VectorIcon type="Ionicons" name="wallet" color="#fca311" size={30} />
                <View style={styles.dataContainer}>
                    <Text style={styles.descriptionText} numberOfLines={2}>{props.item.description}</Text>
                    <Text style={styles.dateText}>E vlefshme deri me: {props.item.dueDate}</Text>
                </View>
            </View>
            <Text style={{color: '#fca311', fontWeight: '500'}}>{props.item.amount} ALL</Text>
        </TouchableOpacity>
    )
}

export default UnpaidItem

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 5,
        borderColor: '#fca311',
        borderWidth: 2,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    leftContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dataContainer: {
        marginLeft: 5,
        maxWidth: '85%'
    },
    descriptionText: {
        fontWeight: '600',
    },
    dateText: {
        fontSize: 12,
        color: 'grey',
        fontWeight: '500',
        marginTop: 5
    }
})