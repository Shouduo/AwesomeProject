import React from 'react';
import {StyleSheet, ScrollView, StatusBar, View} from 'react-native';
import WindowButtons from '../../components/WindowButtons';
import CSMMainView from '../../components/CSMMainView';
import LinearGradient from 'react-native-linear-gradient';

const CSMScreen = ({navigation}) => {
  return (
    <LinearGradient
      colors={['#4E87F7', '#3D6EF6']}
      style={styles.mainContainer}>
      <StatusBar barStyle="light-content" />
      <WindowButtons showHome onClose={() => navigation.navigate('Index')} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <CSMMainView />
      </ScrollView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    // backgroundColor: '#4E87F7',
    height: '100%',
  },
});

export default CSMScreen;
