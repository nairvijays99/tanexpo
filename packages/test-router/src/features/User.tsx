import { Link } from "@app/router";
import { Text, View } from "react-native";

export function User() {
  return (
    <View style={{ padding: 16 }}>
      <Link href="/">Go to Home</Link>
      <Link href="/user/bacon/post/99">Post screen</Link>
      <Link href="/user/bacon/post/99" replace={true}>
        Post screen replace
      </Link>
      <Text>User Screen</Text>
      <Text>(navigation only – params not read)</Text>
    </View>
  );
}
