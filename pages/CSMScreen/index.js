import React from 'react';
import {StyleSheet, ScrollView, StatusBar, View} from 'react-native';
import WindowButtons from '../../components/WindowButtons';
import CSMMainView from '../../components/CSMMainView';

const CSMScreen = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" />
      <WindowButtons showHome onClose={() => navigation.navigate('Index')} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <CSMMainView />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#4C8BFF',
    height: '100%',
  },
});

export default CSMScreen;
