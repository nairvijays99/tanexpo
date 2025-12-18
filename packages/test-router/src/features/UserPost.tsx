import { Text, View, Pressable } from "react-native";
import { Link, useRouter } from "@app/router";

export function UserPost() {
  const router = useRouter();
  return (
    <View style={{ padding: 16 }}>
      <Link href="/">Go to Home</Link>
      {/* useRouter.replace */}
      <Pressable onPress={() => router.back()}>
        <Text>router.back</Text>
      </Pressable>
      <Text>User Post Screen</Text>
      <Text>(navigation only – params not read)</Text>
    </View>
  );
}
