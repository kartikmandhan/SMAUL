import React from "react";
import { Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/About";
import Header from "../components/Header";
const { Navigator, Screen } = createStackNavigator();
import { MaterialIcons } from "@expo/vector-icons";

export default AboutStack = (props) => (
  <Navigator
    //other options: "float", "screen"
    headerMode="screen"
    // these are default options(styles) for all the screens
    screenOptions={{
      headerTitleStyle: {
        fontSize: 20,
      },
      headerStyle: {
        backgroundColor: "rgba(43, 164, 219, 1)",
      },
    }}
  >
    <Screen
      name="About"
      component={About}
      options={{
        title: "About Us",
        headerLeft: () => (
          <MaterialIcons
            name="menu"
            size={24}
            color="black"
            style={{
              paddingHorizontal: 10,
            }}
            onPress={() => {
              props.navigation.openDrawer();
            }}
          />
        ),
      }}
    />
  </Navigator>
);
