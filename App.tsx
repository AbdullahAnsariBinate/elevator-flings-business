import { LogBox } from 'react-native';
import { Root, Screen, BottomTabs } from 'rnn-screens';
// import  bottomtab  from './src/components/bottomtab'
import SplashScreen from 'react-native-splash-screen';
import { screens } from './src/screens';
import { Services } from './src/services';
import { Stores } from './src/stores';
import { DesignSystem } from './src/utils/designSystem';
import HeaderRight from './src/components/headerright';
import HeaderRight2 from './src/components/headerright2';
import HeaderChat from './src/components/headerchat';

LogBox.ignoreLogs(['Require', 'RCTBridge']);

export const beforeStart = async (): PVoid => {
  // 1. hydrate stores
  await Stores.hydrate();

  // 2. configure design system
  await DesignSystem.configure();

  // 3. init services
  await Services.init();

  // 4. hide splash screen
  SplashScreen.hide();
  screens.N.registerComponent('HeaderRight', ()=>{ return HeaderRight})
  screens.N.registerComponent('HeaderRight2', ()=>{ return HeaderRight2})
  screens.N.registerComponent('HeaderChat', ()=>{ return HeaderChat})


};

console.log('hyh');
export const App = () => Root(
  Screen(
    screens.get('Login')
  )
);

export const BottomTabActivity = () => Root(
 BottomTabs([
  Screen(screens.get('Home')),
  // Screen(screens.get('Temp')),
  Screen(screens.get('Myprofile')),
 ])
);