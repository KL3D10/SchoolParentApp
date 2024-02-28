import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import VectorIcon from '../../utils/VectorIcon'

const PaidPaymentCard = (props) => {
    const getIcon = (paymentItem) => {
        switch (paymentItem.status) {
            case 'PAID':
                if (paymentItem.paymentMethod == "CARD") {
                    return <VectorIcon type="Entypo" name="credit-card" size={40} color="white" />
                } else {
                    return <VectorIcon type="Ionicons" name="cash-outline" size={40} color="white" />
                }
            case 'EXPIRED':
                return <VectorIcon type="MaterialCommunityIcons" name="credit-card-remove-outline" size={40} color="white" />
        }
    }
    const getColorByStatus = (status) => {
        switch (status) {
            case 'PAID':
                return "green"
            case 'EXPIRED':
                return "grey"
        }
    }
    const getPaymentMethod = (paymentItem) => {
        switch (paymentItem.status) {
            case 'PAID':
                if (paymentItem.paymentMethod == "CARD") {
                    return 'KARTE'
                } else {
                    return "CASH"
                }
            case 'EXPIRED':
                return "SKADUAR"
        }
    }
    return (
        <TouchableOpacity style={[styles.container, styles.shadowProp]}>
            <View style={[styles.topContainer, { backgroundColor: getColorByStatus(props.item.status) }]}>
                {getIcon(props.item)}
                <Text style={styles.topMethodText}>{getPaymentMethod(props.item)}</Text>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={{ color: 'grey', fontWeight: '600' }}>{props.item.dueDate}</Text>
                <Text numberOfLines={2} style={{ marginTop: 8, fontWeight: '500', textAlign: 'center' }}>{props.item.description}</Text>
                <Text style={{ position: 'absolute', bottom: 4, fontWeight: '500', color: getColorByStatus(props.item.status) }}>{props.item.amount} ALL</Text>
            </View>
        </TouchableOpacity>
    )
}

export default PaidPaymentCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        width: 175,
        height: 160,
        borderRadius: 5,
    },
    topContainer: {
        flex: 1,
        backgroundColor: '#fca311',
        alignItems: 'center',
        paddingVertical: 8,
        borderRadius: 5
    },
    topMethodText:{
        color: 'white',
        fontSize: 10,
        fontWeight: '700'
    },
    bottomContainer: {
        flex: 2,
        alignItems: 'center',
        paddingTop: 2,
        paddingHorizontal: 5
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
    },
})