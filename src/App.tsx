import React from "react";
import {Text , View} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";


import Favorites from "./Favorites";
import Products from "./Products";


const Tab = createBottomTabNavigator()
function App(){
  return(
<NavigationContainer>
  <Tab.Navigator>
    <Tab.Screen name="ProductsTab" component={Products}/>
    <Tab.Screen name="FavoritesTab" component={Favorites}/>
  </Tab.Navigator>
</NavigationContainer>
  )
}


export default App;