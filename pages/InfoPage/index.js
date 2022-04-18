import React from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import WindowButtons from '../../components/WindowButtons';
import InputField from '../../components/InputField';
import {Context} from '../../App';
import {INITIAL_INFO, stringMasker} from '../../utils/public';

const InfoPage = ({navigation}) => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const {info, updateInfo} = React.useContext(Context);
  const [tempInfo, setTempInfo] = React.useState(info);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <WindowButtons onClose={() => navigation.navigate('Index')} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={styles.scrollViewContainer}>
        <View style={styles.viewContainer}>
          <Text style={styles.pageTitleText}>InfoPage</Text>
          <InputField
            fieldKey="name"
            title="Name"
            value={tempInfo.name}
            onChangeText={text => setTempInfo({...tempInfo, name: text})}
            onBlur={() => {
              setTempInfo({
                ...tempInfo,
                name: stringMasker(
                  tempInfo.name,
                  INITIAL_INFO.name,
                  false,
                  '*',
                  1,
                  2,
                ),
              });
            }}
          />
          <InputField
            fieldKey="cid"
            title="Identification Num"
            value={tempInfo.cid}
            onChangeText={text => setTempInfo({...tempInfo, cid: text})}
            onBlur={() =>
              setTempInfo({
                ...tempInfo,
                cid: stringMasker(tempInfo.cid, INITIAL_INFO.cid),
              })
            }
          />
          <InputField
            fieldKey="phone"
            title="Phone Num"
            value={tempInfo.phone}
            onChangeText={text => setTempInfo({...tempInfo, phone: text})}
            onBlur={() =>
              setTempInfo({
                ...tempInfo,
                phone: stringMasker(tempInfo.phone, INITIAL_INFO.phone),
              })
            }
          />
          <InputField
            fieldKey="placeName"
            title="Place Name"
            value={tempInfo.placeName}
            onChangeText={text => setTempInfo({...tempInfo, placeName: text})}
          />
          <InputField
            fieldKey="placeId"
            title="Place Id"
            value={tempInfo.placeId}
            onChangeText={text => setTempInfo({...tempInfo, placeId: text})}
            onBlur={() =>
              setTempInfo({
                ...tempInfo,
                placeId: stringMasker(tempInfo.placeId, INITIAL_INFO.placeId),
              })
            }
          />
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={{
                ...styles.bottomButton,
                borderWidth: 1,
                borderColor: 'rgba(128, 128, 128, 0.8)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
              }}
              onPress={() => setTempInfo(INITIAL_INFO)}>
              <Text style={styles.buttonText}>Reset</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                ...styles.bottomButton,
                backgroundColor: 'rgba(0, 128, 256, 0.8)',
              }}
              onPress={() => {
                updateInfo(tempInfo);
                Alert.alert('Information Saved.', undefined, [
                  {text: 'OK', onPress: () => navigation.goBack()},
                ]);
              }}>
              <Text
                style={{
                  ...styles.buttonText,
                  color: 'rgba(255, 255, 255, 0.8)',
                }}>
                Save
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottomContainer}>
            <Text style={styles.pageBottomText}>
              *Info above are required to display a page or generate a qrcode.
            </Text>
            <Text style={styles.pageBottomText}>
              *At your own risk on any information leak or legal problem.
            </Text>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    height: '100%',
    width: '100%',
  },
  viewContainer: {
    paddingTop: 48,
    paddingHorizontal: 24,
  },
  pageTitleText: {
    fontSize: 30,
    color: 'rgba(0, 128, 256, 0.8)',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    marginTop: 24,
    height: 48,
  },
  bottomButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    width: '46%',
  },
  buttonText: {
    fontSize: 18,
  },
  bottomContainer: {
    marginTop: 24,
  },
  pageBottomText: {
    marginTop: 12,
    fontSize: 16,
    color: 'rgba(256, 0, 0, 0.8)',
  },
});

export default InfoPage;
