import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Change appears on both with hot reload. work</Text>
      <Text>{process.env.EXPO_PUBLIC_API_URL} .</Text>
    </View>
  );
}
