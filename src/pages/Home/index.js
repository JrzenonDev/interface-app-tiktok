import { StyleSheet, Text, View } from "react-native";

export function Home() {
  return (
    <View styles={styles.container}>
      <Text>Página Home</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
