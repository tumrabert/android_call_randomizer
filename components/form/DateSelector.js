import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export default DateSelector = ({
  myStyle,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}) => {
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const onStartDateChange = (event, selectedDate) => {
    setShowStartDatePicker(false);
    if (selectedDate) {
      setStartDate(selectedDate);
    }
  };

  const onEndDateChange = (event, selectedDate) => {
    setShowEndDatePicker(false);
    if (selectedDate) {
      setEndDate(selectedDate);
    }
  };

  return (
    //<View style={myStyle.content}>
    <>
      <View style={myStyle.view1}>
        <Text style={myStyle.text}>Start Date</Text>
        <View>
          <TextInput
            placeholder="Please select start date"
            style={myStyle.textInput}
            value={startDate ? startDate.toDateString() : ""}
            onFocus={() => setShowStartDatePicker(true)}
          />
          {showStartDatePicker && (
            <DateTimePicker
              value={startDate || new Date()}
              mode="date"
              display="default"
              onChange={onStartDateChange}
            />
          )}
        </View>
      </View>

      <View style={myStyle.view1}>
        <Text style={myStyle.text}>End Date</Text>
        <View>
          <TextInput
            placeholder="End date"
            style={myStyle.textInput}
            value={endDate ? endDate.toDateString() : ""}
            onFocus={() => setShowEndDatePicker(true)}
          />
          {showEndDatePicker && (
            <DateTimePicker
              value={endDate || new Date()}
              mode="date"
              display="default"
              onChange={onEndDateChange}
            />
          )}
        </View>
      </View>
    </>
  );
};
