import React from "react";
import { StyleSheet } from "react-native";
import store from "./src/store/store";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/components/views/Home";
import PeopleList from "./src/components/views/PeopleList";
import MoviesList from "./src/components/views/MoviesList";
import PlantsList from "./src/components/views/PlantsList";
import { Provider } from "react-redux";
import DetailsMovie from "./src/components/views/DetailsMovie";
import DetailsPlanet from "./src/components/views/DetailsPlanet";
import DetailsPerson from "./src/components/views/DetailsPerson";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Star Wars Explorer" component={Home} />
          <Stack.Screen name="People" component={PeopleList} />
          <Stack.Screen name="Planets" component={PlantsList} />
          <Stack.Screen name="Movies" component={MoviesList} />
          <Stack.Screen name="MovieDetails" component={DetailsMovie} />
          <Stack.Screen name="PlanetDetails" component={DetailsPlanet} />
          <Stack.Screen name="PersonDetails" component={DetailsPerson} />
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
