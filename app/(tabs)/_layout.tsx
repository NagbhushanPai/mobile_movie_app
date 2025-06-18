import { icons } from "@/constants/icons";
import { Tabs } from "expo-router";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

// Reusable TabIcon component
interface TabIconProps {
  icon: any;
  title: string;
  focused: boolean;
}

const TabIcon: React.FC<TabIconProps> = ({ icon, title, focused }) => {
  if (focused) {
    // Focused tab with purple background and text
    return (
      <View style={styles.focusedTabContainer}>
        <Image 
          source={icon} 
          style={[styles.tabIcon, { tintColor: "#000" }]} 
        />
        <Text style={[styles.tabText, { color: "#000" }]}>
          {title}
        </Text>
      </View>
    );  } else {
    // Unfocused tab - just icon, no background
    return (
      <View style={styles.unfocusedTabContainer}>
        <Image 
          source={icon} 
          style={[styles.unfocusedTabIcon, { tintColor: "#888" }]} 
        />
      </View>
    );
  }
};

const _Layout = () => {
  return (
    <Tabs      screenOptions={{        tabBarStyle: {
          backgroundColor: '#1a1a2e', // Dark navy background
          borderTopWidth: 0,
          height: 60, // Reduced height to match the image
          paddingBottom: 10,
          paddingTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-around', // Space out tabs evenly
          marginHorizontal: 10, // Add horizontal margin
          borderRadius: 25,
          marginVertical: 23, // Add vertical margin
        },
        tabBarShowLabel: false, // Hide default labels since we're using custom ones
      }}
    >
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

const styles = StyleSheet.create({  focusedTabContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b794f6', // Purple background for focused tab
    borderRadius: 20, // Slightly less rounded to fit better
    paddingHorizontal: 12, // Reduced padding
    paddingVertical: 6, // Reduced padding
    minWidth: 80, // Smaller width
    height: 36, // Smaller height to fit within 60px tab bar
    marginHorizontal: 4, // Reduced spacing
  },  unfocusedTabContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 32, // Smaller to match the scale
    height: 32,
    marginHorizontal: 8, // Reduced spacing
  },
  tabIcon: {
    width: 16, // Smaller icon for focused tab
    height: 16,
    marginRight: 6, // Reduced margin
  },
  unfocusedTabIcon: {
    width: 20, // Smaller unfocused icon
    height: 20,
  },
  tabText: {
    fontSize: 13, // Smaller text to fit better
    fontWeight: '600',
  },
});