import React from 'react';
import {StyleSheet, View, Text, TextInput, ImageBackground} from 'react-native';
import {timeFormatter, QRCODE_TEMPLATE} from '../../utils/public';
import QRCode from 'react-native-qrcode-svg';
import {a as qrcodeData} from '../../utils/test';
import {Context} from '../../App';
import {Trumpet} from '../../assets/svg/index';

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
          <Text style={styles.placeText}>{info.placeName}</Text>
          <View style={styles.nameAndTime}>
            <Text style={styles.grayText}>{info.name}</Text>
            <Text style={{marginLeft: 4, ...styles.grayText}}>
              {timeFormatter(realTime, 'yyyy-MM-dd HH:mm')}
            </Text>
          </View>
        </View>
        {/* 二维码 */}
        <View style={styles.qrcodeContainer}>
          <QRCode
            value={JSON.stringify({
              ...QRCODE_TEMPLATE,
              cid: info.cid,
              name: info.name,
              phone: info.phone,
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
            style={{aspectRatio: 889 / 331, height: 112}}
            resizeMode="cover">
            <Text style={styles.testTime}>
              {timeFormatter(nowTime - 16.2547 * 3600000, 'yyyy-MM-dd HH:mm')}
            </Text>
          </ImageBackground>
        </View>
      </View>
      {/* 播报 */}
      <View style={styles.broadcast}>
        <Trumpet />
        <View style={{marginTop: 8}}>
          <Text style={styles.broadcastText}>播</Text>
          <Text style={styles.broadcastText}>报</Text>
        </View>
      </View>
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
    top: 163,
    left: 125,
    color: 'rgba(256, 256, 256, 0.8)',
    fontSize: 12,
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
  broadcast: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    paddingVertical: 12,
    paddingHorizontal: 10,
    // borderRadius: 4,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
    top: 320,
    left: 25,
    backgroundColor: '#edf3fe',
  },
  broadcastText: {
    marginTop: 2,
    color: '#4E86F7',
    fontSize: 14,
    fontWeight: '600',
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

export default CSMMainView;
