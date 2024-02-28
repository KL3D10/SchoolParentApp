import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComponent from '../../components/General/HeaderComponent'
import { useNavigation } from '@react-navigation/native'
import { MessagesData } from '../../assets/data/MessagesData'
import NotificationItem from '../../components/Notifications/NotificationItem'
import MessageItem from '../../components/Notifications/MessageItem'
import VectorIcon from '../../utils/VectorIcon'

const MessagesScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComponent title={'Mesazhet'} backIcon={true} navigation={navigation} />
      <View style={styles.container}>
        <View style={{ marginTop: 10, marginBottom: 5, flex: 1 }}>
          <FlatList
            data={MessagesData}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <MessageItem item={item} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default MessagesScreen

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1
  },
})