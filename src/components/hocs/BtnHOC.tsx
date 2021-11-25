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
    backgroundColor: "#fff",
    margin: 40,
    padding: 15,
    flex: 1,
    alignContent: "center",
  },
  btn_inactivite: {
    backgroundColor: "#fff999",
    margin: 40,
    padding: 15,
    flex: 1,
    alignContent: "center",
  },
});
