import React from "react";
import { StyleSheet, TextInput, Text, View } from "react-native";
import StartMeeting from "../components/StartMeeting";
import { io } from "socket.io-client";

let socket;
const MeetingRoom = () => {
  const [text, setText] = React.useState("");
  const [roomid, setroomId] = React.useState("");
  React.useEffect(() => {
    const Api_url = "/";
    socket = io(`${Api_url}`);
    console.warn('okkk')
    socket.on(() => console.warn("connected"));

    fetch(`${Api_url}`)
      .then((res) => {
        console.warn(res);
      })
      .catch((err) => {
        console.warn(err);
      });
  }, []);
  return (
    <View style={styles.container}>
      <StartMeeting
        text={text}
        setText={setText}
        setroomId={setroomId}
        roomid={roomid}
      />
    </View>
  );
};

export default MeetingRoom;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#1c1c1c",
    flex: 1,
  },
});
