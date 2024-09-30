import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import BackButton from '../components/BackButton';
import ImageView from '../components/ImageView';
import omego_card from '../assets/omego_card.jpg';

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
        <BackButton />
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
        <ImageView
          image={omego_card}
          heading="General Physician & Orthopedic"
          // btnName="View All"
          about="Our clinic offers expert care in both general medicine and orthopedics, providing comprehensive health solutions. From routine check-ups to specialized bone and joint treatments, we prioritize your overall well-being and mobility."
        />
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
    textTransform: 'uppercase',
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
