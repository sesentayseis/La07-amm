import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons'; // Importar el paquete de íconos Ionicons


import UsersList from './screens/UsersList';
import CreateUserScreen from './screens/CreateUserScreen';
import UserDetailScreen from './screens/UserDetailScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="UsersList"
          component={UsersList}
          options={{
            tabBarLabel: 'Lista',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-list" color={color} size={size} /> // Icono de lista
            ),
          }}
        />
        <Tab.Screen
          name="CreateUserScreen"
          component={CreateUserScreen}
          options={{
            tabBarLabel: 'Crear',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-add" color={color} size={size} /> // Icono de "+"
            ),
          }}
        />
        <Tab.Screen
          name="UserDetailScreen"
          component={UserDetailScreen}
          options={{
            tabBarLabel: 'Detalle',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="ios-person" color={color} size={size} /> // Icono de detalle de usuario (ejemplo)
            ),
          }}
        />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
