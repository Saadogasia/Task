import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import WelcomeScreen from "./WelcomeScreen";
import CategoriesScreen from "./CategoriesScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            tabBarIcon: ({}) => (
              <AntDesign name="home" size={24} color="black" />
            ),
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Categories"
          component={CategoriesScreen}
          options={{
            tabBarIcon: ({}) => (
              <AntDesign name="database" size={24} color="black" />
            ),
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
