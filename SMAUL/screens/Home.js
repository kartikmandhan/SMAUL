import React, { useState } from "react";
import { Text, View, StyleSheet, Dimensions, SafeAreaView } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles.js";
import Card from "../components/Card";
import Carousel, { Pagination } from "react-native-snap-carousel";
import { Button } from "react-native";
const SLIDER_WIDTH = Math.round((Dimensions.get("window").width * 9) / 10);
const ITEM_WIDTH = Math.round((SLIDER_WIDTH * 8.5) / 10);
const ITEM_HEIGHT = Math.round((ITEM_WIDTH * 2) / 4);
const Home = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const renderCarouselItem = ({ item, index }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.itemLabel}>{`Item ${item}`}</Text>
      </View>
    );
  };
  const DATA = [];
  for (let i = 0; i < 5; i++) {
    DATA.push(i);
  }
  function pagination() {
    return (
      <Pagination
        dotsLength={DATA.length}
        activeDotIndex={activeSlide}
        containerStyle={{ marginTop: -20, paddingBottom: -20 }}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 5,
          backgroundColor: "dodgerblue",
        }}
        inactiveDotStyle={{
          backgroundColor: "#888",
          // Define styles for inactive dots here
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
      />
    );
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.topCarouselContainer}>
        <Carousel
          data={DATA}
          renderItem={renderCarouselItem}
          sliderWidth={SLIDER_WIDTH}
          itemWidth={ITEM_WIDTH}
          inactiveSlideShift={0}
          onSnapToItem={(index) => setActiveSlide(index)}
          useScrollView={false}
        />
        {DATA.length > 0 && pagination()}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  carouselContainer: {
    marginTop: 50,
  },
  topCarouselContainer: {
    padding: 10,
  },
  itemContainer: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "dodgerblue",
  },
  itemLabel: {
    color: "white",
    fontSize: 24,
  },
  counter: {
    marginTop: 25,
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
export default Home;
