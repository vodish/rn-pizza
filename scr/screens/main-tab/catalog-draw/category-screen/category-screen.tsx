import { Text, View, ScrollView } from "react-native";



export default function CategoryScreen() {

  return (
    <ScrollView>

      {[...Array(22).keys()].map(key => (
        <View key={key} style={{ height: 50, borderColor: 'red', }}>
          <Text>Category screen</Text>
        </View>
      ))}

    </ScrollView>
  )
}