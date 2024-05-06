import React from 'react';
import { Image, Text, View } from 'react-native';
import Slider from '@react-native-community/slider';
import { Category } from '../SetLimit';
import { IUpdateCategoryLimit } from './interface';
const UpdateCategoryLimit = ({ category, currentSpendings,updateLimit }: IUpdateCategoryLimit) => {
  const renderData = {
    'beauty': {'image':require('../../assets/icons/Beauty.png'), color:'#5ACCD1'},
    'house': {'image':require('../../assets/icons/House.png'), color:'#DFA1A7'},
    'clothing': {'image':require('../../assets/icons/TShirt.png'), color:'#DABB4F'},
    'food':{'image': require('../../assets/icons/Food.png'), color:'#76A6D3'},
    'gym': {'image':require('../../assets/icons/Gym.png'), color:'#5281AC'},
    'health': {'image':require('../../assets/icons/Health.png'), color:'#EE9E38'},
  };

  const onSliderValueChange = (category:string,value: number) => {
    updateLimit(category,value)
  };

  return (
    <View style={{ width: '90%', backgroundColor: '#fff', borderRadius: 10, alignSelf: 'center', marginTop: 10 }}>
      <View style={{ paddingTop: 10, paddingHorizontal: 10, flexDirection: 'row', justifyContent: 'space-between' }}>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image source={renderData[category].image} style={{ width: 30, height: 30, marginRight: 10 }} />
          <Text style={{ color: '#000', fontSize: 16 }}>{category}</Text>
        </View>

        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text style={{ color: '#000', marginRight: 5 }}>AED</Text>
          <Image source={require('../../assets/icons/edit.png')} style={{ width: 20, height: 20 }} />
        </View>
      </View>

      <Slider
        style={{ width: '90%', height: 40, alignSelf: 'center', marginTop: 10 }}
        minimumValue={0}
        maximumValue={currentSpendings.limit}
        value={currentSpendings.spent}
        minimumTrackTintColor={renderData[category].color}
        maximumTrackTintColor="#F1F0F5"
        onValueChange={(value)=>onSliderValueChange(category,value)}
      />

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 10, marginBottom: 10 }}>
        <Text style={{ color: '#000' }}>0</Text>
        <Text style={{ color: '#000' }}>{currentSpendings.limit}</Text>
      </View>
    </View>
  );
};

export default UpdateCategoryLimit;
