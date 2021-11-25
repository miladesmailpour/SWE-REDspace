import React, { useEffect } from "react";
import ViewHOC from "../hocs/ViewHOC";
import BtnMovies from "../ButtonSWE/BtnMovies";
import BtnPeople from "../ButtonSWE/BtnPeople";
import BtnPlanets from "../ButtonSWE/BtnPlanets";
import { View, Button, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { getMovies, getPeople, getPlanets } from "../../actions";

export type HomeProps = {
  navigation: any;
};
const Home = ({ navigation }: HomeProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMovies());
    dispatch(getPeople());
    dispatch(getPlanets());
  }, []);

  const combiner = () => {
    return [
      BtnPeople(navigation),
      BtnPlanets(navigation),
      BtnMovies(navigation),
    ];
  };
  return (
    <View style={styles.container}>
      <ViewHOC tag={combiner()} />
    </View>
  );
};
export default Home;

const styles: any = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    margin: 5,
    flex: 1,
    alignContent: "center",
    textAlignVertical: "center",
  },
});
