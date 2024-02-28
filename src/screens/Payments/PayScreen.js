import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComponent from '../../components/General/HeaderComponent'
import { useNavigation } from '@react-navigation/native'
import VectorIcon from '../../utils/VectorIcon'

const PayScreen = (props) => {
    const navigation = useNavigation()
    const PaymentData = props.route.params.payment

    const [selectedMethod, setSelectedMethod] = useState('Card')

    const ItemCard = (props) => {
        return (
            <View style={{ flexDirection: 'row', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 8, borderWidth: 1, borderColor: 'grey', alignItems: 'center' }}>
                {props.icon}
                <Text style={{ fontWeight: '600', color: 'grey' }}>{props.text}</Text>
            </View>
        )
    }

    const PaymentMethodCard = (props) => {
        return (
            <TouchableOpacity style={{ backgroundColor: props.bgColor, paddingHorizontal: 40, paddingVertical: 30, borderRadius: 8, alignItems: 'center', justifyContent: 'center' }} onPress={props.onPress}>
                {props.icon}
                <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>{props.text}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderComponent title={PaymentData.description} backIcon={true} navigation={navigation} />
            <View style={styles.container}>
                <View style={styles.infoContainer}>
                    <View style={styles.iconView}>
                        <VectorIcon type="MaterialCommunityIcons" name="sack" size={55} color="white" />
                    </View>
                    <Text style={{ fontSize: 25, marginTop: 10, fontWeight: 'bold', color: '#fca311', textAlign: 'center' }}>{PaymentData.description}</Text>
                    <View style={styles.dateContainer}>
                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 15 }}>Deri me: {PaymentData.dueDate}</Text>
                    </View>
                    <View style={styles.childrenContainer}>
                        <ItemCard icon={<VectorIcon type="MaterialCommunityIcons" name="account-child-outline" size={20} color="grey" />} text="Wednesday Addams" />
                    </View>
                </View>
                <View style={styles.amountContainer}>
                    <Text style={{ color: '#fca311', fontWeight: 'bold', fontSize: 40 }}>{PaymentData.amount} ALL</Text>
                </View>
                <View style={styles.paymentMethodContainer}>
                    <PaymentMethodCard icon={<VectorIcon type="Entypo" name="credit-card" size={50} color="white" />} text="Karte" onPress={() => setSelectedMethod('Card')} bgColor={selectedMethod == 'Card' ? '#fca311' : 'grey'} />
                    <PaymentMethodCard icon={<VectorIcon type="MaterialCommunityIcons" name="account-cash" size={50} color="white" />} text="Cash" onPress={() => setSelectedMethod('Cash')} bgColor={selectedMethod == 'Cash' ? '#fca311' : 'grey'} />
                </View>
                <View style={{alignItems: 'center', marginTop: 25}}>
                    <View style={styles.payButtonContainer}>
                        <VectorIcon type="MaterialCommunityIcons" name="contactless-payment" size={40} color="white" />
                        <Text style={{marginLeft: 10, color: 'white', fontWeight: '600', fontSize: 35}}>Paguaj</Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default PayScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flex: 1
    },
    infoContainer: {
        marginTop: 25,
        alignItems: 'center'
    },
    iconView: {
        backgroundColor: '#fca311',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 8
    },
    dateContainer: {
        marginTop: 10,
        backgroundColor: '#fca311',
        paddingHorizontal: 18,
        paddingVertical: 10,
        borderRadius: 8
    },
    childrenContainer: {
        marginTop: 5
    },
    amountContainer: {
        marginTop: 45,
        alignItems: 'center'
    },
    paymentMethodContainer: {
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'center',
        gap: 10
    },
    payButtonContainer: {
        backgroundColor: '#fca311',
        width: '80%',
        paddingVertical: 10,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})