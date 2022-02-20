import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'

import ProjectsList from '../screens/ProjectsList'
import ProjectDetail from '../screens/ProjectDetail'

const MainStack = createStackNavigator(
  {
    Projects: {
      screen: ProjectsList
    },
    Detail: {
      screen: ProjectDetail
    }
  },
  {
    initialRouteName: 'Projects'
  }
)

export default MainStack