import React from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';

const ExtraService = () => {
  return (
    <View style={styles.extraContainer}>
      <ImageBackground
        source={require('../../assets/img/extra_service.png')}
        resizeMode="contain"
        style={{height: '100%'}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  extraContainer: {
    height: 1000,
  },
});

export default ExtraService;
