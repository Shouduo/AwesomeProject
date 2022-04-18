import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  Button,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';

const InputField = ({fieldKey, title, value, onChangeText, ...rest}) => {
  // const [value, setValue] = React.useState(defaultValue);
  return (
    <View style={styles.inputFieldContainer}>
      <Text style={styles.titleText}>*{title}</Text>
      <TextInput
        // defaultValue={defaultValue}
        value={value}
        onChangeText={onChangeText}
        style={styles.textInput}
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
