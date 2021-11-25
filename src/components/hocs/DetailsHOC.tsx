import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export type ViewProps = {
  title: string;
  description: any;
};

const image = require("../../../assets/img/bgSWHome.png");

const DetailsHOC = ({ title, description }: ViewProps) => {
  return (
    <View>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.header}>
          <Text style={styles.article}>{title}</Text>
        </View>
        <View style={styles.items}>{description}</View>
      </ImageBackground>
    </View>
  );
};
export default DetailsHOC;

const styles: any = StyleSheet.create({
  items: {
    backgroundColor: "#888000",
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
    backgroundColor: "#888000",
    margin: 4,
    color: "#fff",
    padding: 15,
    alignContent: "center",
    textAlign: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
