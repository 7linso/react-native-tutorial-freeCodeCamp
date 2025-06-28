import { View, Text, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText'
const icedCoffeeImg = require('@/assets/images/iced-coffee.png')

const explore = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={icedCoffeeImg} style={styles.banner} resizeMode='cover'>
        <ThemedText style={styles.title}>Welcome!</ThemedText>
      </ImageBackground>

      <ThemedText style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam quis nesciunt eaque libero at saepe inventore perspiciatis ut, vero corporis omnis, maxime, voluptas tenetur atque quaerat ipsum ad eveniet.</ThemedText>
      <ThemedText style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam quis nesciunt eaque libero at saepe inventore perspiciatis ut, vero corporis omnis, maxime, voluptas tenetur atque quaerat ipsum ad eveniet.</ThemedText>
      <ThemedText style={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum numquam quis nesciunt eaque libero at saepe inventore perspiciatis ut, vero corporis omnis, maxime, voluptas tenetur atque quaerat ipsum ad eveniet.</ThemedText>
    </View>
  )
}

export default explore

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  banner: {
    width: '100%',
    height: 200, 
    justifyContent: 'center',
    alignItems: 'center', 
  },
  title: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff', 
    paddingTop: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    shadowRadius: 4,
    // Shadow for Android
    elevation: 5,
  },
  text: {
    color: "white",
    fontSize: 14,
    margin: 10,
  }
})