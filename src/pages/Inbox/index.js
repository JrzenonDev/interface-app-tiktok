import { StyleSheet, Text, View } from "react-native";

export function Inbox() {
  return (
    <View styles={styles.container}>
      <Text>Página Inbox </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
