import { Link, useLocalSearchParams } from "@tanexpo/router";
import { Text, View } from "react-native";

export function User() {
  const params = useLocalSearchParams();
  return (
    <View style={{ padding: 16 }}>
      <Link href="/">Go to Home</Link>
      <Link href="/user/bacon/post/99">Post screen</Link>
      <Link href="/user/bacon/post/99" replace={true}>
        Post screen replace
      </Link>
      <Text>User Screen</Text>
      <Text>{JSON.stringify(params)}</Text>
    </View>
  );
}
