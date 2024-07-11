import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Button } from 'react-native'

export default class FancyCard extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingTesxt}>
          Trending places </Text>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <Image source={
              {
                uri: 'https://cdn.pixabay.com/photo/2018/04/04/13/38/nature-3289812_1280.jpg'
              }
            } style={styles.cardImage} />
            <View style={styles.textContainer}>
              <Text style={styles.cardheadingt}>Save Tree</Text>
              <Text style={styles.cardParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit natus voluptatem qui quam porro exercitationem, similique repellendus pariatur, sit accusantium nemo, sequi itaque ut error id a. Incidunt, nam!
              </Text>
            </View>
            <View style={styles.btnContainer}>
              <Button title='More About me'></Button>
            </View>
          </View>
          <View style={styles.card}>
            <Image source={
              {
                uri: 'https://cdn.pixabay.com/photo/2017/07/25/01/22/cat-2536662_1280.jpg'
              }
            } style={styles.cardImage} />
            <View style={styles.textContainer}>
              <Text style={styles.cardheadingt}>Cat</Text>
              <Text style={styles.cardParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit natus voluptatem qui quam porro exercitationem, similique repellendus pariatur, sit accusantium nemo, sequi itaque ut error id a. Incidunt, nam!
              </Text>
            </View>
            <View style={styles.btnContainer}>
              <Button title='More About me'></Button>
            </View>
          </View>
          <View style={styles.card}>
            <Image source={
              {
                uri: 'https://cdn.pixabay.com/photo/2016/11/28/21/20/woman-1866081_1280.jpg'
              }
            } style={styles.cardImage} />
            <View style={styles.textContainer}>
              <Text style={styles.cardheadingt}>Good Morning</Text>
              <Text style={styles.cardParagraph}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste fugit natus voluptatem qui quam porro exercitationem, similique repellendus pariatur, sit accusantium nemo, sequi itaque ut error id a. Incidunt, nam!
              </Text>
            </View>
            <View style={styles.btnContainer}>
              <Button title='More About me'></Button>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headingTesxt: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 10,
    color: '#333'
  },
  cardContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginLeft: 10,
    paddingHorizontal: 10,
  },
  card: {
    width: '100%',
    height: 'auto',
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 2,
    flex: 1,
    justifyContent: 'center',
    overflow: 'hidden',
    marginBottom: 20,
    paddingBottom: 15,

  },
  cardImage: {
    width: '100%',
    height: 350,
    borderTopLeftRadius: 6,
    marginBottom: 10
  },
  textContainer: {
    paddingHorizontal: 10,

  },
  cardheadingt: {
    textAlign: 'left',
    color: '#333',
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 30,


  },
  cardParagraph: {
    color: '#666',
    fontSize: 20,
    marginBottom: 15,
    textAlign: 'left',
    lineHeight: 20,
  },
  btnContainer: {
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 10,
    justifyContent: 'center',
  },

})
