import React from "react";
import ViewHOC from "../hocs/ViewHOC";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useSelector } from "react-redux";

const image = require("../../../assets/img/bgSWHome.png");
const PeopleList = ({ navigation }: any) => {
  const data = useSelector((state: any) => state.ReducerPeople);
  const handlerClick = (item: any) => {
    navigation.navigate("PersonDetails", {
      data: {
        name: item.name,
        height: item.height,
        mass: item.mass,
        hair_color: item.hair_color,
        skin_color: item.skin_color,
        birth_year: item.birth_year,
        gender: item.gender,
      },
    });
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
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
      </ImageBackground>
    </View>
  );
  //  <Text>People Lis</Text>;
};
export default PeopleList;

const styles: any = StyleSheet.create({
  items: {
    border: 2,
    borderColor: "#B2B2B2",
    backgroundColor: "#AAA",
    margin: 20,
    padding: 15,
    flex: 1,
    textAlign: "center",
  },
  container: {
    backgroundColor: "white",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
