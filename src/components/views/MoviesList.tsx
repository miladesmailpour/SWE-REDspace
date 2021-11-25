import React from "react";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

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
      <FlatList
        keyExtractor={(item: any) => item.title}
        data={data}
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
    </View>
  );
  // return <Text>Movies List</Text>;
};
export default MoviesList;
const styles: any = StyleSheet.create({
  items: {
    border: 1,
    backgroundColor: "#fff000",
    margin: 4,
    padding: 15,
    flex: 1,
    textAlign: "center",
  },
  container: {
    backgroundColor: "blue",
  },
});
