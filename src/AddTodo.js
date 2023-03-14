import { StatusBar } from "expo-status-bar";
import { StyleSheet, TextInput, View, Button, Alert } from "react-native";
import { useState } from "react";

function AddTodo({ onSubmit }) {
  const [value, setValue] = useState("");

  const pressHandler = () => {
    if (value.trim()) {
      onSubmit(value);
      setValue("");
    } else {
      Alert.alert("Название дела отсутствует");
    }
  };
  return (
    <View style={styles.block}>
      <View style={styles.input}>
        <TextInput
          onChangeText={setValue}
          value={value}
          placeholder="Enter text"
          autoCorrect={true}
          autoCapitalize="weords"
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={pressHandler} title="Add" color="white" />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  block: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  input: {
    width: "70%",
    padding: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: "#cd853f",
  },
  buttonContainer: {
    backgroundColor: "#fa8072",
    borderRadius: 7,
    paddingHorizontal: 20,
    paddingVertical: 3,
    borderColor: "#cd853f",
    borderWidth: 2,
  },
});

export default AddTodo;
