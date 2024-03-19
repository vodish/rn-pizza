import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenCatalogCategory from '../../screens/catalog/category/screen-catalog-category';


const { Navigator, Screen } = createDrawerNavigator();


export default function DrawCatalog() {

  return (
    <Navigator>
      {[...Array(10).keys()].map(key => {
        return (
          <Screen key={key} name={`ScreenCatalogCategory${key+1}`} component={ScreenCatalogCategory} />
        )
      })}
    </Navigator>
  )
}
