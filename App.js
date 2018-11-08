import { createStackNavigator } from 'react-navigation'

import PeoplePage from './src/pages/PeoplePage'
import PeopleDetailPage from './src/pages/PeopleDetailPage'

import { capitalizeFirstLetter } from './src/util';

export default createStackNavigator ({
  'Main' : {
    screen: PeoplePage
  },
  'PeopleDetail': {
    screen: PeopleDetailPage,
    navigationOptions: ({ navigation }) => {
      const peopleName = capitalizeFirstLetter(
        navigation.state.params.people.name.first
      );
      //const peopleName = "@TODO MUDAR ISSO";
      return ({
        title: peopleName,
        headerTitleStyle: {
          color: 'white',
          fontSize: 30,
        }
      });
    }
  }
}, {
    navigationOptions: {
      title: 'Pessoas!',
      headerTintColor: 'white',
      headerStyle: {
        backgroundColor: '#6ca2f7',
        borderBottomWidth: 1,
        borderBottomColor: '#c5c5c5'
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 30,
        alignSelf: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
      }
    }
});
