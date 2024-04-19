import * as Linking from 'expo-linking';


const deeplinks = {
  prefixes: [
    Linking.createURL('/'),
    'https://rnpizza.ru',
  ],

  filter: (url) => !url.includes('+expo-auth-session'),

  config: {
    screens: {
      ScreenActionMain: 'actions',
      ScreenActionItem: 'actions/:id',
    }
  },
}

export default deeplinks;


/*
--------------------------------------------------------------
NavigationContainer
    TabMain                                 (createBottomTabNavigator)
        : StackAction                       (createNativeStackNavigator)
            : ScreenActionMain
            : ScreenActionItem
            
        : StackAddress                      (createNativeStackNavigator)
            : ScreenAddress
            : ScreenAddressFilial
            : ScreenAddressPoint
        : DrawCatalog                       (createDrawerNavigator)
            : ScreenCatalogCategory
        : StackBasket                       (createNativeStackNavigator)
            : ScreenBasketOrder
            : ScreenBasketDelivery
            : ScreenBasketCheck
        : StackProfile                      (createNativeStackNavigator)
            : ScreenProfileMain
--------------------------------------------------------------
*/
