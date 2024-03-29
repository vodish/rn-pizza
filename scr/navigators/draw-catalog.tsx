import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenCatalogCategory from '../screens/screen-catalog-category';
import DrawerContent from './draw-catalog-content';


const { Navigator, Screen } = createDrawerNavigator();


export default function DrawCatalog() {

  return (
    <Navigator drawerContent={props => <DrawerContent {...props} /> }>
      {[...Array(2).keys()].map(key => {
        return (
          <Screen key={key} name={`ScreenCatalogCategory_${key+1}`} component={ScreenCatalogCategory} />
        )
      })}
    </Navigator>
  )
}

