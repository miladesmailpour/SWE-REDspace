import React from "react";
import DetailsHOC from "../hocs/DetailsHOC";
import { View, Button, StyleSheet, Text } from "react-native";

const DetailsPlanet = ({ route }: any) => {
  const item = route.params.data;
  return (
    <DetailsHOC
      title={item.name}
      description={
        <View>
          <Text style={styles.label}>
            Terrain: <Text style={styles.items}>{item.terrain}</Text>
          </Text>
          <Text style={styles.label}>
            Population: <Text style={styles.items}>{item.population}</Text>
          </Text>
        </View>
      }
    ></DetailsHOC>
  );
};
export default DetailsPlanet;

const styles: any = StyleSheet.create({
  items: {
    border: 1,
    backgroundColor: "#fff000",
    margin: 4,
    color: "#444",
    padding: 15,
    textAlign: "center",
  },
  container: {
    backgroundColor: "blue",
  },
  label: {
    border: 1,
    backgroundColor: "#fff000",
    color: "#000",
    padding: 15,
    textAlign: "center",
  },
});
