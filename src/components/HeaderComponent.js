import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import VectorIcon from '../utils/VectorIcon'
import { useNavigation } from '@react-navigation/native'

const HeaderComponent = (props) => {
    const navigation = useNavigation()
    return (
        <View style={styles.container}>
            {props.backIcon &&
                <TouchableOpacity style={styles.backArrow} onPress={() => props.navigation.goBack()}>
                    <VectorIcon type='Ionicons' name="chevron-back" size={30} color="white" />
                </TouchableOpacity>
            }
            <Text style={styles.headerText} numberOfLines={1}>{props.title}</Text>
        </View>
    )
}

export default HeaderComponent

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: '#fca311',
        justifyContent: 'center',
        alignItems: 'center',
        borderBottomLeftRadius: 40,
        borderBottomRightRadius: 40
    },
    headerText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        maxWidth: '70%'
    },
    backArrow: {
        position: 'absolute',
        left: 5
    }
})