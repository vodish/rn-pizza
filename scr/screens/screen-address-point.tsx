import { Text, View } from "react-native";
import ScreenInset from "../components/screen-inset";


export default function ScreenAddressPoint({ navigation }) {


  return (
    <ScreenInset title="Адрес" handleBack={navigation.goBack}>
      <View>
        <Text>Screen Address Point</Text>
      </View>
    </ScreenInset>
  )
}