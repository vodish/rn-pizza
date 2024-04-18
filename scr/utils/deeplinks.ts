import * as Linking from 'expo-linking';


const prefix = Linking.createURL('/');

const linking = {
  prefixes: [prefix, 'https://rnpizza.ru'],
}

export default linking;
