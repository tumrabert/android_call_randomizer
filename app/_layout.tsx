import { Stack } from "expo-router";
import { myStyle } from "../styles/myStyle";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="Create call log" />
    </Stack>
  );
}
