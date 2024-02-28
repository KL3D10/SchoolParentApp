import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComponent from '../../components/General/HeaderComponent'
import PaidPaymentCard from '../../components/Payments/PaidPaymentCard'
import PaymentCard from '../../components/Payments/PaymentsCard'
import { PaymentsData } from '../../assets/data/PaymentsData'
import { useNavigation } from '@react-navigation/native'

const PaymentsScreen = () => {
  const FinishedPayments = PaymentsData.filter(item => item.status == 'PAID' || item.status == 'EXPIRED')
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComponent title={'Historiku i Pagesave'} backIcon={false} navigation={navigation} />
      <View style={styles.container}>
        <View style={{ marginTop: 10 }}>
          <PaymentCard />
        </View>
        <View style={{ marginTop: 10, flex: 1, marginBottom: 5 }}>
          <FlatList 
            data={FinishedPayments}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={{ gap: 15 }}
            columnWrapperStyle={{justifyContent: 'space-around'}}
            renderItem={({item}) => (
              <PaidPaymentCard item={item} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default PaymentsScreen

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    flex: 1
  }
})