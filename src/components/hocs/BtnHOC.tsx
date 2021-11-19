import React from "react";
import { Button, StyleSheet, View } from "react-native";

export type BtnProps = {
  title: string;
  onClick: () => void;
};
const BtnHOC = ({ title, onClick }: BtnProps) => {
  return (
    <View style={styles.btn}>
      <Button title={title} onPress={onClick} />
    </View>
  );
};
export default BtnHOC;

const styles: any = StyleSheet.create({
  btn: {
    backgroundColor: "#fff",
    margin: 40,
    padding: 15,
    flex: 1,
    alignContent: "center",
  },
});
