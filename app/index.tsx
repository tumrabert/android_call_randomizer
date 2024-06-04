import { Text, View, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { myStyle } from "../styles/myStyle";
import Phone from "../components/form/Phone";
import DateSelector from "../components/form/DateSelector";
import ProbSlider from "../components/form/ProbSlider";
export default function Index() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(new Date());
  const [incomeProb, setIncomeProb] = useState(0.5);
  const [frequently, setFrequently] = useState("");
  const [maxTime, setMaxTime] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState("");

  const handleReset = () => {
    setStartDate(null);
    setEndDate(new Date());
    setIncomeProb(0.5);
    setFrequently("");
    setMaxTime("");
    setPhoneNumber("");
    setError(""); // Reset error message if any
  };

  const handleSubmit = () => {
    // Your submission logic here
    // You can validate the inputs and perform any necessary actions
    // For example, you can check if required fields are filled and show an error if not
    if (!startDate || !frequently || !maxTime || !phoneNumber) {
      setError("Please fill in all required fields.");
      return;
    } // If all required fields are filled, you can proceed with your submission logic

    setError(""); // Clear error message if any // Perform submission actions...
    console.log("Submitted data:", startDate, frequently, maxTime, phoneNumber);
  };

  return (
    <>
            <Text style={myStyle.header}>Create Call log</Text>     {" "}
      <View style={myStyle.container}>
                <Text style={myStyle.text}>1. Fill Phone number</Text>       {" "}
        <View style={myStyle.content}>
                   {" "}
          <Phone
            style={myStyle.content}
            myStyle={myStyle.Phone}
            phoneNumber={phoneNumber}
            setPhoneNumber={setPhoneNumber}
          />
                 {" "}
        </View>
                <Text style={myStyle.text}>2. Start-End Date</Text>       {" "}
        <View style={myStyle.content}>
                   {" "}
          <DateSelector
            myStyle={myStyle.DateSelector}
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
                 {" "}
        </View>
               {" "}
        <Text style={myStyle.text}>3. Maximum Call Time in Seconds</Text>       {" "}
        <View style={myStyle.content}>
                   {" "}
          <TextInput
            placeholder="Default value is 60 seconds"
            style={myStyle.textInput}
            keyboardType="numeric"
            value={maxTime} // Convert maxTime to string
            onChangeText={(text) => setMaxTime(text)} // Convert text to number
            defaultValue={"60"}
          />
                 {" "}
        </View>
                <Text style={myStyle.text}>4. Frequently(every n day)</Text>   
           {" "}
        <View style={myStyle.content}>
                   {" "}
          <TextInput
            placeholder="Default value is 1 day(every day)"
            style={myStyle.textInput}
            keyboardType="numeric"
            value={frequently}
            onChangeText={(text) => setFrequently(text)}
            defaultValue={"1"}
          />
                 {" "}
        </View>
               {" "}
        <Text style={myStyle.text}>5. Probability of random tasks.</Text>       {" "}
        <View style={myStyle.content}>
                   {" "}
          <ProbSlider
            myStyle={myStyle.ProbSlider}
            incomeProb={incomeProb}
            setIncomeProb={setIncomeProb}
          />
                 {" "}
        </View>
                <Text style={myStyle.error}>{error}</Text>       {" "}
        <View style={myStyle.content_btn}>
                    <Button title="Reset" color="grey" onPress={handleReset} /> 
                 {" "}
          <Button title="Submit" color="purple" onPress={handleSubmit} />       {" "}
        </View>
             {" "}
      </View>
         {" "}
    </>
  );
}
