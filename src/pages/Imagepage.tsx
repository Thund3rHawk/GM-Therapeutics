import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import BackButton from '../components/BackButton';
import ImageView from '../components/ImageView';
import skin_card from '../assets/skin_card.jpg';

const Imagepage = () => {
  const {width, height} = Dimensions.get('window');
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height,
        width,
      }}>
      <View
        style={{
          width,
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 15,
        }}>
        <BackButton/>
        <Text style={[styles.text, {fontSize: 20}]}>reminder card</Text>
        <TouchableOpacity style={{}}>
          {/* <Image source={ham_image} style={{width: 30, height: 30, right: 0}} /> */}
        </TouchableOpacity>
      </View>

      <View
        style={{
          display: 'flex',
          marginBottom: 90,
          height: '70%',
          borderRadius: 100,
        }}>
            <ImageView image={skin_card} heading='Skin Care' about = "Revitalize your skin with our nourishing skincare line, featuring natural ingredients to hydrate, protect, and rejuvenate. Achieve a glowing, smooth complexion with products designed to enhance your skin's health and radiance."/>
            
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    headingText: {
      fontWeight: '500',
      color: 'black',
      textAlign: 'center',
    },
    text: {
      textAlign: 'right',
      color: '#354169',
      fontWeight: 'bold',
      fontSize: 10,
      textTransform: 'uppercase'
    },
    button: {
      paddingVertical: 10,
      borderRadius: 280,
      alignItems: 'center',
      justifyContent: 'center',
      position: 'absolute',
      top: 560,
      bottom: 90,
      marginTop: 200,
      height: 50,
      left: '10%',
    },
    buttonText: {
      color: 'Red',
      fontSize: 18,
      fontWeight: 'bold',
    },
    welcomeText: {
      fontWeight: 'bold',
      color: '#354169',
    },
  });

export default Imagepage;
