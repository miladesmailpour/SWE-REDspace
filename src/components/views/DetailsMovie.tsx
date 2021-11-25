import React from "react";
import DetailsHOC from "../hocs/DetailsHOC";
import { View, Button, StyleSheet, Text } from "react-native";

const DetailsMovie = ({ route }: any) => {
  const item = route.params.data;
  return (
    <DetailsHOC
      title={item.title}
      description={
        <View>
          <Text style={styles.label}>
            Director: <Text style={styles.items}>{item.director}</Text>
          </Text>
          <Text style={styles.label}>
            producer: <Text style={styles.items}>{item.producer}</Text>
          </Text>
        </View>
      }
    ></DetailsHOC>
  );
};
export default DetailsMovie;
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
