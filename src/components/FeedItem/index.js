import { Video } from "expo-av";
import { useRef, useState } from "react";
import { Dimensions, Pressable, StyleSheet } from "react-native";

const { height: heightScreen } = Dimensions.get("screen");

export function FeedItem({ data }) {
  const video = useRef(null);
  const [status, setStatus] = useState({});
  function handlePlayer() {
    status.isPlaying ? video.current?.pauseAsync() : video.current?.playAsync();
  }

  return (
    <Pressable onPress={handlePlayer}>
      <Video
        ref={video}
        style={{ width: "100%", height: heightScreen }}
        source={{ uri: data?.video }}
        resizeMode="cover"
        shouldPlay={false}
        isMuted={false}
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
