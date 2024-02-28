import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useNavigation } from '@react-navigation/native'
import HeaderComponent from '../components/General/HeaderComponent'
import { ClassData } from '../assets/data/ClassData'
import ClassPupilItem from '../components/ClassPupilItem'

const ClassScreen = () => {
  const navigation = useNavigation()

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['top', 'left', 'right']}>
    <HeaderComponent title={'Klasa 1A'} backIcon={true} navigation={navigation} />
    <View style={styles.container}>
        <FlatList
          data={ClassData}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <ClassPupilItem item={item} />
          )}
        />
    </View>
  </SafeAreaView>
  )
}

export default ClassScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flex: 1,
        marginTop: 15,
        marginBottom: 10
      },
})
