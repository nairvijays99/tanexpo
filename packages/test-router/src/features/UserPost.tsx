import { Link } from "@app/router";

import { Text, View } from "react-native";

export function UserPost() {
  return (
    <View style={{ padding: 16 }}>
      <Link href="/">Go to Home</Link>
      <Text>User Post Screen</Text>
      <Text>(navigation only – params not read)</Text>
    </View>
  );
}
