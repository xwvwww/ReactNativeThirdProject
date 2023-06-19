import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
  Text,
  Pressable
} from "react-native";

const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [operation, setOperation] = useState("");
  const [result, setResult] = useState("");

  const calculateResult = () => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);
    let res = 0;

    switch (operation) {
      case "+":
        res = n1 + n2;
        break;
      case "-":
        res = n1 - n2;
        break;
      case "*":
        res = n1 * n2;
        break;
      case "/":
        res = n1 / n2;
        break;
      default:
        break;
    }

    setResult(res.toString());
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          placeholder="Enter Number 1"
          onChangeText={(text) => setNum1(text)}
          value={num1}
        />
        <TextInput
          style={styles.textInput}
          keyboardType="numeric"
          placeholder="Enter Number 2"
          onChangeText={(text) => setNum2(text)}
          value={num2}
        />
      </View>
      <View style={styles.operationContainer}>
        <Pressable
          style={styles.operationButton}
          onPress={() => setOperation("+")}
        >
          <Text style={styles.operationButtonText}>+</Text>
        </Pressable>
        <Pressable
          style={styles.operationButton}
          onPress={() => setOperation("-")}
        >
          <Text style={styles.operationButtonText}>-</Text>
        </Pressable>
        <Pressable
          style={styles.operationButton}
          onPress={() => setOperation("*")}
        >
          <Text style={styles.operationButtonText}>*</Text>
        </Pressable>
        <Pressable
          style={styles.operationButton}
          onPress={() => setOperation("/")}
        >
          <Text style={styles.operationButtonText}>/</Text>
        </Pressable>
      </View>
      <Pressable style={styles.calculateButton} onPress={calculateResult}>
        <Text style={styles.calculateButtonText}>Calculate</Text>
      </Pressable>
      {result !== "" && <Text style={styles.resultText}>{result}</Text>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center"
  },
  textInput: {
    width: 150,
    height: 40,
    margin: 10,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10
  },
  operationContainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  operationButton: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5
  },
  operationButtonText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  calculateButton: {
    backgroundColor: "#2196F3",
    padding: 10,
    borderRadius: 5,
    marginBottom: 20
  },
  calculateButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff"
  },
  resultText: {
    fontSize: 24,
    fontWeight: "bold"
  }
});

export default Calculator;
