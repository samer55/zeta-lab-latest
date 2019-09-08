import React from 'react';
import { View, TouchableWithoutFeedback,Text,TouchableOpacity } from 'react-native';
import PhotoGallery from './PhotoGallery';

const Item = ({ item, onPhotoOpen }) =>
  <TouchableOpacity onPress={() => onPhotoOpen(item)}>
    <View>
      <PhotoGallery.Photo
        photo={item}
        style={{
          alignSelf: 'stretch',
          width: 170,
          height: 190,
      margin:5

        }}
      />
    </View>
  </TouchableOpacity>;

export default Item;
