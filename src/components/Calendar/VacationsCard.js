import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { VacationsData } from '../../assets/data/CalendarData'

const VacationsCard = (props) => {
    const singleData = VacationsData[1]
    return (
        <View style={styles.container}>
            <View style={styles.firstRowContainer}>
                <Text style={styles.monthText}>{props.item.month} {props.item.year}</Text>
            </View>
            <View style={styles.secondRowContainer}>
                {props.item.data.map(item => {
                    return (
                        <View key={item.id} style={styles.vacationRow}>
                            <Text style={{fontSize: 25, color: "gray", fontWeight: '500'}}>{item.date}</Text>
                            <Text style={{marginLeft: 10, fontSize: 18, fontStyle: 'italic'}}>{item.description}</Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

export default VacationsCard

const styles = StyleSheet.create({
    container: {
        borderWidth: 0.8,
        borderRadius: 5,
        padding: 10,
        borderColor: "#fca311",
        marginBottom: 10
    },
    firstRowContainer: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    monthText: {
        color: '#fca311',
        fontSize: 20,
        fontWeight: '600'
    },
    secondRowContainer: {
        marginTop: 15
    },
    vacationRow: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})