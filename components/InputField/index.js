import React from 'react';
import {StyleSheet, Text, TextInput, useColorScheme, View} from 'react-native';

const InputField = ({fieldKey, title, value, onChangeText, ...rest}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View style={styles.inputFieldContainer}>
      <Text style={styles.titleText}>*{title}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        style={{
          ...styles.textInput,
          color: isDarkMode ? 'rgba(256, 256, 256, 0.8)' : 'rgba(0, 0, 0, 1)',
        }}
        {...rest}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputFieldContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignContent: 'stretch',
    marginTop: 16,
  },
  titleText: {
    fontSize: 16,
    color: '#999999',
  },
  textInput: {
    padding: 8,
    marginTop: 8,
    fontSize: 20,
    borderWidth: 1,
    borderColor: '#999999',
  },
});

export default InputField;
