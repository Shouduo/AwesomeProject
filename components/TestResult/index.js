import React from 'react';
import {StyleSheet, Text, TextInput, useColorScheme, View} from 'react-native';
import {CircleCheck} from '../../assets/svg/index';
import LinearGradient from 'react-native-linear-gradient';

const TestResult = ({showIcon}) => {
  return (
    <LinearGradient colors={['#9A7FCD', '#6E40CB']} style={styles.tagContainer}>
      <View style={styles.tagHeader}>
        <CircleCheck color="#ffffff" />
        <Text style={{...styles.textColor, fontSize: 15}}>核酸检测</Text>
      </View>
      <View style={styles.tagCenter}>
        <Text
          style={{
            ...styles.textColor,
            fontSize: 56,
            marginVertical: -12,
            // lineHeight: 56,
            transform: [{scaleX: 0.8}],
            fontWeight: '700',
          }}>
          48
        </Text>
        <Text style={{...styles.textColor, width: 48, fontSize: 16}}>
          小时阴性
        </Text>
      </View>
      <View style={styles.tagFooter}>
        <Text style={{...styles.textColor}}>2022-03-02 18:22</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    borderWidth: 1,
    borderColor: 'pink',
    // backgroundColor: 'linear-gradient(to bottom, pink, yellow)',
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagCenter: {
    // borderWidth: 1,
    // borderColor: 'pink',
    display: 'flex',
    paddingVertical: 4,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagFooter: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textColor: {
    color: '#ffffff',
  },
});

export default TestResult;
