import React from "react";
import ViewHOC from "../hocs/ViewHOC";
import BtnMovies from "../ButtonSWE/BtnMovies";
import BtnPeople from "../ButtonSWE/BtnPeople";
import BtnPlanets from "../ButtonSWE/BtnPlanets";
import { View, Button, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";

const Details = () => {
  const createCard = (item: any) => {
    return <Text>{item.name}</Text>;
  };
  const data = useSelector((state: any) => state.ReducerMovies);

  return (
    <View style={styles.container}>
      <Text style={styles.items}>UNDER CONSTRUCTION!...</Text>
    </View>
  );
  // return <Text>Movies List</Text>;
};
export default Details;
const styles: any = StyleSheet.create({
  items: {
    border: 1,
    backgroundColor: "#fff000",
    margin: 4,
    padding: 15,
    flex: 1,
    textAlign: "center",
  },
  container: {
    backgroundColor: "blue",
  },
});
