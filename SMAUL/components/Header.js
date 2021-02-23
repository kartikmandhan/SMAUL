import React from "react";
import { StyleSheet, Text, View, Image, ImageBackground } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Header = (props) => {
  function openMenu() {
    props.navigation.openDrawer();
  }
  return (
    <View style={styles.header}>
      <MaterialIcons
        name="menu"
        size={28}
        onPress={openMenu}
        style={styles.hamBurgerIcon}
      />
      <View style={styles.headerTitle}>
        {/* <Image
          source={require("../assets/heart_logo.png")}
          style={styles.headerImage}
        /> */}
        <Text style={styles.headerText}>{props.title}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  headerText: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    color: "#333",
    letterSpacing: 1,
  },
  headerImage: {
    width: 26,
    height: 26,
    marginHorizontal: 10,
  },
  headerTitle: {
    flexDirection: "row",
  },
  hamBurgerIcon: {
    position: "absolute",
    left: 0,
  },
});
export default Header;
