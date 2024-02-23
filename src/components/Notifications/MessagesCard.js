import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import VectorIcon from '../../utils/VectorIcon'
import { useNavigation } from '@react-navigation/native'

const MessagesCard = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <View style={styles.infoContainer}>
        <VectorIcon type="AntDesign" name="message1" size={42} color={'#10388d'}/>
          <View style={{marginLeft: 15}}>
            <Text style={{fontWeight: '500', fontSize: 17, color: '#10388d'}}>Ju keni 2 mesazhe te reja</Text>
            <Text style={{fontWeight: '500', fontSize: 13, marginTop: 6, color: '#10388d'}}>Total 25 Mesazhe</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.bottomContainer} onPress={() => navigation.navigate('MessagesScreen')}>
        <Text style={styles.bottomText}>Shko tek Mesazhet</Text>
      </TouchableOpacity>
    </View>
  )
}

export default MessagesCard

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    borderWidth: 0.3,
    borderColor: 'black',
  },
  topContainer: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-between',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bottomContainer: {
    paddingVertical: 12,
    backgroundColor: '#10388d',
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  bottomText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
})