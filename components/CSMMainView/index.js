import React from 'react';
import {StyleSheet, View, Text, TextInput, ImageBackground} from 'react-native';
import {timeFormatter, QRCODE_TEMPLATE} from '../../utils/public';
import QRCode from 'react-native-qrcode-svg';
import {Context} from '../../App';
// import {Trumpet} from '../../assets/svg/index';

const nowTime = Date.now();

const CSMMainView = () => {
  const {info} = React.useContext(Context);
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
    <ImageBackground
      source={require('../../assets/img/csm_background.png')}
      style={{aspectRatio: 1125 / 2436, ...styles.imageBackground}}
      resizeMode="cover">
      <Text style={styles.placeId}>{info.placeId}</Text>
      <View style={styles.ticketContainer}>
        {/* 地点 姓名 时间 */}
        <View style={styles.placeContainer}>
          <Text numberOfLines={1} style={styles.placeText}>{info.placeName}</Text>
          <View style={styles.nameAndTime}>
            <Text style={styles.grayText}>{info.name}</Text>
            <Text style={{marginLeft: 4, ...styles.grayText}}>
              {timeFormatter(realTime, 'yyyy-MM-dd HH:mm')}
            </Text>
          </View>
        </View>
        {/* 二维码 */}
        {/* <View style={styles.qrcodeContainer}> */}
        <ImageBackground
          source={require('../../assets/img/qrcode_border.png')}
          style={{
            aspectRatio: 509 / 509,
            height: 164,
            ...styles.qrcodeContainer,
          }}
          resizeMode="cover">
          <QRCode
            value={JSON.stringify({
              ...QRCODE_TEMPLATE,
              cid: info.cid,
              name: info.name,
              phone: info.phone,
              t: Math.floor(nowTime / 1000),
            })}
            size={150}
            logo={require('../../assets/img/lion_logo.png')}
            color="#459A4A"
          />
        </ImageBackground>
        {/* </View> */}
        {/* 核酸 疫苗 */}
        <View style={styles.testAndVaccineContainer}>
          <ImageBackground
            source={require('../../assets/img/test_and_vaccine_background.png')}
            style={{aspectRatio: 887 / 297, height: 100}}
            resizeMode="cover">
            <Text style={styles.testTime}>
              {timeFormatter(nowTime - 16.2547 * 3600000, 'yyyy-MM-dd HH:mm')}
            </Text>
          </ImageBackground>
        </View>
      </View>
      {/* 播报 */}
      {/* <View style={styles.broadcast}>
        <Trumpet />
        <View style={{marginTop: 8}}>
          <Text style={styles.broadcastText}>播</Text>
          <Text style={styles.broadcastText}>报</Text>
        </View>
      </View> */}
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    marginTop: -48,
    width: '100%',
  },
  placeId: {
    position: 'absolute',
    top: 143,
    left: 120,
    color: 'rgba(256, 256, 256, 0.8)',
    fontSize: 12,
  },
  ticketContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
    top: 172,
    marginHorizontal: 25,
  },
  placeContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 14,
  },
  placeText: {
    fontSize: 22,
    fontWeight: '600',
    paddingHorizontal: 24,
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
  qrcodeContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  testAndVaccineContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 24,
    marginBottom: 14,
    height: 108,
    width: 295,
    // borderRadius: 8,
    overflow: 'hidden',
  },
  // broadcast: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  //   position: 'absolute',
  //   paddingVertical: 12,
  //   paddingHorizontal: 10,
  //   // borderRadius: 4,
  //   borderTopRightRadius: 2,
  //   borderBottomRightRadius: 2,
  //   top: 320,
  //   left: 25,
  //   backgroundColor: '#edf3fe',
  // },
  // broadcastText: {
  //   marginTop: 2,
  //   color: '#4E86F7',
  //   fontSize: 14,
  //   fontWeight: '600',
  // },
  sectionContent: {
    // padding: 12,
  },
  testTime: {
    position: 'absolute',
    width: '50%',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 11,
    bottom: 11,
  },
});

export default CSMMainView;
