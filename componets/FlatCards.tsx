import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>FlatCards</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.card1]}>
                    <Text style={styles.cardText}> Red</Text>
                </View>
                <View style={[styles.card, styles.card2]}>
                    <Text style={styles.cardText}> perpul</Text>
                </View>
                <View style={[styles.card, styles.card3]}>
                    <Text style={styles.cardText}> green</Text>
                </View>
                <View style={[styles.card, styles.card4]}>
                    <Text style={styles.cardText}> blue</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginTop:5

    },
    container: {
        margin: 5,
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5,
    },
    card: {
        width: '20%',
        height: 100,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card1: {
        backgroundColor: 'red',

    },
    card2: {
        backgroundColor: '#ebafab',

    },
    card3: {
        backgroundColor: '#8ed47d',

    },
    card4: {
        backgroundColor: '#3c59e8',

    },
    cardText: {
        color: '#FFFFFF',
        fontSize: 10,
        fontWeight: '400'
    }
})
