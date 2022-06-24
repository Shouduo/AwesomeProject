import React from 'react';
import {
  StyleSheet,
  Text,
  ImageBackground,
  Image,
  View,
  Animated,
  Easing,
} from 'react-native';

import {LeftArrow, DownArrow, Trumpet} from '../../assets/svg/index';
import {timeFormatter, QRCODE_TEMPLATE} from '../../utils/public';
import QRCode from 'react-native-qrcode-svg';
import {Context} from '../../App';
// import TestResult from '../TestResult';
import LinearGradient from 'react-native-linear-gradient';

const nowTime = Date.now();

const YKMJumbotron = () => {
  const {info} = React.useContext(Context);
  const [realTime, setRealTime] = React.useState(nowTime);
  const waveAnim = React.useRef(new Animated.Value(0)).current;
  const timer = React.useRef(null);

  React.useEffect(() => {
    Animated.loop(
      Animated.timing(waveAnim, {
        toValue: -40,
        duration: 500,
        easing: Easing.linear,
        useNativeDriver: false,
      }),
    ).start();
  }, [waveAnim]);

  React.useEffect(() => {
    timer.current = setInterval(() => {
      setRealTime(Date.now());
    }, 1000);
    return () => {
      clearInterval(timer.current);
    };
  }, []);

  return (
    <LinearGradient
      colors={['#5791ED', '#ECF0FB']}
      start={{x: 0, y: 0.55}}
      end={{x: 0, y: 0.85}}
      style={styles.backgroundContainer}>
      {/* 背景波纹 */}
      <Animated.View
        style={{
          position: 'absolute',
          top: waveAnim,
          left: 0,
          right: 0,
          bottom: 0,
        }}>
        <ImageBackground
          source={require('../../assets/img/background_wave.png')}
          style={{aspectRatio: 1125 / 2436}}
          resizeMode="cover"
        />
      </Animated.View>
      {/* 前景内容 */}
      <View style={styles.mainContainer}>
        {/* <，粤康码 */}
        <View style={styles.headerContainer}>
          <View style={styles.headerButton}>
            <LeftArrow color="white" />
          </View>
          <Text style={styles.headerTitle}>粤康码</Text>
          <View style={styles.headerButton}>
            <LeftArrow color="rgba(0,0,0,0)" />
          </View>
        </View>
        {/*姓名 二维码 健康信息 */}
        <View style={styles.contentContainer}>
          <ImageBackground
            source={require('../../assets/img/content_container_background_vaccined.png')}
            style={{aspectRatio: 1005 / 1224}}
            resizeMode="contain">
            {/*深圳 姓名 成员管理*/}
            <View style={styles.contentSelection}>
              <View style={styles.selectionButton}>
                <Text
                  style={{
                    ...styles.buttonText,
                  }}>
                  {info.city}
                </Text>
                <DownArrow color="black" style={{marginLeft: 4}} />
              </View>
              <View
                style={{
                  ...styles.selectionButton,
                  backgroundColor: '#ECF3FE',
                  width: 'auto',
                  borderRadius: 4,
                  paddingHorizontal: 8,
                }}>
                <Text
                  style={{
                    ...styles.buttonText,
                    // width: '100%',
                    padding: 6,
                    textAlign: 'center',
                  }}>
                  {info.name}
                </Text>
                <View
                  style={{
                    width: 1,
                    height: 18,
                    backgroundColor: '#cfddf7',
                  }}
                />
                <Text
                  style={{
                    ...styles.buttonText,
                    color: '#4E86F7',
                    padding: 6,
                    borderLeftWidth: 4,
                    // width: '100%',
                    textAlign: 'center',
                  }}>
                  管理
                </Text>
              </View>
              <View
                style={{...styles.selectionButton, justifyContent: 'flex-end'}}>
                <Trumpet />
                <Text
                  style={{
                    ...styles.buttonText,
                    padding: 2,
                    // width: '100%',
                    textAlign: 'right',
                    color: '#4E86F7',
                  }}>
                  播报
                </Text>
              </View>
            </View>
            {/* 时间 二维码 */}
            <View style={styles.qrcodeContainer}>
              <Text style={styles.realTime}>
                {timeFormatter(realTime, 'MM-dd HH:mm:ss')}
              </Text>
              <View style={styles.qrcode}>
                <QRCode
                  value={JSON.stringify({
                    ...QRCODE_TEMPLATE,
                    cid: info.cid,
                    name: info.name,
                    phone: info.phone,
                    t: Math.floor(nowTime / 1000),
                  })}
                  size={180}
                  logo={require('../../assets/img/lion_logo.png')}
                  color="#029b44"
                />
              </View>
            </View>
          </ImageBackground>
        </View>
        {/* 核酸检测 新冠疫苗 */}
        <View style={styles.leftRightOuter}>
          <View style={styles.leftRightContainer}>
            <View style={styles.sectionContent}>
              <Image
                source={require('../../assets/img/48_hours_negtive.png')}
                style={{aspectRatio: 156 / 111, height: 116}}
                resizeMode="cover"
              />
              <Text style={styles.testTime}>
                {timeFormatter(nowTime - 36.192 * 3600000, 'yyyy-MM-dd HH:mm')}
              </Text>
              {/* <TestResult /> */}
            </View>
            <View style={styles.sectionContent}>
              <Image
                source={require('../../assets/img/vaccine_injected.png')}
                style={{aspectRatio: 156 / 111, height: 116}}
                resizeMode="cover"
              />
            </View>
          </View>
        </View>
        {/* 底部说明 */}
        {/* <View style={styles.bottomContainer}>
          <Text style={styles.instructionText}>依托全国一体化政务服务平台</Text>
          <Text style={styles.instructionText}>
            实现跨省（区、市）数据共享和互通互认
          </Text>
        </View> */}
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    position: 'relative',
    // backgroundColor: '#5791ED',
    // backgroundColor: '#FFFFFF',
    marginTop: -96,
    paddingTop: 96,
    overflow: 'hidden',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 4,
    // paddingBottom: 4,
    paddingHorizontal: 20,
  },
  headerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerButton: {
    // position: 'relative',
    // left: 12,
    // top: 4,
  },
  headerTitle: {
    fontSize: 18,
    color: 'white',
  },
  contentContainer: {
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 6,
  },
  contentSelection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 68,
    paddingHorizontal: 24,
  },
  selectionButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '25%',
  },
  buttonText: {
    letterSpacing: -1,
    fontSize: 15,
    fontWeight: '300',
  },
  qrcodeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 0,
  },
  realTime: {
    fontSize: 30,
    fontWeight: '500',
    paddingHorizontal: 24,
  },
  qrcode: {
    marginTop: 21,
  },
  leftRightOuter: {
    backgroundColor: '#ffffff',
    borderRadius: 8,
    // marginBottom: 18,
    padding: 2,
  },
  leftRightContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 6,
    // marginBottom: 18,
    // padding: 3,
    overflow: 'hidden',
    // paddingHorizontal: 2,
  },
  sectionContent: {
    // height: 116,
    // width: '48%',
    // padding: 3,
    // borderRadius: 4,
    // backgroundColor: '#ffffff',
  },
  testTime: {
    position: 'absolute',
    width: '100%',
    // backgroundColor: '#8361d4',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 12,
    left: 3,
    bottom: 12,
  },
  bottomContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 18,
  },
  instructionText: {
    color: '#ffffff',
    lineHeight: 22,
    fontSize: 15,
  },
});

export default YKMJumbotron;
