import { Text, View, ScrollView, TouchableOpacity } from "react-native";



export default function ScreenCatalogCategory({navigation}) {

  return (
    <ScrollView>

      {[...Array(22).keys()].map(key => (

        <TouchableOpacity
          key={key}
          style={{ height: 50, borderWidth: 0, borderColor: 'red', marginBottom: 10, }}
          // onPress={() => { navigation.push('') alert('You tapped the button!') }}
          >
          
            <Text>Category screen</Text>
          
        </TouchableOpacity>

      ))}

    </ScrollView>
  )
}