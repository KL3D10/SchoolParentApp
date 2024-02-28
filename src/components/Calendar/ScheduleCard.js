import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ScheduleCard = ({ item }) => {
    return (
        <View style={[styles.container, styles.shadowProp, { borderColor: item.section.color }]}>
            <Text style={[styles.subjectText, { color: item.section.color }]}>{item.item.subject}</Text>
            <View style={{ gap: 5 }}>
                {item.item.time.map((time) => {
                    return (
                        <View key={time} style={[styles.timeCardContainer, { backgroundColor: item.section.color }]}>
                            <Text style={styles.timeText}>{time}</Text>
                        </View>
                    )
                })}
            </View>
        </View>
    )
}

export default ScheduleCard

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 0.8,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop: 5
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
    subjectText: {
        fontWeight: '500',
        fontSize: 20
    },
    timeCardContainer: {
        padding: 5,
        borderRadius: 5
    },
    timeText: {
        color: 'white',
        fontSize: 15,
        fontWeight: '700'
    }
})