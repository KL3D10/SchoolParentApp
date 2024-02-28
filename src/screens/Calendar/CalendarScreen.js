import { SafeAreaView, SectionList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComponent from '../../components/General/HeaderComponent'
import IconButton from '../../components/General/IconButton'
import VectorIcon from '../../utils/VectorIcon'
import { CalendarData } from '../../assets/data/CalendarData'
import EventItem from '../../components/Calendar/EventItem'
import { useNavigation } from '@react-navigation/native'

const CalendarScreen = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderComponent title={'Kalendari'} backIcon={false} navigation={navigation} />
            <View style={styles.container}>
                <View style={styles.firstRowContainer}>
                    <IconButton title="Pushime" onPress={() => navigation.navigate('VacationsScreen')} icon={<VectorIcon type="MaterialCommunityIcons" name="beach" color="white" size={20} />} />
                    <IconButton title="Orari" onPress={() => navigation.navigate('ScheduleScreen')} icon={<VectorIcon type="MaterialCommunityIcons" name="table-clock" color="white" size={20} />} />
                </View>
                <View style={{marginTop: 10, flex: 1}}>
                    <SectionList
                        sections={CalendarData}
                        keyExtractor={(item) => item.id.toString()}
                        stickySectionHeadersEnabled={false}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ gap: 10 }}
                        renderItem={(item) => <EventItem item={item} />}
                        renderSectionHeader={({section: {month, year, color}}) => (
                            <Text style={{color: color, fontSize: 20, fontWeight: 'bold'}}>{month} {year}</Text>
                        )}
                    />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CalendarScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 15
    },
    firstRowContainer: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'flex-end'
    }
})