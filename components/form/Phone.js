import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

export default Phone = (myStyle, phoneNumber, setPhoneNumber) => {
  const getRandomPhoneNumber = () => {
    const prefixes = ["08", "06", "09"];
    const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const remainingDigitsLength = 10 - prefix.length;
    let remainingDigits = "";

    for (let i = 0; i < remainingDigitsLength; i++) {
      remainingDigits += Math.floor(Math.random() * 10).toString();
    }

    const newPhoneNumber = prefix + remainingDigits;
    setPhoneNumber(newPhoneNumber);
  };

  return (
    <>
      <View style={myStyle.content80}>
        <TextInput
          placeholder="Please fill phone number"
          style={myStyle.textInput}
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>
      <View style={myStyle.content20}>
        <Button title="Random number" onPress={getRandomPhoneNumber} />
      </View>
    </>
  );
};
