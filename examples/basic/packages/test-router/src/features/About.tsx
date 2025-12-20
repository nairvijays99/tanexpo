import { Text, View } from "react-native";
import { Link } from "@tanexpo/router";
export function About() {
  return (
    <View style={{ padding: 16 }}>
      <Link href="/">Go to Home</Link>
      <Text>About Screen</Text>
    </View>
  );
}
