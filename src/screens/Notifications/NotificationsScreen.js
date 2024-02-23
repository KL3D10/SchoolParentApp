import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComponent from '../../components/HeaderComponent'
import MessagesCard from '../../components/Notifications/MessagesCard'
import VectorIcon from '../../utils/VectorIcon'
import NotificationItem from '../../components/Notifications/NotificationItem'
import { NotificationsData } from '../../assets/data/NotificationsData'

const NotificationsScreen = () => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderComponent title={'Njoftimet'} backIcon={false} />
            <View style={styles.container}>
                <View style={{ marginTop: 10 }}>
                    <MessagesCard />
                </View>
                <View style={{ marginTop: 10, marginBottom: 5, flex: 1 }}>
                    <FlatList
                        data={NotificationsData}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ gap: 10 }}
                        renderItem={({item}) => (
                            <NotificationItem item={item} />
                          )}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default NotificationsScreen

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 15,
        flex: 1
    },
})