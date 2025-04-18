import { Slot } from "expo-router";
import { SafeAreaView, StatusBar } from "react-native";

export default function Layout() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" />
      <Slot />
    </SafeAreaView>
  );
}