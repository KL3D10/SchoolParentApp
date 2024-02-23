import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import HeaderComponent from '../../components/HeaderComponent'
import { useNavigation } from '@react-navigation/native'
import VectorIcon from '../../utils/VectorIcon'

const SingleMessageScreen = (props) => {
    const navigation = useNavigation()
    const messageData = props.route.params.message

    const getIconByCategory = (category) => {
        switch (category) {
          case 'Lajmerim':
            return <VectorIcon type="MaterialCommunityIcons" name="email-newsletter" size={25} color="#fca311" />
          case 'Mungese':
            return <VectorIcon type="MaterialIcons" name="person-off" size={25} color="#fca311" />
          case 'Event':
            return <VectorIcon type="MaterialIcons" name="event-note" size={25} color="#fca311" />
          case 'Personal':
            return <VectorIcon type="Entypo" name="message" size={25} color="#fca311" />
          case 'Pagese':
            return <VectorIcon type="MaterialCommunityIcons" name="account-cash" size={25} color="#fca311" />
          case 'Debit':
            return <VectorIcon type="FontAwesome5" name="coins" size={25} color="#fca311" />
          case 'Rikujtese':
            return <VectorIcon type="MaterialCommunityIcons" name="bell-alert" size={25} color="#fca311" />
          case 'Shendet':
            return <VectorIcon type="FontAwesome5" name="notes-medical" size={25} color="#fca311" />
          case 'Moti':
            return <VectorIcon type="MaterialCommunityIcons" name="weather-partly-cloudy" size={25} color="#fca311" />
        }
      }
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderComponent title={messageData.subject} backIcon={true} navigation={navigation} />
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={styles.subjectHeader}>{messageData.subject}</Text>
                </View>
                <View style={styles.senderContainer}>
                    <Image source={{uri: messageData.image}} resizeMode='cover' style={styles.senderImage} />
                    <View style={styles.senderInfoContainer}>
                        <Text style={styles.senderName}>{messageData.sender}</Text>
                        <Text style={styles.date}>{messageData.date}</Text>
                    </View>
                </View>
                <View style={styles.toContainer}>
                    <Text style={styles.toText}>Per: {messageData.recipients}</Text>
                </View>
                <View style={styles.messageContainer}>
                    <Text style={{fontSize: 16}}>{messageData.message}</Text>
                </View>
                <View style={{flexDirection: 'row', marginTop: 5, alignItems: 'center'}}>
                    {getIconByCategory(messageData.category)}
                    <Text style={{color: '#fca311', fontSize: 14, fontWeight: '600' , marginLeft: 4}}>{messageData.category}</Text>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default SingleMessageScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flex: 1
      },
      headerContainer: {
        marginTop: 20,
      },
      subjectHeader: {
        fontSize: 25,
        fontWeight: 'bold'
      },
      senderContainer: {
        flexDirection: 'row',
        marginTop: 12,
        alignItems: 'center',
      },
      senderImage: {
        width: 55,
        height: 55,
        borderRadius: 50
      },
      senderInfoContainer: {
        marginLeft: 10
      },
      senderName: {
        fontSize: 18,
        fontWeight: '700'
      },
      date: {
        color: 'grey',
        fontWeight: '600'
      },
      toContainer: {
        marginTop: 15
      },
      toText: {
        color: 'grey'
      },
      messageContainer: {
        marginTop: 20,
        paddingBottom: 25,
        borderBottomColor: '#fca311',
        borderBottomWidth: 1
      }
})