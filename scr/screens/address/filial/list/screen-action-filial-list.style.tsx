import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  list: {
    // borderWidth: 1, borderColor: 'red', 
    paddingBottom: 10,
  },

  row: {
    display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 20,
    marginHorizontal: 20,
    // borderWidth: 1, borderColor: 'red', 
    borderTopWidth: 1, borderColor: '#eee',
  },

  name: {
    // borderWidth: 1, borderColor: 'red',
    flexGrow: 1,
  },

  filial: {
    flexGrow: 1, paddingVertical: 10,
    fontSize: 16, fontWeight: '600',
  },
  address: {
    // borderWidth: 1, borderColor: 'red', 
    flexGrow: 1, paddingTop: 10, paddingBottom: 15, paddingLeft: 15,
  },

  select: {
    // borderWidth: 1, borderColor: 'red',
    paddingVertical: 12,
    paddingLeft: 10,
  },


})