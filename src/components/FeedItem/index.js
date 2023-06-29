import { Video } from "expo-av";
import { useRef } from "react";
import { Dimensions, Pressable, StyleSheet } from "react-native";

const { height: heightScreen } = Dimensions.get("screen");

export function FeedItem({ data }) {
  const video = useRef(null);
  return (
    <Pressable>
      <Video
        ref={video}
        style={{ width: "100%", height: heightScreen }}
        source={{ uri: data?.video }}
        resizeMode="cover"
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
