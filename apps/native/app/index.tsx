import { StyleSheet, View } from "react-native";
import { Link } from "@app/router";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Link to="/about">Go to About</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
