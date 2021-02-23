import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  SafeAreaView,
} from "react-native";
import {
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome,
  AntDesign,
} from "@expo/vector-icons";
import globalStyles from "../styles/globalStyles";

export default function Profile(props) {
  useEffect(() => {
    props.navigation.setOptions({
      headerRight: () => (
        <MaterialCommunityIcons
          name="dots-vertical"
          size={30}
          color="black"
          style={{ marginHorizontal: 10 }}
        />
      ),
    });
  });
  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={styles.topSection}>
        <Image
          style={styles.ProfileImage}
          source={require("../assets/avatar.png")}
        />
        <Text style={globalStyles.primaryText}>Elon Kumar Musk</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  ProfileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },

  topSection: {
    justifyContent: "center",
    flex: 0.2,
    alignItems: "center",
    // borderWidth: 1,
  },
  topContainer: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    paddingHorizontal: 20,
    maxHeight: 70,
    justifyContent: "space-between",
    borderBottomLeftRadius: 9,
    borderBottomRightRadius: 9,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowRadius: 6,
    shadowColor: "#2EA5DD",
    elevation: 3,
  },
});
