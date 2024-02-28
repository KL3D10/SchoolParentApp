import { FlatList, StyleSheet, SafeAreaView, Text, View } from 'react-native'
import React from 'react'
import HeaderComponent from '../../components/General/HeaderComponent'
import { useNavigation } from '@react-navigation/native'
import UnpaidItem from '../../components/Payments/UnpaidItem'
import { PaymentsData } from '../../assets/data/PaymentsData'

const UnpaidItems = () => {
  const navigation = useNavigation()
  const UnpaidPayments = PaymentsData.filter(item => item.status == 'UNPAID')
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComponent title={'Pagesat'} backIcon={true} navigation={navigation} />
      <View style={styles.container}>
      <View style={{ marginTop: 10, marginBottom: 5, flex: 1 }}>
          <FlatList
            data={UnpaidPayments}
            keyExtractor={(item) => item.id.toString()}
            contentContainerStyle={{ gap: 3 }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <UnpaidItem item={item} navigation={navigation} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default UnpaidItems

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 5
  }
})