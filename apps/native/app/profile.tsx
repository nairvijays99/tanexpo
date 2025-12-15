import { StyleSheet, View } from "react-native";
import { Link } from "@app/router";

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Link to="/">Go to Home</Link>
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
