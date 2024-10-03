import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native'
import Card from '../components/Card'
import image_gyno from '../assets/omego_card.jpg'
import gyno_image from '../assets/gyno_image.png';
import BackButton from '../components/BackButton'

const Gynopage = () => {
    const {width, height} = Dimensions.get('window');
    return (
      <View style={[styles.conainer, {height, width}]}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 15,
            width,
          }}>
          <BackButton/>
  
          <TouchableOpacity style={{}}>
            {/* <Image source={ham_image} style={{width: 30, height: 30}} /> */}
          </TouchableOpacity>
        </View>
        <View style = {{height: '20%', width, paddingHorizontal: 20, justifyContent: 'space-between'}}>
          <Text style={styles.welcomeText}>Gynecology & Obstetrics</Text>
          {/* <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
              <Text style={styles.headingText}> Lorem Ipsum</Text>
              <TouchableOpacity>
              <Text style={[styles.text, {}]}> View All &gt;</Text>
              </TouchableOpacity>
          </View> */}
        </View>
  
        <View style={[styles.cardsSection, {width}]}>
          <Card
            bgColor="#C8A64E"
            imageUrl={gyno_image}
            heading="gyno folder"
            // about="Lorem ipsum dolor sit amet,"
            textColor="#000000"
            navigationScreen = 'GynoPdfPage'
          />
          <Card
            bgColor="#354169"
            imageUrl={image_gyno}
            heading="Reminder Card"
            // about="Reminder Cart"
            textColor="#FFFFFF"
            navigationScreen = 'Gynoimage'
          />
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    conainer: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    headingText: {
      fontWeight: 'bold',
      color: '#3B3939',
    },
    cardsSection: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 10,
      height: '48%',
      borderRadius: 90,
      marginBottom: 100
    },
    text: {
      textAlign: 'right',
      color: '#1E1E1E',
      fontWeight: 'bold',
      fontSize: 10,
    },
    welcomeText: {
      textTransform: 'uppercase',
      fontWeight: 'bold',
      color: '#354169',
      fontSize: 35,
    },
  });



export default Gynopage