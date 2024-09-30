import {useNavigation} from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, Image, View, ImageSourcePropType} from 'react-native';

interface props{
  bgColor: string,
  imageUrl: ImageSourcePropType,
  heading: string,
  about?: string,
  textColor: string,
  navigationScreen: string
}

const Card: React.FC<props> = ({
  bgColor,
  imageUrl,
  heading,
  about,
  textColor,
  navigationScreen,
}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={[
        {
          width: '90%',
          backgroundColor: `${bgColor}`,
          padding: 15,
          flexDirection: 'row',
          borderRadius: 20,
        },
      ]}
      onPress={() => {
        navigation.navigate(`${navigationScreen}`);
      }}>
      <Image
        source={imageUrl}
        style={{height: 120, width: 110, borderRadius: 10, marginRight: 20}}
      />
      <View style={{flexDirection: 'column', justifyContent: 'center'}}>
        <Text style={{color: `${textColor}`, fontWeight: 'bold', textTransform: 'uppercase'}}>
          {heading}
        </Text>
        <Text style={{color: `${textColor}`, fontWeight: '400'}}>{about}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
