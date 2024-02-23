import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import IonIcon from "react-native-vector-icons/dist/Ionicons";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'blue'}}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <IonIcon name="rocket" color="red" size={50} />
        </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})