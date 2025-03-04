import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-green-500">
      <Text className="text-3xl font-simibold text-red-500">
        Edit app/index.tsx to edit this screen.
      </Text>
    </SafeAreaView>
  );
}
