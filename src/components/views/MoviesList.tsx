import React from "react";
import ViewHOC from "../hocs/ViewHOC";
import { FlatList, Text, View, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

const MoviesList = (navigation: any) => {
  const createCard = (item: any) => {
    return <Text>{item.name}</Text>;
  };
  const handlerClick = () => {
    navigation.navigate("Details");
  };
  const data = useSelector((state: any) => state.ReducerMovies);

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item: any) => item.title}
        data={data}
        renderItem={({ item }) => (
          <Text
            style={styles.items}
            onPress={() => console.log("It gose to ", item.title, "Details")}
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
