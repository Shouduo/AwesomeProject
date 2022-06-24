import React from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';

const YKMExtraService = () => {
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
    backgroundColor: '#ECF0FB',
    marginTop: 12,
    paddingHorizontal: 20,
    height: 280,
  },
});

export default YKMExtraService;
