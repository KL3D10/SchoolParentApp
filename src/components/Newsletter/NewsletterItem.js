import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import VectorIcon from '../../utils/VectorIcon'

const NewsletterItem = (props) => {
    return (
        <TouchableOpacity onPress={() => props.navigation.navigate('NewsletterDetailsScreen', {newsletter: props.item})}>
            <ImageBackground
                source={{ uri: props.item.image }}
                resizeMode="cover"
                style={styles.image}
                imageStyle={{ borderRadius: 6 }}>
                    <VectorIcon type="MaterialCommunityIcons" name="gesture-tap" color="white" size={25} style={styles.tapIcon} />
                <View style={styles.bottomContainer}>
                    <View style={styles.headingContainer}>
                    <Text numberOfLines={2} style={styles.titleText}>{props.item.heading}</Text>
                    </View>
                    <View style={styles.addressContainer}>
                        <VectorIcon type="Entypo" name="location" color="#fca311" size={15}/>
                        <Text style={styles.addressText}>{props.item.address}</Text>
                    </View>
                    <View style={styles.addressContainer}>
                        <VectorIcon type="Entypo" name="calendar" color="#fca311" size={15}/>
                        <Text style={styles.addressText}>{props.item.date}</Text>
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default NewsletterItem

const styles = StyleSheet.create({
    image: {
        justifyContent: 'flex-end',
        width: '100%',
        height: 200,
    },
    tapIcon: {
        position: 'absolute',
        top: 10,
        right: 15
    },
    bottomContainer: {
        padding: 5
    },
    headingContainer: {
        backgroundColor: '#fca311',
        alignSelf: 'flex-start',
        paddingHorizontal: 5,
        borderRadius: 5
    },
    titleText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '700',
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 2,
        backgroundColor: 'white',
        alignSelf: 'flex-start',
        borderRadius: 5,
        paddingHorizontal: 5
    },
    addressText: {
        fontSize: 15,
        color: '#fca311',
        fontWeight: '600',
        marginLeft: 8
    },
    blurProps: {
        backgroundColor: 'rgba(0, 0, 0, 0.5',
        zIndex: 100
    }
})