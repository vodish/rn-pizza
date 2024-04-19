import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import TabMain from './scr/navigators/tab-main';
import deeplinks from './scr/utils/deeplinks';



export default function App() {
  return (
    <NavigationContainer linking={deeplinks} fallback={<Text>Loading...</Text>}>
      <TabMain />
    </NavigationContainer>
  )
}
