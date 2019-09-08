import React from 'react';
import { View, TouchableWithoutFeedback,Text,Dimensions,TouchableOpacity } from 'react-native';
import PhotoGallery from './PhotoGallery';
const rows = 3;
const cols = 2;
const marginHorizontal = 4;
const marginVertical = 4;
const width = (Dimensions.get('window').width / cols) - (marginHorizontal * (cols + 1));
const height = (Dimensions.get('window').height / rows) - (marginVertical * (rows + 1));

const Item = ({ item, onPhotoOpen }) =>
  <TouchableOpacity  onPress={() => onPhotoOpen(item)}>
      <PhotoGallery.Photo
        photo={item}
        style={{
                width: 170,
                height: 190,
                margin:5
        }}
      />
  </TouchableOpacity>;

export default Item;
