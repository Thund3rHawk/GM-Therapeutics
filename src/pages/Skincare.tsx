import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Card from '../components/Card';
import image_13 from '../assets/image_13.png';
import image_2 from '../assets/image_2.png';
import BackButton from '../components/BackButton';

const Skincare = () => {
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
        <BackButton />

        <TouchableOpacity style={{}}>
          {/* <Image source={ham_image} style={{width: 30, height: 30}} /> */}
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: '15%',
          width,
          paddingHorizontal: 20,
          justifyContent: 'space-between',
        }}>
        <Text style={styles.welcomeText}>SKIN CARE</Text>       
      </View>

      <View style={[styles.cardsSection, {width}]}>
        <Card
          bgColor="#C8A64E"
          imageUrl={image_2}
          heading="PDF"
          about="Lorem ipsum dolor sit amet,"
          textColor="#000000"
          navigationScreen = 'SkinCarePdfPage'
        />
        <Card
          bgColor="#354169"
          imageUrl={image_13}
          heading="IMAGE"
          about="Reminder Cart"
          textColor="#FFFFFF"
          navigationScreen="ImagePage"
        />
      </View>
    </View>
  );
};

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
    marginBottom: 100,
  },
  text: {
    textAlign: 'right',
    color: '#1E1E1E',
    fontWeight: 'bold',
    fontSize: 10,
  },
  welcomeText: {
    fontWeight: 'bold',
    color: '#354169',
    fontSize: 35,
  },
});

export default Skincare;
