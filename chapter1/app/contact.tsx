import { View, StyleSheet, ImageBackground, Appearance, ScrollView } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText'
const icedCoffeeImg = require('@/assets/images/iced-coffee.png')
import { Colors } from '@/constants/Colors'

export default function ContactScreen() {
  const colorScheme = Appearance.getColorScheme()
  const theme = colorScheme === 'dark' ? Colors.dark : Colors.light

  const styles = createStyles(theme, colorScheme)

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <ImageBackground source={icedCoffeeImg} style={styles.banner} resizeMode='cover'>
        <ThemedText style={styles.title}>Welcome!</ThemedText>
      </ImageBackground>

      <View style={styles.section}>
        <ThemedText style={styles.heading}>About Our Coffee Shop</ThemedText>
        <ThemedText style={styles.text}>
          Our journey began with a simple idea: coffee should bring people together. Founded by two lifelong friends who bonded over late-night espresso and early-morning sunrise brews, our coffee shop is built on warmth, connection, and craft.
        </ThemedText>
        <ThemedText style={styles.text}>
          Every cup we serve tells a story — from ethically sourced beans to the care our baristas pour into each drink. We're proud to support local suppliers and farmers who share our values of sustainability, quality, and community.
        </ThemedText>
        <ThemedText style={styles.text}>
          Whether you're stopping by for a quick caffeine boost, catching up with a friend, or spending an afternoon writing your next chapter, we’ve created a space where everyone feels at home. Cozy corners, curated playlists, and the aroma of fresh coffee — welcome to your neighborhood sanctuary.
        </ThemedText>
      </View>

      <View style={styles.section}>
        <ThemedText style={styles.heading}>Contact Us</ThemedText>
        <ThemedText style={styles.text}>📍 123 Coffee Street, Winnipeg, MB, Canada</ThemedText>
        <ThemedText style={styles.text}>📞 (204) 555-5555</ThemedText>
        <ThemedText style={styles.text}>✉️ hello@coffeeshop.ca</ThemedText>
        <ThemedText style={styles.text}>🕒 Mon–Fri: 7am – 6pm | Sat–Sun: 8am – 4pm</ThemedText>
      </View>
    </ScrollView>
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
      paddingBottom: 10,
      backgroundColor: theme.background,
      flex: 1
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
    },
    heading: {
      fontSize: 20,
      fontWeight: 'bold',
      color: theme.tint,
      marginBottom: 8,
    },
    section: {
      paddingHorizontal: 20,
      paddingVertical: 16,
    },
  })
}