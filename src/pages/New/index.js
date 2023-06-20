import { StyleSheet, Text, View } from "react-native";

export function New() {
  return (
    <View styles={styles.container}>
      <Text>Página New </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
