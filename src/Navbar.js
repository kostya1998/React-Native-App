import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function Navbar({ title }) {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{title}</Text>
      <StatusBar style="auto" />
    </View>
  );
}
const styles = StyleSheet.create({
  navbar: {
    height: 70,
    alignItems: "center",
    justifyContent: "flex-end",
    backgroundColor: "#fa8072",
    paddingBottom: 10,
    borderBottomColor: "#cd853f",
    borderBottomWidth: 2,
  },
  text: {
    color: "white",
    fontSize: 20,
  },
});

export default Navbar;
