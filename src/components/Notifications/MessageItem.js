import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import VectorIcon from '../../utils/VectorIcon'
import { useNavigation } from '@react-navigation/native'

const MessageItem = (props) => {
  const getIconByCategory = (category) => {
    switch (category) {
      case 'Lajmerim':
        return <VectorIcon type="MaterialCommunityIcons" name="email-newsletter" size={35} color="#10388d" />
      case 'Mungese':
        return <VectorIcon type="MaterialIcons" name="person-off" size={35} color="#10388d" />
      case 'Event':
        return <VectorIcon type="MaterialIcons" name="event-note" size={35} color="#10388d" />
      case 'Personal':
        return <VectorIcon type="Entypo" name="message" size={35} color="#10388d" />
      case 'Pagese':
        return <VectorIcon type="MaterialCommunityIcons" name="account-cash" size={35} color="#10388d" />
      case 'Debit':
        return <VectorIcon type="FontAwesome5" name="coins" size={35} color="#10388d" />
      case 'Rikujtese':
        return <VectorIcon type="MaterialCommunityIcons" name="bell-alert" size={35} color="#10388d" />
      case 'Shendet':
        return <VectorIcon type="FontAwesome5" name="notes-medical" size={35} color="#10388d" />
      case 'Moti':
        return <VectorIcon type="MaterialCommunityIcons" name="weather-partly-cloudy" size={35} color="#10388d" />
    }
  }
  const navigation = useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SingleMessageScreen', {message: props.item})}>
      <View style={styles.infoContainer}>
        {getIconByCategory(props.item.category)}
        <View style={{ marginLeft: 10 }}>
          <Text style={styles.categoryText}>{props.item.category}</Text>
          <Text style={styles.subjectText}>{props.item.subject}</Text>
          <Text numberOfLines={1} style={{ maxWidth: '95%' }}>{props.item.message}</Text>
        </View>
      </View>
      <Text style={styles.dateText}>{props.item.date}</Text>
    </TouchableOpacity>
  )
}

export default MessageItem

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 8,
    borderBottomColor: '#fca311',
    borderBottomWidth: 0.5
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  categoryText: {
    fontSize: 13,
    color: 'grey',
    marginBottom: 3
  },
  subjectText: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 3
  },
  dateText: {
    fontSize: 12,
    color: 'grey',
    position: 'absolute',
    top: 5,
    right: 8
  }
})