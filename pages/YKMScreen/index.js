import React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import WindowButtons from '../../components/WindowButtons';
import Jumbotron from '../../components/Jumbotron';
import ExtraService from '../../components/ExtraService';

const YKMScreen = ({navigation}) => (
  <View>
    <StatusBar barStyle="light-content" />
    <WindowButtons onClose={() => navigation.navigate('Index')} />
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Jumbotron />
      <ExtraService />
    </ScrollView>
  </View>
);

export default YKMScreen;
