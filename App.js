import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Button } from "react-native";
import * as Speech from "expo-speech";

export default function App() {
  let playerName = "User Colin";
  const [count, setCount] = useState(0);
  const [targetedColor, setTargetedColor] = useState("red");

  function myClick() {
    Speech.speak(playerName);
    setCount(count + 1);
    let randomNr = Math.random();
    if (randomNr < 0.1) {
      setTargetedColor("red");
    } else if (randomNr < 0.5) {
      setTargetedColor("blue");
    } else {
      setTargetedColor("green");
    }
  }

  function myClick1() {
    if (targetedColor == "red") {
      Speech.speak("Congratulations");
    } else {
      Speech.speak("Try again please");
    }
  }
  function myClick2() {
    if (targetedColor == "blue") {
      Speech.speak("Yes, blue");
    } else {
      Speech.speak("No, not blue");
    }
  }
  function myClick3() {
    Speech.speak("It is never yellow!");
  }
  function myClick4() {
    if (targetedColor == "green") {
      Speech.speak("Finally, you got it right...");
    } else {
      Speech.speak("Still wrong!");
    }
  }

  return (
    <View style={{ backgroundColor: "sandybrown", flex: 1 }}>
      <View style={{ flex: 0.05 }} />
      <View style={{ flexDirection: "row", flex: 1 }}>
        <View style={{ flex: 3 }}>
          <View style={styles.full_row_style}>
            <View style={{ flex: 4, flexDirection: "row" }}>
              <Image
                source={require("./pics/pin1.png")}
                style={styles.image_style}
                onClick={myClick1}
              />
              <Image
                source={require("./pics/pin2.png")}
                style={styles.image_style}
                onClick={myClick2}
              />
              <Image
                source={require("./pics/pin3.png")}
                style={styles.image_style}
                onClick={myClick3}
              />
              <Image
                source={require("./pics/pin4.png")}
                style={styles.image_style}
                onClick={myClick4}
              />
            </View>
            <View style={{ backgroundColor: "black", width: 4 }} />
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <View style={{ flex: 1, flexDirection: "row" }}>
                  <Image
                    source={require("./pics/pin5.png")}
                    style={styles.small_image_style}
                  />
                </View>
                <View style={{ flex: 1 }} />
              </View>
              <View style={{ flex: 1 }} />
            </View>
          </View>
          <View style={{ backgroundColor: "black", height: 4 }} />
          <View style={styles.full_row_style}>
            <View style={{ flex: 4, flexDirection: "row" }}>
              <Image
                source={require("./pics/pin6.png")}
                style={styles.image_style}
              />
              <Image
                source={require("./pics/pin1.png")}
                style={styles.image_style}
              />
              <Image
                source={require("./pics/pin1.png")}
                style={styles.image_style}
              />
              <Image
                source={require("./pics/pin3.png")}
                style={styles.image_style}
              />
            </View>
            <View style={{ backgroundColor: "black", width: 4 }} />
            <View style={{ flex: 1 }}>
              <View style={{ flex: 1, flexDirection: "row" }}>
                <Image
                  source={require("./pics/pin1.png")}
                  style={styles.small_image_style}
                />
                <Image
                  source={require("./pics/pin5.png")}
                  style={styles.small_image_style}
                />
              </View>
              <View style={{ flex: 1 }} />
            </View>
          </View>
          <View style={{ backgroundColor: "black", height: 4 }} />

          <View style={styles.full_row_style}>
            <View style={{ flex: 4 }} />
            <View style={{ backgroundColor: "black", width: 4 }} />
            <View style={{ flex: 1 }} />
          </View>
          <View
            style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
          >
            <Text
              style={{
                fontSize: 21,
                color: "red",
                fontFamily: "Courier",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              It's your turn, {playerName}..
            </Text>
            <Text
              style={{
                fontSize: 21,
                color: "red",
                fontFamily: "Courier",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              Clicked: {count} times...
            </Text>
            <Text
              style={{
                fontSize: 21,
                color: "red",
                fontFamily: "Courier",
                fontWeight: "bold",
                fontStyle: "italic",
              }}
            >
              Target color is: {targetedColor}
            </Text>
          </View>
        </View>
        <View style={{ flex: 2, backgroundColor: "green" }}>
          <Image
            source={require("./pics/mastermind.png")}
            style={{ resizeMode: "stretch", flex: 1, width: "auto" }}
          />
        </View>
      </View>
      <View>
        <Button
          title="Let's play!"
          onPress={myClick}
          style={{ flex: 1, resizeMode: "stretch" }}
        />
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  full_row_style: {
    flexDirection: "row",
    flex: 0.07,
  },
  small_image_style: {
    flex: 1,
    resizeMode: "stretch",
    height: "auto",
  },
  image_style: {
    flex: 1,
    resizeMode: "stretch",
    height: "auto",
  },
});
