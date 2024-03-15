import { createDrawerNavigator } from '@react-navigation/drawer';
import CategoryScreen from './category-screen/category-screen';


const { Navigator, Screen } = createDrawerNavigator();


export default function CatalogDraw() {

  return (
    <Navigator>
      {[...Array(10).keys()].map(key => {
        return (
          <Screen key={key} name={`Category${key+1}`} component={CategoryScreen} />
        )
      })}
    </Navigator>
  )
}
