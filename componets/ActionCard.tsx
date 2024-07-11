import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ActionCard = () => {
  function optionWebsite(websiteLink: string) {
    Linking.openURL(websiteLink)


  }
  return (
    <View >
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={styles.cardBody}>
        <View style={styles.card}>
          <Text style={styles.cardHeading}>
           <Text>
           What's new in javascript 21 - ES12
           </Text>

          </Text>
          <Image source={{
            uri: 'https://cdn.pixabay.com/photo/2024/07/07/16/05/ai-generated-8879202_1280.jpg',
          }} style={styles.cardImage}></Image>
        </View>
        <Text style={styles.paraphaph} numberOfLines={5}>
          JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.
        </Text>


        <TouchableOpacity style={styles.footer}>
          <Text style={styles.linkText} onPress={() => optionWebsite('https://developer.mozilla.org/en-US/docs/Web/JavaScript')}>Read More</Text>
          <Text style={styles.linkText} onPress={() => optionWebsite('https://github.com/RamnarayanMandal')}>follow me</Text>
        </TouchableOpacity>



      </View>
    </View>
  )
}

export default ActionCard

const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginLeft: 10,
    color: '#333',
  },
  cardBody: {
    width: '100%',
    marginBottom: 20,
    marginTop: 8,
    padding: 10,
    backgroundColor: '#eeeee4',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
    borderRadius: 10,
    paddingVertical: 20,
    paddingHorizontal: 10,
    marginLeft: 10,
    alignSelf: 'center',

  },
  card: {
    justifyContent: 'center',
    shadowColor: '#000',
   
  },
  cardHeading: {
    fontSize: 20,
    flex: 1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginTop: 5,
    marginBottom: 5,
    color: '#333',
  },
  cardImage: {
    width: '100%',
    height: 400,
    resizeMode: 'cover',
    marginBottom: 10,
    marginTop: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  paraphaph: {
    marginTop: 10,
    marginLeft: 10,
    color: '#333',
    lineHeight: 20,
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'justify',


  },

  linkText: {
    color: '#007bff',
    textDecorationLine: 'underline',
    marginLeft: 5,
    fontSize: 16,
    backgroundColor:"#fff",
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  footer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // alignSelf: 'flex-end',
    width: '100%',
    paddingHorizontal: 10,
  }

})