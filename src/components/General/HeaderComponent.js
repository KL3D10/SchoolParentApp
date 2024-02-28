import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import VectorIcon from '../../utils/VectorIcon'
import { useNavigation } from '@react-navigation/native'

const HeaderComponent = (props) => {
    return (
        <View style={styles.container}>
            {props.backIcon &&
                <TouchableOpacity style={styles.backArrow} onPress={() => props.navigation.goBack()}>
                    <VectorIcon type='Ionicons' name="chevron-back" size={30} color="white" />
                </TouchableOpacity>
            }
            <Text style={styles.headerText} numberOfLines={1}>{props.title}</Text>
            {!props.backIcon && <TouchableOpacity style={styles.chat} onPress={() => props.navigation.navigate('ChatScreen')}>
                <VectorIcon type='Ionicons' name="chatbox-ellipses" size={30} color="white" />
            </TouchableOpacity>
            }
            {props.isChat && <TouchableOpacity style={styles.chat} onPress={() => props.navigation.navigate('ChatScreen')}>
                <VectorIcon type='Entypo' name="dots-three-vertical" size={30} color="white" />
            </TouchableOpacity>
            }
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
    },
    chat: {
        position: 'absolute',
        right: 15
    }
})