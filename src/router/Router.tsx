import { createStackNavigator } from '@react-navigation/stack'
import * as React from 'react'

import { Episode } from '../models/EpisodeModel'
import { Show } from '../models/ShowModel'
import { EpisodeDetailsScreen } from '../screens/EpisodeDetailsScreen/EpisodeDetailsScreen'
import { ShowDetailsScreen } from '../screens/ShowDetailsScreen/ShowDetailsScreen'
import { DrawerNavigator } from './DrawerNavigator'

export type RootStackParamList = {
  DrawerNavigator: undefined
  ShowDetails: { show: Show }
  EpisodeDetails: { episode: Episode }
}

const Stack = createStackNavigator<RootStackParamList>()

export function Router() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
      <Stack.Screen name="ShowDetails" component={ShowDetailsScreen} />
      <Stack.Screen name="EpisodeDetails" component={EpisodeDetailsScreen} />
    </Stack.Navigator>
  )
}
