import React from "react";
import ViewHOC from "../hocs/ViewHOC";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const PlantsList = () => {
  const createCard = (item: any) => {
    return <Text>{item.name}</Text>;
  };
  const data = useSelector((state: any) => state.ReducerPlanets);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item: any) => item.name}
        data={data}
        renderItem={({ item }) => (
          <Text
            style={styles.items}
            onPress={() => console.log("It gose to ", item.name, "Details")}
          >
            {item.name}
          </Text>
        )}
      />
    </View>
  );
  // return <Text>Plants List</Text>;
};
export default PlantsList;

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
