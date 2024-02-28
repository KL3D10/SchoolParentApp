import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import HeaderComponent from '../../components/General/HeaderComponent'
import ScheduleCard from '../../components/Calendar/ScheduleCard'
import { ScheduleData } from '../../assets/data/CalendarData'

const ScheduleScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComponent title="Orari" backIcon={true} navigation={navigation} />
      <View style={styles.container}>
        <SectionList
          sections={ScheduleData}
          keyExtractor={(item) => item.id.toString()}
          stickySectionHeadersEnabled={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
          renderItem={(item) => <ScheduleCard item={item} />}
          renderSectionHeader={({ section: { id, day, color, data } }) => (
            <Text style={{ color: color, fontSize: 20, fontWeight: 'bold' }}>{day}</Text>
          )}
        />
      </View>
    </SafeAreaView>
  )
}

export default ScheduleScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 15
  },
  dayText: {
    fontSize: 22,
    fontWeight: 'bold',
    marginLeft: 5,
    color: 'grey'
  }
})