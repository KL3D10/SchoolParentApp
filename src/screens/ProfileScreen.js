import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import HeaderComponent from '../components/General/HeaderComponent'
import VectorIcon from '../utils/VectorIcon'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
  const navigation = useNavigation()

  const ItemCard = (props) => {
    return (
      <View style={{ flexDirection: 'row', borderRadius: 8, borderWidth: 1, paddingHorizontal: 8, paddingVertical: 5, borderColor: 'grey', alignItems: 'center' }}>
        {props.icon}
        <Text style={{ fontSize: 15, color: 'grey' }}>{props.text}</Text>
      </View>
    )
  }

  const ItemRow = (props) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 5 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          {props.icon}
          <Text style={{ marginLeft: 5, color: 'grey', fontSize: 16 }}>{props.text}</Text>
        </View>
          <Text style={{ fontSize: 16 }}>{props.info}</Text>
      </View>
    )
  }

  const NavigationItem = (props) => {
    return (
      <TouchableOpacity style={{ backgroundColor: props.color, flexDirection: 'row', borderRadius: 8, padding: 12, alignItems: 'center', justifyContent: 'center' }} onPress={props.onPress}>
        {props.icon}
        <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold', marginLeft: 8 }}>{props.text}</Text>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <ImageBackground source={{ uri: "https://img.freepik.com/free-photo/cheerful-african-guy-with-narrow-dark-eyes-fluffy-hair-dressed-elegant-white-shirt_273609-14082.jpg" }} resizeMode='cover' style={styles.headerImage}>
          <View style={styles.overlay}>
            <View style={styles.roundProfileContainer}>
              <Image source={{ uri: "https://img.freepik.com/free-photo/cheerful-african-guy-with-narrow-dark-eyes-fluffy-hair-dressed-elegant-white-shirt_273609-14082.jpg" }} resizeMode='cover' style={{ height: 120, width: 120, borderRadius: 500 }} />
            </View>
            <View style={{ backgroundColor: '#fca311', borderRadius: 8, position: 'absolute', top: 5, right: 5, padding: 5 }}>
              <VectorIcon type="Ionicons" name="settings-sharp" color="white" size={25} />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.bodyContainer}>
          <View style={styles.headerInfo}>
            <Text style={styles.nameText}>Abby Addams</Text>
            <Text style={styles.schoolText}>Shkolla "Ismail Qemali"</Text>
            <View style={styles.cardsRowContainer}>
              <ItemCard icon={<VectorIcon type="MaterialCommunityIcons" name="account-child-outline" size={23} color="grey" />} text="Wednesday Addams" />
            </View>
          </View>
          <View style={styles.infoContainer}>
            <Text style={{ color: "#fca311", fontSize: 20, fontWeight: 'bold', marginBottom: 15 }}>Informacion</Text>
            <ItemRow icon={<VectorIcon type="Fontisto" name="email" size={23} color="grey" />} text="Email" info="abby.addams@gmail.com" />
            <ItemRow icon={<VectorIcon type="AntDesign" name="phone" size={23} color="grey" />} text="Telefon" info="+355 69 69 69 699" />
            <ItemRow icon={<VectorIcon type="AntDesign" name="calendar" size={23} color="grey" />} text="Regjistruar" info="18 Mars 2022" />
          </View>
          <View style={styles.buttonsContainer}>
            <NavigationItem icon={<VectorIcon type="Ionicons" name="school" size={23} color="white" />} text="Klasa 1A" color="#fca311" onPress={() => navigation.navigate('ClassScreen')} />
            <NavigationItem icon={<VectorIcon type="MaterialIcons" name="logout" size={23} color="white" />} text="Dil" color="red" />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  headerImage: {
    height: 200
  },
  overlay: {
    height: "100%",
    width: "100%",
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  roundProfileContainer: {
    position: 'absolute',
    backgroundColor: '#fca311',
    padding: 8,
    borderRadius: 500,
    bottom: '-35%',
    left: '33%'
  },
  bodyContainer: {
    paddingHorizontal: 15,
    marginTop: 80
  },
  headerInfo: {
    alignItems: 'center'
  },
  nameText: {
    fontWeight: '600',
    fontSize: 20,
    color: 'grey'
  },
  schoolText: {
    fontSize: 16,
    fontWeight: '500',
    color: "#fca311",
    marginTop: 5
  },
  cardsRowContainer: {
    flexDirection: 'row',
    marginTop: 5,
    justifyContent: 'space-between'
  },
  infoContainer: {
    marginTop: 25,
    paddingBottom: 5,
    borderBottomWidth: 1.5,
    borderColor: '#fca311'
  },
  buttonsContainer: {
    marginTop: 15,
    paddingHorizontal: 25,
    gap: 10
  }
})