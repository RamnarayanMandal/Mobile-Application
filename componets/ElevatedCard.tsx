import { ScrollView, StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

const screenWidth = Dimensions.get('window').width;

export default function ElevatedCard() {
    return (
        <View style={styles.mainContainer}>
            <Text style={styles.headingText}>ElevatedCard</Text>
            <ScrollView 
                horizontal={true} 
                style={styles.scrollView} 
                contentContainerStyle={styles.scrollContainer}
                showsHorizontalScrollIndicator={true}
            >
                <View style={[styles.card, styles.card1]}>
                    <Text style={styles.cardText}>Red</Text>
                </View>
                <View style={[styles.card, styles.card2]}>
                    <Text style={styles.cardText}>Purple</Text>
                </View>
                <View style={[styles.card, styles.card3]}>
                    <Text style={styles.cardText}>Green</Text>
                </View>
                <View style={[styles.card, styles.card4]}>
                    <Text style={styles.cardText}>Blue</Text>
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        paddingTop: 5,
    },
    headingText: {
        marginLeft: 10,
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    scrollView: {
        height: 170,
    },
    scrollContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        height: 150,
        width: screenWidth * 0.7, // Ensure each card is wide enough
        borderRadius: 10,
    },
    card1: {
        backgroundColor: '#ebafab',
    },
    card2: {
        backgroundColor: '#a29bfe',
    },
    card3: {
        backgroundColor: '#8ed47d',
    },
    card4: {
        backgroundColor: '#74b9ff',
    },
    cardText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
    },
});

