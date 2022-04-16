import React from 'react';
import {
  StyleSheet,
  ScrollView,
  StatusBar,
  View,
  Text,
  Image,
  ImageBackground,
} from 'react-native';
import WindowButtons from '../../components/WindowButtons';
import Jumbotron from '../../components/Jumbotron';
import ExtraService from '../../components/ExtraService';
import {timeFormatter} from '../../utils/public';
import QRCode from 'react-native-qrcode-svg';
import {a as qrcodeData} from '../../utils/test';

const nowTime = Date.now();

const CSMScreen = ({navigation}) => {
  const [realTime, setRealTime] = React.useState(nowTime);
  const timer = React.useRef(null);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      setRealTime(Date.now());
    }, 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="light-content" />
      <WindowButtons showHome onClose={() => navigation.navigate('Index')} />
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ImageBackground
          source={require('../../assets/img/csm_background.png')}
          style={{aspectRatio: 1125 / 2436, ...styles.imageBackground}}
          resizeMode="cover">
          <View style={styles.ticketContainer}>
            {/* 地点 姓名 时间 */}
            <View style={styles.placeContainer}>
              <Text style={styles.placeText}>高发西岸花园-东门</Text>
              <View style={styles.nameAndTime}>
                <Text style={styles.grayText}>刘*俊</Text>
                <Text style={{marginLeft: 4, ...styles.grayText}}>
                  {timeFormatter(realTime, 'yyyy-MM-dd HH:mm')}
                </Text>
              </View>
            </View>
            {/* 二维码 */}
            <View style={styles.qrcodeContainer}>
              <QRCode
                value={JSON.stringify({
                  ...qrcodeData,
                  t: Math.floor(nowTime / 1000),
                })}
                size={160}
                color="#459A4A"
              />
            </View>
            {/* 核酸 疫苗 */}
            <View style={styles.testAndVaccineContainer}>
              <ImageBackground
                source={require('../../assets/img/test_and_vaccine_background.png')}
                style={{aspectRatio: 889 / 331, height: 108}}
                resizeMode="cover">
                <Text style={styles.testTime}>
                  {timeFormatter(
                    nowTime - 16 * 60 * 60 * 1000,
                    'yyyy-MM-dd HH:mm',
                  )}
                </Text>
              </ImageBackground>
            </View>
          </View>
        </ImageBackground>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#4C8BFF',
    height: '100%',
  },
  imageBackground: {
    marginTop: -48,
    width: '100%',
  },
  ticketContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    top: 192,
    marginHorizontal: 25,
  },
  placeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 18,
  },
  placeText: {
    fontSize: 22,
    fontWeight: '600',
  },
  nameAndTime: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignContent: 'center',
    marginTop: 8,
  },
  grayText: {
    color: '#999999',
  },
  qrcodeContainer: {},
  testAndVaccineContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 36,
    marginBottom: 14,
    height: 108,
    width: 295,
    borderRadius: 4,
    overflow: 'hidden',
  },
  sectionContent: {
    // padding: 12,
  },
  testTime: {
    position: 'absolute',
    width: '50%',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 12,
    bottom: 16,
  },
});

export default CSMScreen;
