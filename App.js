import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IndexPage from './pages/IndexPage';
import YKMScreen from './pages/YKMScreen';
import CSMScreen from './pages/CSMScreen';
import InfoPage from './pages/InfoPage';
import {INITIAL_INFO} from './utils/public';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Context = React.createContext({
  info: {},
  setInfo: () => {},
});

const Stack = createNativeStackNavigator();

const App = () => {
  const [info, setInfo] = React.useState({});

  const updateInfo = info => {
    setInfo(info);
    (async () => {
      try {
        AsyncStorage.setItem('INFO', JSON.stringify(info));
      } catch (e) {
        console.log('AsyncStorage ==> ', e);
      }
    })();
  };

  React.useEffect(() => {
    (async () => {
      try {
        const storageInfo = await AsyncStorage.getItem('INFO');
        setInfo(JSON.parse(storageInfo) || INITIAL_INFO);
      } catch (e) {
        console.log('AsyncStorage ==> ', e);
      }
    })();
  }, []);

  return (
    <Context.Provider value={{info, updateInfo}}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Index"
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}>
          <Stack.Screen name="Index" component={IndexPage} />
          <Stack.Screen name="Info" component={InfoPage} />
          <Stack.Screen name="YKM" component={YKMScreen} />
          <Stack.Screen name="CSM" component={CSMScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Context.Provider>
  );
};

export default App;
