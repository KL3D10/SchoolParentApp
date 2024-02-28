import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ChatItem = (props) => {
  return (
    <View style={props.item.type == 'received' ? styles.receivedContainer : styles.sentContainer}>
        {props.item.type == 'received' && <View style={styles.imageContainer}>
            <Image style={{width: 30, height: 30, borderRadius: 50}} source={{uri: props.item.image}} />
        </View>}
        <View style={styles.textContainer}>
            <Text style={styles.chatText}>{props.item.name}</Text>
            <Text style={{color: 'white'}}>{props.item.message}</Text>
        </View>
        {/* <Text style={styles.timeText}>{props.item.time}</Text> */}
    </View>
  )
}

export default ChatItem

const styles = StyleSheet.create({
    receivedContainer: {
        backgroundColor: '#fca311',
        alignSelf: 'flex-start',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomLeftRadius: 15,
        borderBottomEndRadius: 15,
        borderTopEndRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '100%'
    },
    sentContainer: {
        backgroundColor: '#10388d',
        alignSelf: 'flex-end',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomLeftRadius: 15,
        borderBottomEndRadius: 15,
        borderTopStartRadius: 15,
        flexDirection: 'row',
        alignItems: 'center',
        maxWidth: '100%'
    },
    imageContainer: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white'
    },
    textContainer: {
        marginLeft: 5,
        maxWidth: '90%'
    },
    chatText: {
        fontWeight: '700',
        color: 'white'
    },
    timeText: {
        position: 'absolute',
        top: 5,
        right: 15,
        color: 'grey',
        fontSize: 12
    }
})