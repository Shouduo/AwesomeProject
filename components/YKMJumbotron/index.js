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

import {LeftArrow, DownArrow} from '../../assets/svg/index';
import {timeFormatter, QRCODE_TEMPLATE} from '../../utils/public';
import QRCode from 'react-native-qrcode-svg';
import {Context} from '../../App';
import TestResult from '../TestResult';

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
    <View style={styles.backgroundContainer}>
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
              <View style={styles.selectionButton}>
                <Text
                  style={{
                    width: '100%',
                    textAlign: 'center',
                    ...styles.buttonText,
                  }}>
                  {info.name}
                </Text>
              </View>
              <View style={styles.selectionButton}>
                <Text
                  style={{
                    width: '100%',
                    textAlign: 'right',
                    color: '#4a92f4',
                    ...styles.buttonText,
                  }}>
                  成员管理
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
        <View style={styles.leftRightContainer}>
          <View style={styles.sectionContent}>
            <Image
              source={require('../../assets/img/48_hours_negtive.png')}
              style={{aspectRatio: 156 / 111, height: 109}}
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
              style={{aspectRatio: 156 / 111, height: 109}}
              resizeMode="cover"
            />
          </View>
        </View>
        {/* 底部说明 */}
        <View style={styles.bottomContainer}>
          <Text style={styles.instructionText}>依托全国一体化政务服务平台</Text>
          <Text style={styles.instructionText}>
            实现跨省（区、市）数据共享和互通互认
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundContainer: {
    position: 'relative',
    backgroundColor: '#5791ED',
    marginTop: -96,
    paddingTop: 96,
    overflow: 'hidden',
  },
  mainContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 2,
    paddingHorizontal: 20,
  },
  headerContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
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
    marginBottom: 12,
  },
  contentSelection: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 46,
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
    padding: 12,
  },
  realTime: {
    fontSize: 32,
    fontWeight: '500',
    paddingHorizontal: 24,
  },
  qrcode: {
    marginTop: 18,
  },
  leftRightContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
    paddingHorizontal: 2,
  },
  sectionContent: {
    // height: 116,
    // width: '48%',
    padding: 3,
    borderRadius: 4,
    backgroundColor: '#ffffff',
  },
  testTime: {
    position: 'absolute',
    width: '100%',
    // backgroundColor: '#8361d4',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 12,
    left: 3,
    bottom: 16,
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
