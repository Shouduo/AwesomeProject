import React from 'react';
import {ScrollView, StatusBar, View} from 'react-native';
// import WindowButtons from './components/WindowButtons';
// import Jumbotron from './components/Jumbotron';
// import ExtraService from './components/ExtraService';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import IndexPage from './pages/IndexPage';
import YKMScreen from './pages/YKMScreen';
import CSMScreen from './pages/CSMScreen';

// const YKMPage = () => (
//   <View>
//     <StatusBar barStyle="light-content" />
//     <WindowButtons />
//     <ScrollView contentInsetAdjustmentBehavior="automatic">
//       <Jumbotron />
//       <ExtraService />
//     </ScrollView>
//   </View>
// );

const Stack = createNativeStackNavigator();

const TitleBar = () => {
  return <></>;
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Index"
        screenOptions={{
          headerShown: false,
          headerTitle: props => <TitleBar {...props} />,
          headerStyle: {
            backgroundColor: '#f89308',
            display: 'none',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Index" component={IndexPage} />
        <Stack.Screen
          name="YKM"
          component={YKMScreen}
          options={{title: 'Overview'}}
        />
        <Stack.Screen name="CSM" component={CSMScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
