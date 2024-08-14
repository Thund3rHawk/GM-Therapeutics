import banner_image from '../assets/banner_image.png';
import logo_image from '../assets/logo_image.png';
import React from 'react';
import {
  View,
  Image,
  Dimensions,
} from 'react-native';
import Button from '../components/Button';

const Getstarted = () => {
  const {width, height} = Dimensions.get('window');
  return (
    <View style={{display: 'flex', justifyContent: 'space-between', height}}>
      <Image source={banner_image} style={{width, height: 300}} />
      <Image
        source={logo_image}
        style={{width: 160, height: 160, marginLeft: 115}}
      />
      <View style={{marginBottom: 30, marginHorizontal: 10}}>
        <Button buttonName="Get Started" />
      </View>
    </View>
  );
};

export default Getstarted;
