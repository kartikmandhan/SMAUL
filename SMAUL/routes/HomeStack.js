import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import { Image } from "react-native";
import Header from "../components/Header";
import ProfileScreen from "../screens/ProfileScreen";
const { Navigator, Screen } = createStackNavigator();
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
export default HomeStack = (props) => (
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
      name="Home"
      component={Home}
      options={{
        title: "SMAUL",
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
    <Screen
      name="Profile"
      component={ProfileScreen}
      options={{
        title: "My Profile",
      }}
    />
  </Navigator>
);
