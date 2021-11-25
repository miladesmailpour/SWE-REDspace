import React from "react";
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  ImageBackground,
} from "react-native";
import { useSelector } from "react-redux";

const image = require("../../../assets/img/bgSWHome.png");
const MoviesList = ({ navigation }: any) => {
  const data = useSelector((state: any) => state.ReducerMovies);
  const handlerClick = (item: any) => {
    navigation.navigate("MovieDetails", {
      data: {
        title: item.title,
        director: item.director,
        producer: item.producer,
      },
    });
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <FlatList
          keyExtractor={(item: any) => item.title}
          data={data[0].response}
          renderItem={({ item }) => (
            <Text
              style={styles.items}
              onPress={() => {
                handlerClick(item);
              }}
            >
              {item.title}
            </Text>
          )}
        />
      </ImageBackground>
    </View>
  );
  // return <Text>Movies List</Text>;
};
export default MoviesList;
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
