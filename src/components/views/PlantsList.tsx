import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const PlantsList = ({ navigation }: any) => {
  const data = useSelector((state: any) => state.ReducerPlanets);
  const handlerClick = (item: any) => {
    navigation.navigate("PlanetDetails", {
      data: {
        name: item.name,
        terrain: item.terrain,
        population: item.population,
      },
    });
  };
  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item: any) => item.name}
        data={data[0].response}
        renderItem={({ item }) => (
          <Text
            style={styles.items}
            onPress={() => {
              handlerClick(item);
            }}
          >
            {item.name}
          </Text>
        )}
      />
    </View>
  );
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
