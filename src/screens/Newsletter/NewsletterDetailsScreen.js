import { FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComponent from '../../components/General/HeaderComponent'
import VectorIcon from '../../utils/VectorIcon'

const NewsletterDetailsScreen = (props) => {
    const navigation = useNavigation()
    const newsletterData = props.route.params.newsletter
    console.log(newsletterData)

    const ImageItem = ({item}) => {
        return (
            <Image source={{ uri: item }} resizeMode="cover" style={{width: 120, height: 120, borderRadius: 4}} />
        )
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <HeaderComponent title={newsletterData.heading} backIcon={true} navigation={navigation} />
            <View style={{height: '95%'}}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <ImageBackground
                    source={{ uri: newsletterData.image }}
                    resizeMode="cover"
                    style={styles.image}>
                    <View style={styles.imageRowContainer}>
                        <View style={styles.addressContainer}>
                            <VectorIcon type="Entypo" name="location" color="white" size={15} />
                            <Text style={styles.addressText}>{newsletterData.address}</Text>
                        </View>
                        <View style={styles.addressContainer}>
                            <VectorIcon type="Entypo" name="calendar" color="white" size={15} />
                            <Text style={styles.addressText}>{newsletterData.date}</Text>
                        </View>
                    </View>
                </ImageBackground>
                <View style={styles.headingContainer}>
                    <Text style={styles.headingText}>{newsletterData.heading}</Text>
                </View>
                <View style={styles.infoContainer}>
                    <View style={styles.publishInfoContainer}>
                        <View style={styles.authorContainer}>
                            <Image source={{ uri: newsletterData.authorImage }} resizeMode='cover' style={styles.authorImage} />
                            <Text style={[styles.authorText, { marginLeft: 6 }]}>{newsletterData.author}</Text>
                        </View>
                        <Text style={styles.authorText}>{newsletterData.publishDate}</Text>
                    </View>

                    <View style={styles.descriptionContainer}>
                        <Text style={styles.descriptionText}>{newsletterData.description}</Text>
                    </View>
                </View>
                <View style={styles.galleryContainer}>
                    <Text style={{ fontSize: 20, color: '#fca311' }}>Galeria</Text>
                    <View style={styles.imagesContainer}>
                        <FlatList
                            data={newsletterData.gallery}
                            keyExtractor={(item) => item.toString()}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            contentContainerStyle={{ gap: 10 }}
                            renderItem={({ item }) => (
                                <ImageItem item={item} />
                            )}
                        />
                    </View>
                </View>
            </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default NewsletterDetailsScreen

const styles = StyleSheet.create({
    container: {
        height: '100%',
        marginTop: 1
    },
    image: {
        justifyContent: 'flex-end',
        width: '100%',
        height: 220,
    },
    imageRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    addressText: {
        fontSize: 15,
        color: 'white',
        fontWeight: '600',
        marginLeft: 8
    },
    headingContainer: {
        backgroundColor: '#fca311',
        alignItems: 'center',
        paddingVertical: 5
    },
    headingText: {
        fontSize: 23,
        fontWeight: 'bold',
        color: 'white',
        fontStyle: 'italic'
    },
    infoContainer: {
        padding: 10,
        borderBottomColor: '#fca311',
        borderBottomWidth: 1.5
    },
    publishInfoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 5
    },
    authorContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    authorImage: {
        width: 38,
        height: 38,
        borderRadius: 50,
        borderColor: '#fca311',
        borderWidth: 1
    },
    authorText: {
        color: 'grey',
        fontWeight: '600'
    },
    descriptionContainer: {
        marginTop: 10
    },
    descriptionText: {
        fontSize: 15,
        letterSpacing: 1
    },
    galleryContainer: {
        padding: 10
    },
    imagesContainer: {
        marginTop: 10
    }
})