import { Text, View, ScrollView, Button, TouchableOpacity } from "react-native";




export default function ScreenActionMain({ navigation }) {

  

  return (
    <ScrollView style={{ borderWidth: 0, borderColor: 'red' }}>

      <Text>Action</Text>

      <Button title="Item" onPress={() => navigation.navigate('ScreenActionItem')} />

      <TouchableOpacity onPress={()=>navigation.push('ActionModal')} style={{marginTop: 30}}>
        <Text>Action Modal</Text>
      </TouchableOpacity>

    </ScrollView>

  )
}