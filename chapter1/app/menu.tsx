import { View, StyleSheet, ImageBackground, Image, FlatList, Appearance, Platform, SafeAreaView, ScrollView } from 'react-native'
import React from 'react'
import { ThemedText } from '@/components/ThemedText'
import { Colors } from '@/constants/Colors'
const icedCoffeeImg = require('@/assets/images/iced-coffee.png')
import { MENU_ITEMS } from '@/constants/MenuItems'
import MenuImages from '@/constants/MenuImages'

export default function menuScreen() {
    const colorScheme = Appearance.getColorScheme()
    const theme = colorScheme === 'dark' ? Colors.dark : Colors.light

    const styles = createStyles(theme, colorScheme)
    // const separator = () => <View style={styles.separator}></View>
    const listHeader = () => <>
        <ImageBackground source={icedCoffeeImg} style={styles.banner} resizeMode='cover'>
            <ThemedText style={styles.title}>Check Out Menu!</ThemedText>
        </ImageBackground>
    </>
    const noItemsPlaceholder = () => <ThemedText style={styles.no_items}>Currently No Items</ThemedText>

    return (
        <View style={styles.container}>
            <FlatList
                data={MENU_ITEMS}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
                // ItemSeparatorComponent={separator}
                ListHeaderComponent={listHeader}
                ListEmptyComponent={noItemsPlaceholder}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <ThemedText style={styles.text}>{item.title}</ThemedText>
                        <ThemedText style={styles.sm_text}>{item.description}</ThemedText>
                        <Image source={MenuImages[item.id - 1]} style={styles.image} />
                    </View>
                )}
            />
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
            paddingBottom: 10,
            backgroundColor: theme.background,
            flex: 1
        },
        banner: {
            width: '100%',
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            overflow: 'hidden',
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
        card: {
            backgroundColor: theme.background,
            padding: 16,
            borderRadius: 16,
            marginHorizontal: 16,
            marginVertical: 8,
            shadowColor: theme.tint,
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.1,
            shadowRadius: 8,
            elevation: 3,
            backdropFilter: 'blur(10px)',
        },
        text: {
            color: theme.tint,
            fontSize: 20,
            fontWeight: '600',
            marginBottom: 4,
        },
        sm_text: {
            color: theme.tint,
            fontSize: 14,
            marginBottom: 12,
        },
        image: {
            width: '100%',
            height: 150,
            borderRadius: 12,
            resizeMode: 'cover',
        },
        no_items: {
            marginHorizontal: 'auto',
            marginTop: 100
        },


        // separator: {
        //     height: 1,
        //     backgroundColor: colorScheme === 'dark' ? 'papayawhip' : 'black',
        //     width: '50%',
        //     maxWidth: 300,
        //     marginHorizontal: 'auto',
        //     marginBottom: 10
        // },
        
    })
}