import React from "react";
import { Button, StyleSheet, View } from "react-native";

export type BtnProps = {
  title: string;
  onClick: () => void;
  status: boolean;
};
const BtnHOC = ({ title, onClick, status = true }: BtnProps) => {
  if (status) {
    return (
      <View style={styles.btn}>
        <Button title={title} onPress={onClick} />
      </View>
    );
  } else {
    return (
      <View style={styles.btn_inactivite}>
        <Button title={title} onPress={onClick} />
      </View>
    );
  }
};
export default BtnHOC;

const styles: any = StyleSheet.create({
  btn: {
    backgroundColor: "#ABB8C3",
    margin: 40,
    padding: 5,
    flex: 1,
    alignContent: "center",
  },
  btn_inactivite: {
    backgroundColor: "#BBAfC3",
    margin: 40,
    padding: 6,
    flex: 1,
    alignContent: "center",
  },
  btn_inner: {
    color: "#333",
  },
});
