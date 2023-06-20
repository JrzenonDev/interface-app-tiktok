import { StyleSheet, Text, View } from "react-native";

export function Search() {
  return (
    <View styles={styles.container}>
      <Text>Página Search </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
