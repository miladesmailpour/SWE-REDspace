import React, { useEffect } from "react";
import ViewHOC from "../hocs/ViewHOC";
import BtnMovies from "../ButtonSWE/BtnMovies";
import BtnPeople from "../ButtonSWE/BtnPeople";
import BtnPlanets from "../ButtonSWE/BtnPlanets";
import { View, Button, StyleSheet, ImageBackground } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { getMovies, getPeople, getPlanets } from "../../actions";

const image = require("../../../assets/img/bgSWHome.png");

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
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <ViewHOC tag={combiner()} />
      </ImageBackground>
    </View>
  );
};
export default Home;

const styles: any = StyleSheet.create({
  container: {
    margin: 5,
    flex: 1,
    alignContent: "center",
    textAlignVertical: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
});
