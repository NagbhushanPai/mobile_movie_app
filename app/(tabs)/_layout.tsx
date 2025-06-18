import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { Tabs } from "expo-router";
import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";

// Reusable TabIcon component
interface TabIconProps {
  icon: any;
  title: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, title, focused }) => {
  return (
    <View style={styles.tabContainer}>
      <ImageBackground 
        source={images.highlight} 
        style={styles.tabBackground}
        imageStyle={styles.tabBackgroundImage}
      >
        <Image 
          source={icon} 
          style={[styles.tabIcon, { tintColor: focused ? "#151312" : "#888" }]} 
        />
        <Text style={[styles.tabText, { color: focused ? "#151312" : "#888" }]}>
          {title}
        </Text>
      </ImageBackground>
    </View>
  );
};

const _Layout = () => {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
        title: "Home",
        headerShown: false,
        tabBarIcon:({focused})=> (
          <TabIcon 
            icon={icons.home} 
            title="Home" 
            focused={focused} 
          />
        )
        }}
      />      <Tabs.Screen
        name="search"
        options={{
        title: "Search",
        headerShown: false,
        tabBarIcon:({focused})=> (
          <TabIcon icon={icons.search} title="Search" focused={focused} />
        )
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
        title: "Saved",
        headerShown: false,
        tabBarIcon:({focused})=> (
          <TabIcon icon={icons.save} title="Saved" focused={focused} />
        )
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
        title: "Profile",
        headerShown: false,
        tabBarIcon:({focused})=> (
          <TabIcon icon={icons.person} title="Profile" focused={focused} />
        )
        }}
      />
    </Tabs>
      
  );
};
export default _Layout;

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 20, 
    overflow: 'hidden'
  },
  tabBackground: {
    flex: 1, 
    width: '100%', 
    minWidth: 80, 
    minHeight: 60, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 20, 
    overflow: 'hidden'
  },
  tabBackgroundImage: {
    borderRadius: 20
  },
  tabIcon: {
    width: 20, 
    height: 20, 
    marginRight: 4
  },
  tabText: {
    fontSize: 12, 
    fontWeight: '600'
  }
});