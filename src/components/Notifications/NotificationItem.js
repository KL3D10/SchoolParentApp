import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import VectorIcon from '../../utils/VectorIcon'
import { useNavigation } from '@react-navigation/native'


const NotificationItem = (props) => {
    const getColorByCategory = (category) => {
        switch (category) {
            case 'Sport':
                return 'green'
            case 'Udhetim':
                return '#10388D'
            case 'Takim':
                return '#fca311'
            case 'Koncert':
                return '#8431D6'
            case 'Te pergjithshme':
                return '#686868'
            case 'Te rendesishme':
                return 'red'
        }
    }

    const getIconByCategory = (category) => {
        switch (category) {
            case 'Sport':
                return 'football-outline'
            case 'Udhetim':
            
                return 'bus'
            case 'Takim':
                return 'people-sharp'
            case 'Koncert':
                return 'color-wand'
            case 'Te pergjithshme':
                return 'bar-chart'
            case 'Te rendesishme':
                return 'warning'
        }
    }
    const navigation = useNavigation()
    return (
        <TouchableOpacity style={[styles.container, { borderColor: getColorByCategory(props.item.category) }]} onPress={() => navigation.navigate('SingleNotificationScreen')}>
            <View style={styles.infoContainer}>
                <VectorIcon type="Ionicons" name={getIconByCategory(props.item.category)} color={getColorByCategory(props.item.category)} size={40} />
                <View style={{ marginLeft: 10 }}>
                    <Text style={[styles.headerText, { color: getColorByCategory(props.item.category) }]}>{props.item.category}</Text>
                    <Text style={styles.subText}>{props.item.message}</Text>
                </View>
            </View>
            <Text style={styles.dateText}>{props.item.date}</Text>
        </TouchableOpacity>
    )
}

export default NotificationItem

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        borderWidth: 0.5,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    subText: {
        width: '99%'
    },
    dateText: {
        fontSize: 12,
        color: 'grey',
        position: 'absolute',
        top: 5,
        right: 8
    }
})
