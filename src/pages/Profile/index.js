import { StyleSheet, Text, View } from "react-native";

export function Profile() {
  return (
    <View styles={styles.container}>
      <Text>Página Profile </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});