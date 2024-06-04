import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Slider from "@react-native-community/slider";
export default ProbSlider = ({ myStyle, incomeProb, setIncomeProb }) => {
  const handleSliderChange = (value) => {
    const roundedValue = Math.round(value * 100) / 100;
    setIncomeProb(roundedValue);
  };

  return (
    <View>
      <View style={myStyle.view1}>
        <Text style={myStyle.text}>Incoming</Text>
        <Text style={myStyle.text}>{incomeProb.toFixed(2)}</Text>
      </View>
      <View style={myStyle.view2}>
        <Slider
          style={{ width: "100%" }}
          value={incomeProb}
          onValueChange={handleSliderChange}
          minimumValue={0}
          maximumValue={1}
          step={0.01}
        />
      </View>
      <View style={myStyle.view1}>
        <Text style={myStyle.text}>Outgoing</Text>
        <Text style={myStyle.text}>{(1 - incomeProb).toFixed(2)}</Text>
      </View>
    </View>
  );
};
