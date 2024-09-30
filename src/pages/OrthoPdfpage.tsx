import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import BackButton from '../components/BackButton';
import Pdf from 'react-native-pdf';


const OrhtoPdfpage = () => {
  const {width, height} = Dimensions.get('window');
  const source = {uri: `bundle-assets://pdf/Ortho.pdf`, cache: true };
  console.log (source.uri);
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
        {/* <Text style={[styles.text, {}]}>PDF</Text> */}
        <TouchableOpacity style={{}}>
          {/* <Image source={ham_image} style={{ width: 30, height: 30, }} /> */}
        </TouchableOpacity>
      </View>
      <View>
        <Pdf
          source={source}
          onLoadComplete={(numberOfPages, filePath) => {
            console.log(`Number of pages: ${numberOfPages}`);
          }}
          onPageChanged={(page, numberOfPages) => {
            console.log(`Current page: ${page}`);
          }}
          onError={error => {
            console.log(error);
          }}
          style={styles.pdf}
        />        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontWeight: '400',
    color: 'black',
    textAlign: 'right',
    fontSize: 25,
    margin: 30,
    paddingHorizontal: 15,
    borderRightWidth: 7,
    borderBottomWidth: 1,

    borderColor: 'black',
  },
  text: {
    textAlign: 'right',
    color: '#354169',
    fontWeight: 'bold',
    fontSize: 25,
  },
  button: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  welcomeText: {
    fontWeight: 'bold',
    color: '#354169',
    textAlign: 'justify',
  },
  pdf: {
    flex:1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
}
});

export default OrhtoPdfpage;
