import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import TabMain from './scr/navigators/tab-main/tab-main';


export default function App() {

  return (
    <NavigationContainer>
      <TabMain />
    </NavigationContainer>
  )
}
