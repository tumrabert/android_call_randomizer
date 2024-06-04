import { StyleSheet } from "react-native";
export const myStyle = StyleSheet.create({
  Phone: {
    content: {
      flexDirection: "row",
      justifyContent: "space-between",
      backgroundColor: "green",
    },
    content80: {
      flex: 8,
    },
    content20: {
      flex: 2,
    },
    textInput: {
      width: "100%",
      padding: 10,
      borderColor: "white",
      borderWidth: 1,
      color: "white",
      placeholderTextColor: "white",
    },
  },
  DateSelector: {
    view1: {
      flex: 2, // 20% of the space
      flexDirection: "column",
      alignItems: "center",
    },
    view2: {
      flex: 6, // 60% of the space
      backgroundColor: "green", // Just for visual distinction
      marginTop: 10,
    },
    text: {
      color: "white",
    },
    textInput: {
      width: "100%",
      padding: 10,
      borderColor: "gray",
      borderWidth: 1,
      color: "white",
    },
  },
  ProbSlider: {
    view1: {
      flex: 2, // 20% of the space
      flexDirection: "column",
      alignItems: "center",
    },
    view2: {
      flex: 6, // 60% of the space
      backgroundColor: "green", // Just for visual distinction
      marginTop: 10,
    },
    text: {
      color: "white",
    },
  },
  header: {
    backgroundColor: "purple",
    padding: 10,
    color: "white",
  },
  text: {
    color: "white",
  },
  container: {
    flex: 1,
    alignItems: "stretch",
    padding: 10,
    backgroundColor: "black",
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "green",
  },
  content_btn: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: 10,
  },
  half: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  textInput: {
    width: "100%",
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
    color: "white",
  },
  view1: {
    flex: 2, // 20% of the space
    flexDirection: "column",
    alignItems: "center",
  },
  view2: {
    flex: 6, // 60% of the space
    backgroundColor: "green", // Just for visual distinction
    marginTop: 10,
  },
  button: {
    margin: 10,
    padding: 10,
  },
  error: {
    color: "red",
    marginBottom: 10,
  },
});
