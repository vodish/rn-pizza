import { StyleSheet, ScrollView, View, Text } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SvgArrowBackIosNew from "../svg/svg_arrow_back_ios_new";


export default function ScreenInset({ title, children }) {

  const insets = useSafeAreaInsets()

  return (
    <View style={[style.screen, { paddingTop: insets.top, }]}>
      <View style={style.header}>
        {/* <View style={style.back}><SvgArrowBackIosNew height={20} /></View> */}
        <Text style={style.title}>{title}</Text>
      </View>
      <ScrollView style={[style.body]}>
        {children}
      </ScrollView>
    </View>
  )
}


const style = StyleSheet.create({
  border: { borderWidth: 1, borderColor: 'red' },

  screen: {
    // borderWidth: 1, borderColor: 'red',
    backgroundColor: 'white',
    flex: 1,
  },
  
  header: {
    // borderWidth: 1, borderColor: 'red',
    borderBottomWidth: 1, borderColor: '#eee',
    display: 'flex', flexDirection: 'row', alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
  },

  back: {
    // borderWidth: 1, borderColor: 'red',
    marginRight: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
  },

  
  body: {
    // borderWidth: 1, borderColor: 'green',
    paddingHorizontal: 15,
    
  },


})