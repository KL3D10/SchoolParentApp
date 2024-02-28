import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VectorIcon from '../utils/VectorIcon'

const ClassPupilItem = (props) => {
    const getIconByGender = (gender) => {
        switch (gender) {
            case 'Male':
                return <VectorIcon type="Fontisto" name="male" size={35} color="#10388d" />
            case 'Female':
                return <VectorIcon type="Fontisto" name="female" size={35} color="#10388d" />
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <View style={styles.genderIconContainer}>
                    {getIconByGender(props.item.gender)}
                </View>
                <View style={styles.secondRowContainer}>
                    <Text style={{ color: '#fca311', fontSize: 18, fontWeight: '600' }}>{props.item.name}</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                        <VectorIcon type="FontAwesome" name={"birthday-cake"} color="gray" />
                        <Text style={{ color: 'grey', fontWeight: '400', marginLeft: 5 }}>{props.item.birthday}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.classContainer}>
                <Text style={{color: 'white', fontSize: 18}}>{props.item.class}</Text>
            </View>
        </View>
    )
}

export default ClassPupilItem

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 8,
        borderBottomColor: '#fca311',
        borderBottomWidth: 0.5,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    genderIconContainer: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 500,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1.5,
        borderColor: '#fca311'
    },
    secondRowContainer: {
        marginLeft: 10
    },
    classContainer: {
        backgroundColor: '#fca311',
        borderRadius: 8,
        padding: 5
    }
})