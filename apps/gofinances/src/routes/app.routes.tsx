import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import theme from '../global/theme';
import Dashboard from '../screens/Dashboard';
import Register  from '../screens/Register';
import Summary from '../screens/Summary';

const Tab = createBottomTabNavigator()

export default function Routes () {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: theme.colors.secondary,
        tabBarInactiveTintColor: theme.colors.text,
        tabBarLabelPosition: 'beside-icon',
        headerShown: false,
      }}
    >
      <Tab.Screen 
        name="Transações"
        component={Dashboard}
        options={{
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="transfer" color={color} size={size} />
        }}
      />
      <Tab.Screen
        name="Cadastrar"
        component={Register}
        options={{
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="text-box-plus" color={color} size={size} />
        }}
      />
      <Tab.Screen
        name="Resumo"
        component={Summary}
        options={{
          tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name="chart-donut-variant" color={color} size={size} />
        }}
      />
    </Tab.Navigator>
  )
}
