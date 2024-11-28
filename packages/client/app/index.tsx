import { Text, View } from "react-native";

export default function Index() {
  console.log(
    "process.env.EXPO_PUBLIC_API_URL: ",
    process.env.EXPO_PUBLIC_API_URL
  );
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>
        Change appears on both with hot reload. How about now. Does this stil
        work
      </Text>
      <Text>{process.env.EXPO_PUBLIC_API_URL} .</Text>
    </View>
  );
}
