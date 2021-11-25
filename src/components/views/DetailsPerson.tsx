import React from "react";
import DetailsHOC from "../hocs/DetailsHOC";
import { View, Button, StyleSheet, Text } from "react-native";

const DetailsPerson = ({ route }: any) => {
  const item = route.params.data;
  return (
    <DetailsHOC
      title={item.name}
      description={
        <View>
          <Text style={styles.label}>
            Height: <Text style={styles.items}>{item.height}</Text>
          </Text>
          <Text style={styles.label}>
            Mass: <Text style={styles.items}>{item.mass}</Text>
          </Text>
          <Text style={styles.label}>
            Hair Color: <Text style={styles.items}>{item.hair_color}</Text>
          </Text>
          <Text style={styles.label}>
            Skin Color: <Text style={styles.items}>{item.skin_color}</Text>
          </Text>
          <Text style={styles.label}>
            Gender: <Text style={styles.items}>{item.gender}</Text>
          </Text>
          <Text style={styles.label}>
            Birth Year: <Text style={styles.items}>{item.birth_year}</Text>
          </Text>
        </View>
      }
    ></DetailsHOC>
  );
};
export default DetailsPerson;

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
