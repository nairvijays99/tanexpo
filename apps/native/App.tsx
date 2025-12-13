import { StyleSheet, View } from "react-native";
import { Test } from "@app/ui";

export default function App() {
  return (
    <View style={styles.container}>
      <Test />
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
