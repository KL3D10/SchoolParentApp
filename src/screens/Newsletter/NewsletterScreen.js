import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComponent from '../../components/General/HeaderComponent'
import { useNavigation } from '@react-navigation/native'
import NewsletterItem from '../../components/Newsletter/NewsletterItem'
import { NewsletterData } from '../../assets/data/NewsletterData'

const NewsletterScreen = () => {
  const navigation = useNavigation()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderComponent title={'Publikime'} backIcon={false} navigation={navigation} />
      <View style={styles.container}>
        <FlatList 
          data={NewsletterData}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ gap: 10 }}
          renderItem={({item}) => (
              <NewsletterItem item={item} navigation={navigation} />
            )}
        />
      </View>
    </SafeAreaView>
  )
}

export default NewsletterScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    marginTop: 15
},
})