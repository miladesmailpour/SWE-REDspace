import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/components/views/Home";
import PeopleList from "./src/components/views/PeopleList";
import MoviesList from "./src/components/views/MoviesList";
import PlantsList from "./src/components/views/PlantsList";
import { createStore, applyMiddleware } from "redux";
import AllReducers from "./src/reducers";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import Details from "./src/components/views/Details";
////dummy import

//

const Stack = createNativeStackNavigator();
const store = createStore(
  AllReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Star Wars Explorer" component={Home} />
          <Stack.Screen name="People" component={PeopleList} />
          <Stack.Screen name="Planets" component={PlantsList} />
          <Stack.Screen name="Movies" component={MoviesList} />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff000",
  },
});
