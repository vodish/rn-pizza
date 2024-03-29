import { View, Text, Button } from 'react-native'
import { observer } from 'mobx-react-lite'
import { MobxCounter } from '../mobx/mobx-counter';


const Counter = observer( () => {
  
  return(
    <View>
      <Text>{MobxCounter.value}</Text>
      <Button title='Больше' onPress={() => MobxCounter.increment() } />
      <Button title='Меньше' onPress={() => MobxCounter.decrement() } />
    </View>
  )

} )



export default Counter;