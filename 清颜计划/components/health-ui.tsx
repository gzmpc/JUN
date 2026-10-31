import { MaterialIcons } from "@expo/vector-icons";
import { PropsWithChildren } from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export const palette = {
  ink: "#17313B",
  muted: "#6D8187",
  line: "#DDE9E7",
  bg: "#F5FAF8",
  card: "#FFFFFF",
  mint: "#28B89A",
  mintSoft: "#DDF5EE",
  blue: "#4475D9",
  blueSoft: "#EAF0FF",
  coral: "#E97B67",
  coralSoft: "#FFF0EC",
  gold: "#E3A93D",
};

export function Card({ children, style }: PropsWithChildren<{ style?: any }>) {
  return <View style={[styles.card, style]}>{children}</View>;
}

export function SectionTitle({ title, action }: { title: string; action?: string }) {
  return (
    <View style={styles.sectionRow}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {action ? <Text style={styles.action}>{action}</Text> : null}
    </View>
  );
}

export function ProgressBar({ value }: { value: number }) {
  return (
    <View style={styles.progressTrack}>
      <View style={[styles.progressFill, { width: `${Math.max(0, Math.min(100, value))}%` }]} />
    </View>
  );
}

export function CheckRow({ icon, title, subtitle, checked, onPress }: { icon: keyof typeof MaterialIcons.glyphMap; title: string; subtitle?: string; checked: boolean; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.checkRow, pressed && { opacity: 0.75 }]}>
      <View style={[styles.checkIcon, checked && { backgroundColor: palette.mint }]}>
        <MaterialIcons name={checked ? "check" : icon} size={19} color={checked ? "#fff" : palette.mint} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.checkTitle}>{title}</Text>
        {subtitle ? <Text style={styles.checkSubtitle}>{subtitle}</Text> : null}
      </View>
      <View style={[styles.checkbox, checked && { backgroundColor: palette.mint, borderColor: palette.mint }]}>
        {checked ? <MaterialIcons name="check" size={14} color="#fff" /> : null}
      </View>
    </Pressable>
  );
}

export function Pill({ label, tone = "mint" }: { label: string; tone?: "mint" | "blue" | "coral" | "gold" }) {
  const bg = tone === "blue" ? palette.blueSoft : tone === "coral" ? palette.coralSoft : tone === "gold" ? "#FFF7DF" : palette.mintSoft;
  const color = tone === "blue" ? palette.blue : tone === "coral" ? palette.coral : tone === "gold" ? "#A97314" : palette.mint;
  return <View style={[styles.pill, { backgroundColor: bg }]}><Text style={[styles.pillText, { color }]}>{label}</Text></View>;
}

export const styles = StyleSheet.create({
  card: { backgroundColor: palette.card, borderRadius: 20, padding: 17, borderWidth: 1, borderColor: "#E7F0EE", shadowColor: "#17313B", shadowOpacity: 0.04, shadowRadius: 10, shadowOffset: { width: 0, height: 4 }, elevation: 1 },
  sectionRow: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 11 },
  sectionTitle: { color: palette.ink, fontSize: 17, fontWeight: "800" },
  action: { color: palette.mint, fontSize: 13, fontWeight: "700" },
  progressTrack: { height: 8, borderRadius: 8, backgroundColor: "#E8F1EF", overflow: "hidden" },
  progressFill: { height: "100%", borderRadius: 8, backgroundColor: palette.mint },
  checkRow: { flexDirection: "row", alignItems: "center", gap: 11, paddingVertical: 10 },
  checkIcon: { width: 36, height: 36, borderRadius: 12, alignItems: "center", justifyContent: "center", backgroundColor: palette.mintSoft },
  checkTitle: { color: palette.ink, fontSize: 15, fontWeight: "700" },
  checkSubtitle: { color: palette.muted, fontSize: 12, marginTop: 3 },
  checkbox: { width: 22, height: 22, borderRadius: 7, borderWidth: 1.5, borderColor: "#C8D9D5", alignItems: "center", justifyContent: "center" },
  pill: { borderRadius: 20, paddingHorizontal: 9, paddingVertical: 5, alignSelf: "flex-start" },
  pillText: { fontSize: 11, fontWeight: "800" },
});
