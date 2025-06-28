import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
const icedCoffeeImg = require('@/assets/images/iced-coffee.png')

const explore = () => {
  return (
    <View style={styles.container}>
      <Image source={icedCoffeeImg} style={styles.banner}/>
      <Text style={styles.text}>Welcome to Our Coffee Shop</Text>
      <Text style={styles.sm_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam quis nesciunt eaque libero at saepe inventore perspiciatis ut, vero corporis omnis, maxime, voluptas tenetur atque quaerat ipsum ad eveniet.</Text>
      <Text style={styles.sm_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam quis nesciunt eaque libero at saepe inventore perspiciatis ut, vero corporis omnis, maxime, voluptas tenetur atque quaerat ipsum ad eveniet.</Text>
      <Text style={styles.sm_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam quis nesciunt eaque libero at saepe inventore perspiciatis ut, vero corporis omnis, maxime, voluptas tenetur atque quaerat ipsum ad eveniet.</Text>
    </View>
  )
}

export default explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  banner: {
    width: '100%',
    height: '20%',
    marginBottom: 20,
  },
  sm_text: {
    color: "white",
    fontSize: 14,
    margin: 10,
  }
})