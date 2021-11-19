import React from "react";
import { View, Text, StyleSheet } from "react-native";

export type ViewProps = {
  tag: any;
};

const ViewHOC = ({ tag }: ViewProps) => {
  return (
    <View>
      <View style={styles.items}>
        {tag.map((item: any, key: number) => (
          <View key={key}>{item}</View>
        ))}
      </View>
    </View>
  );
};
export default ViewHOC;

const styles: any = StyleSheet.create({
  items: {
    backgroundColor: "#fff000",
    margin: 10,
    padding: 15,
    flex: 1,
    alignContent: "center",
  },
});
