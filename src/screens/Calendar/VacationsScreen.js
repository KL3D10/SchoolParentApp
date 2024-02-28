import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComponent from '../../components/General/HeaderComponent'
import { useNavigation } from '@react-navigation/native'
import { VacationsData } from '../../assets/data/CalendarData'
import VacationsCard from '../../components/Calendar/VacationsCard'

const VacationsScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComponent title="Pushime" backIcon={true} navigation={navigation} />
      <View style={styles.container}>
          <FlatList
            data={VacationsData}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ gap: 10 }}
            renderItem={({item}) => (
                <VacationsCard item={item} />
              )}
          />
      </View>
    </SafeAreaView>
  )
}

export default VacationsScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 15
  }
})