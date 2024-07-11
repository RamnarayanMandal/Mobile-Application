import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ContactList() {
    const screenWidth = Dimensions.get('window').height;
    const contacts = [
        {
            id: 1,
            name: 'John Doe',
            phone: '123-456-7890',
            email: 'johndoe@example.com',
            imgurl: 'https://cdn.pixabay.com/photo/2020/09/02/18/03/girl-5539094_1280.jpg'
        }, {
            id: 2,
            name: 'Jane Smith',
            phone: '987-654-3210',
            email: 'janesmith@example.com',
            imgurl: 'https://cdn.pixabay.com/photo/2024/06/08/16/16/ai-generated-8817146_960_720.jpg'
        }, {
            id: 3,
            name: 'Alice Johnson',
            phone: '555-555-5555',
            email: 'alicejohnson@example.com',
            imgurl: 'https://cdn.pixabay.com/photo/2024/06/14/19/04/ai-generated-8830405_1280.jpg'
        }, {
            id: 4,
            name: 'Bob Brown',
            phone: '777-777-7777',
            email: 'bobbrown@example.com',
            imgurl: 'https://cdn.pixabay.com/photo/2016/11/29/08/48/child-1868518_1280.jpg'
        }, {
            id: 5,
            name: 'Charlie Wilson',
            phone: '333-333-3333',
            email: 'charliewilson@example.com',
            imgurl: 'https://cdn.pixabay.com/photo/2017/08/07/15/16/girl-2604837_1280.jpg'
        }, {
            id: 6,
            name: 'David Davis',
            phone: '222-222-2222',
            email: 'daviddavis@example.com',
            imgurl: 'https://cdn.pixabay.com/photo/2017/09/08/13/18/woman-2728727_1280.jpg'
        }, {
            id: 7,
            name: 'Eve Evans',
            phone: '444-444-4444',
            email: 'eveevans@example.com',
            imgurl: 'https://cdn.pixabay.com/photo/2022/10/28/09/01/fantasy-7552663_1280.jpg'
        }, {
            id: 8,
            name: 'Frank Foster',
            phone: '666-666-6666',
            email: 'frankfoster@example.com',
            imgurl: 'https://cdn.pixabay.com/photo/2022/10/19/19/56/woman-7533438_640.jpg'
        }, {
            id: 9,
            name: 'Grace Garcia',
            phone: '888-888-8888',
            email: 'gracegarcia@example.com',
            imgurl: 'https://cdn.pixabay.com/photo/2024/04/18/03/17/ai-generated-8703394_1280.png'
        }, {
            id: 10,
            name: 'Henry Harris',
            phone: '999-999-9999',
            email: 'henryharris@example.com',
            imgurl: 'https://cdn.pixabay.com/photo/2024/06/13/10/44/ai-generated-8827247_1280.jpg'
        }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Contact List</Text>
            <ScrollView
                style={styles.scrollView}
                showsVerticalScrollIndicator={true}
                scrollEnabled={true}>
                {contacts.map((contact) => (
                    <View key={contact.id} style={styles.card}>
                        <View style={styles.imageContainer}>
                            <Image style={styles.image} source={{ uri: contact.imgurl }} />
                        </View>
                        <View>
                            <Text style={styles.name}>{contact.name}</Text>
                            <Text style={styles.phone}>{contact.phone}</Text>
                            <Text style={styles.email}>{contact.email}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        
    },
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        margin: 10,
        color: '#333',
    },
    card: {
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 2,
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        marginBottom: 10,
        paddingHorizontal: 20,
       
    },
    imageContainer: {
        width: 100,
        height: 100,
        borderRadius: 50,
        overflow: 'hidden',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    phone: {
        fontSize: 14,
        marginBottom: 5,
    },
    email: {
        fontSize: 14,
        marginBottom: 5,
    },
    scrollView: {
        flex: 1,
        marginBottom: 20,
    },
});
