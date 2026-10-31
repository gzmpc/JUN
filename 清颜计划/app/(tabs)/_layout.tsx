import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { palette } from "@/components/health-ui";

const icons: Record<string, keyof typeof MaterialIcons.glyphMap> = { index: "home", checkin: "task-alt", trend: "show-chart", records: "folder-open" };

export default function TabLayout() {
  const insets = useSafeAreaInsets();
  const bottomPadding = Platform.OS === "web" ? 10 : Math.max(insets.bottom, 8);
  return (
    <Tabs screenOptions={({ route }) => ({
      headerShown: false,
      tabBarActiveTintColor: palette.mint,
      tabBarInactiveTintColor: palette.muted,
      tabBarLabelStyle: { fontSize: 11, fontWeight: "700", marginBottom: 2 },
      tabBarStyle: { height: 60 + bottomPadding, paddingTop: 7, paddingBottom: bottomPadding, backgroundColor: "#FFFFFF", borderTopColor: palette.line, borderTopWidth: 1 },
      tabBarIcon: ({ color, size }) => <MaterialIcons name={icons[route.name] ?? "circle"} size={size} color={color} />,
    })}>
      <Tabs.Screen name="index" options={{ title: "今日" }} />
      <Tabs.Screen name="checkin" options={{ title: "打卡" }} />
      <Tabs.Screen name="trend" options={{ title: "趋势" }} />
      <Tabs.Screen name="records" options={{ title: "记录" }} />
    </Tabs>
  );
}
