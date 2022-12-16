import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Titulo = () => {
  return (
    <View>
      <Text style={styles.fonteBlue}>IMC 2</Text>
    </View>
  )
}

export default Titulo

const styles = StyleSheet.create({
    fonteBlue:{
        color: '#b20001',
        fontWeight: 'bold',
        fontSize: 30,
     },
})