import React from "react";
import { View, Text, StyleSheet } from "react-native";

export type ViewProps = {
  title: string;
  description: any;
};

const DetailsHOC = ({ title, description }: ViewProps) => {
  return (
    <View>
      <View style={styles.header}>
        <Text style={styles.article}>{title}</Text>
      </View>
      <View style={styles.items}>{description}</View>
    </View>
  );
};
export default DetailsHOC;

const styles: any = StyleSheet.create({
  items: {
    backgroundColor: "#888",
    margin: 10,
    padding: 15,
    flex: 1,
    alignContent: "center",
    textAlign: "center",
  },
  header: {
    backgroundColor: "#fff000",
    margin: 2,
    padding: 2,

    alignContent: "center",
    border: 2,
  },
  article: {
    backgroundColor: "#888",
    margin: 4,
    color: "#fff",
    padding: 15,
    alignContent: "center",
    textAlign: "center",
  },
});
