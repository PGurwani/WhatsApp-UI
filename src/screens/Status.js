import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native'
import React, {useState, useEffect} from 'react'
import { FontAwesome5 } from 'react-native-vector-icons'

const Status = () => {
  return (
    <View style = {styles.container}>
      <Text>Status</Text>
    </View>
  )
}

export default Status



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });