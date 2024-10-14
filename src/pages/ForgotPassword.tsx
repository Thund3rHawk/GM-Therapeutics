import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Button from '../components/Button';
import lock from '../assets/lock.png';
import {useNavigation} from '@react-navigation/native';
import BackButton from '../components/BackButton';

const ForgotPassword = () => {
  const {height} = Dimensions.get('window');
  const navigation = useNavigation();
  return (
    <View style={{height, backgroundColor: 'white'}}>
      <BackButton />
      <Text style={styles.text}>ForgotPassword</Text>
      <View style={{display: 'flex', justifyContent: 'center', height: '70%'}}>
        <View
          style={{
            height: '54%',
            display: 'flex',
            justifyContent: 'space-between',

            marginHorizontal: 20,
          }}>
          {/* <Text style={[styles.welcomeText, {textAlign: 'left'}]}>Welcome !!</Text> */}
          <View
            style={{
              borderColor: 'black',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              borderWidth: 1,
              borderRadius: 100,
              paddingVertical: 8,
              paddingHorizontal: 10,
              position: 'relative',
            }}>
            <Text
              style={{
                backgroundColor: 'white',
                color: 'black',
                fontWeight: '900',
                height: 20,
                position: 'absolute',
                top: -10,
                left: 30,
                textTransform: 'uppercase'
              }}>
              enter new password
            </Text>

            <Image
              source={lock}
              style={{height: 20, width: 20, marginLeft: 10, top: 15}}
            />
            <TextInput
              placeholder="Enter new password"
              style={{width: '85%'}}
              placeholderTextColor="gray"
            />
          </View>
          <View
            style={{
              borderColor: 'black',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'row',
              borderWidth: 1,
              borderRadius: 100,
              paddingVertical: 8,
              paddingHorizontal: 10,
              position: 'relative',
            }}>
            <Text
              style={{
                backgroundColor: 'white',
                color: 'black',
                fontWeight: '900',
                height: 20,
                position: 'absolute',
                top: -10,
                left: 30,
                textTransform: 'uppercase'
              }}>
              confirm new password
            </Text>

            <Image
              source={lock}
              style={{height: 20, width: 20, marginLeft: 10, top: 15}}
            />
            <TextInput
              placeholder="Confirm new password"
              style={{width: '85%'}}
              placeholderTextColor="gray"
            />
          </View>
       

          {/* <Text style={[styles.welcomeText, {textAlign: 'right'}]}>
            Forgot Password?
          </Text> */}
          <Button
            buttonName="Change Password"
            onPress={() => navigation.navigate('Login')}
          />
        </View>
        <View
          style={{
            // height: '7%',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 20,
          }}>
          {/* <View style={{flexDirection: 'row'}}>
            <Text style={styles.headingText}>Don’t have an account yet? </Text>
            <TouchableOpacity onPress={()=>{navigation.navigate('SignUp')}}>
              <Text style={{color: '#354169', fontWeight: 'bold'}}>
                Register Now
              </Text>
            </TouchableOpacity>
          </View> */}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headingText: {
    fontWeight: 'bold',
    color: 'black',
  },
  text: {
    textAlign: 'center',
    color: '#354169',
    marginVertical: 30,
    fontWeight: 'bold',
    fontSize: 25,
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

export default ForgotPassword;
