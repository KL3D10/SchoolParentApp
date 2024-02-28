import { FlatList, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComponent from '../../components/General/HeaderComponent'
import ChatItem from '../../components/Chat/ChatItem'
import { ChatData } from '../../assets/data/ChatData'
import VectorIcon from '../../utils/VectorIcon'
import { useNavigation } from '@react-navigation/native'

const ChatScreen = (props) => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderComponent title="Klasa 1A" backIcon={true} isChat={true} navigation={navigation} />

            <View style={styles.container}>
                <View style={{ marginTop: 10, marginBottom: 20, flex: 1 }}>
                    <FlatList
                        data={ChatData}
                        keyExtractor={(item) => item.id.toString()}
                        contentContainerStyle={{ gap: 10 }}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item }) => (
                            <ChatItem item={item} />
                        )}
                    />
                </View>
            </View>
            <View style={styles.writeChatContainer}>
                <View style={styles.inputContainer}>
                    <VectorIcon type="Feather" name="mic" size={25} color="#fca311" style={{borderRightWidth: 1, borderColor: '#fca311', paddingRight: 2}} />
                    <TextInput
                        placeholder='Shkruaj mesazhin'
                        style={{width: '78%', marginLeft: 5}}
                    />
                    <VectorIcon type="Entypo" name="attachment" size={25} style={{marginLeft: 5}} color="#fca311" />
                </View>
                <View style={styles.sendContainer}>
                    <VectorIcon type="Ionicons" name="send" size={30} color="#fca311" />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ChatScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 5,
        paddingBottom: 0
    },
    writeChatContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 1,
        left: 0,
        width: '100%',
    },
    inputContainer: {
        flexDirection: 'row',
        width: '82%',
        paddingVertical: 10,
        paddingHorizontal: 8,
        backgroundColor: 'white',
        borderRadius: 8
    },
    sendContainer: {
        backgroundColor: 'white',
        borderRadius: 50,
        padding: 8
    }
})