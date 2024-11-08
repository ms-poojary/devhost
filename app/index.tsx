import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={styles.container}>
      <Text>index</Text>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        alignContent:'center'
    }
})

export default index