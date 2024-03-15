import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import MainTab from './scr/screens/main-tab/main-tab';

export default function App() {

  return (
    <NavigationContainer>
      <MainTab />
      {/* <ProfileStack /> */}
      {/* <CatalogDraw /> */}
    </NavigationContainer>
  )
}
