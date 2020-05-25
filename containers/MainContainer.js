import { createBottomTabNavigator, createAppContainer } from 'react-navigation'
import FilmsSearchContainer from './SearchFilmsContainer'
import FilmsViewContainer from './ViewFilmsContainer'
import SettingsContainer from './SettingsContainer'

const tabNavigator = createBottomTabNavigator({

  'Search films': {
    screen: FilmsSearchContainer
  }
}, {
  tabBarOptions: {
    activeTintColor: '#fff',
    labelStyle: {
      fontSize: 15,
    },
    style: {
      backgroundColor: 'white',
    },
  }
})


export default Container = createAppContainer(tabNavigator);