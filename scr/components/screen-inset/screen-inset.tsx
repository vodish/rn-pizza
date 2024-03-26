import { StyleSheet, ScrollView, View, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import SvgArrowBackIosNew from "../svg/svg_arrow_back_ios_new";


type TScreenInset = {
  title: string,
  handleBack?(): void,
  children: React.JSX.Element
}


export default function ScreenInset({ title, handleBack, children }: TScreenInset) {

  const insets = useSafeAreaInsets()


  return (
    <View style={[style.screen, { paddingTop: insets.top, }]}>
      <View style={style.header}>

        {handleBack &&
          <TouchableOpacity style={style.back} onPress={handleBack}>
            <SvgArrowBackIosNew width={20} height={20} />
          </TouchableOpacity>
        }

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
    height: 44,
    // paddingVertical: 8,
    paddingHorizontal: 20,
    marginBottom: 5,
  },

  back: {
    // borderWidth: 1, borderColor: 'red',
    padding: 10, marginLeft: -15, marginRight: 10,
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
  },


  body: {
    // borderWidth: 1, borderColor: 'green',

  },


})