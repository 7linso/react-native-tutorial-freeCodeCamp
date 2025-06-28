import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const icedCoffeeImg = require('@/assets/images/iced-coffee.png')

const app = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={icedCoffeeImg} resizeMode='cover'
                style={styles.image}>
                <Text style={styles.title}>Coffee Shop</Text>
                <Link style={{ marginHorizontal: 'auto' }} href='/contact' asChild>
                    <Pressable style={styles.btn}>
                        <Text style={styles.btnText}>Contact</Text>
                    </Pressable>
                </Link>
            </ImageBackground>
        </View>
    )
}

export default app

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    title: {
        color: "white",
        fontSize: 42,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 120,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 4,

        // Shadow for Android
        elevation: 5,
    },
    btnText: {
        color: "white",
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        padding: 4
    },
    btn: {
        borderRadius: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        padding: 10,
        justifyContent: 'center'
    },
    image: {
        width: '100%',
        height: '100%',
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center'
    }
})