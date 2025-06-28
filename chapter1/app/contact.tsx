import { View, StyleSheet, ImageBackground, Appearance } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText'
const icedCoffeeImg = require('@/assets/images/iced-coffee.png')
import { Colors } from '@/constants/Colors'


export default function ContactScreen(){
  const colorScheme = Appearance.getColorScheme()
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light

  const styles = createStyles(theme, colorScheme)

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

interface themeProps {
  text: string;
  background: string;
  headerBackground: string;
  tint: string;
  icon: string;
  tabIconDefault: string;
  tabIconSelected: string;
}


function createStyles(theme: themeProps, colorScheme: 'light' | 'dark' | null | undefined) {
  return StyleSheet.create({
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
      color: theme.tint,
      paddingTop: 40,
      shadowColor: theme.background,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      shadowRadius: 4,
      // Shadow for Android
      elevation: 5,
    },
    text: {
      color: theme.tint,
      fontSize: 14,
      margin: 10,
    }
  })
}