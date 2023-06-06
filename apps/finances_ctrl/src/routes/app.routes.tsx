import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons as Icon } from '@expo/vector-icons';
import { isIphoneX, getBottomSpace } from 'react-native-iphone-x-helper';

import theme from '../global/theme';
import Dashboard from '../screens/Dashboard';
import Register  from '../screens/Register';
import Summary from '../screens/Summary';

const Tab = createBottomTabNavigator()

export default function AppRoutes () {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        tabBarStyle: { paddingBottom: isIphoneX() ? getBottomSpace() : 0 },
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Transações"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="transfer" color={color} size={size} />
          )}}
      />
      <Tab.Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="text-box-plus" color={color} size={size} />
          )}}
      />
      <Tab.Screen
        name="Resumo"
        component={Summary}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Icon name="chart-donut-variant" color={color} size={size} />
          )}}
      />
    </Tab.Navigator>
  )
}
