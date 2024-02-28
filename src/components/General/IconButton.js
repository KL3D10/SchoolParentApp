import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const IconButton = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Text style={styles.textStyle}>{props.title}</Text>
      {props.icon}
    </TouchableOpacity>
  )
}

export default IconButton

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginLeft: 12,
        backgroundColor: '#10388d',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 8,
        alignItems: 'center'
    },
    textStyle: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
        marginRight: 5
    }
})