import React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
import WindowButtons from '../../components/WindowButtons';
import YKMJumbotron from '../../components/YKMJumbotron';
import YKMExtraService from '../../components/YKMExtraService';

const YKMScreen = ({navigation}) => {
  return (
    <View>
      <StatusBar barStyle="light-content" />
      <WindowButtons onClose={() => navigation.navigate('Index')} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <YKMJumbotron />
        <YKMExtraService />
      </ScrollView>
    </View>
  );
};

export default YKMScreen;
