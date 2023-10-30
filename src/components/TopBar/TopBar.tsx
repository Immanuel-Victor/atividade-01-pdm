import {StyleSheet, View, Text } from "react-native"
import { AddBar } from "../AddBar/AddBar";

const TopBar = ({inputSetter, inputValue, handleTaskAddition}:any ) => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Minhas Tecnologias</Text>
            <AddBar inputSetter={inputSetter} inputValue={inputValue} handleTaskAddition={handleTaskAddition}> </AddBar>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      width: "100%",
      height: "30%",
      backgroundColor: '#0D0D0D',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 50
    },
    texto: {
      color: '#4EA8DE',
      fontSize: 25,
    }
  });

export {TopBar}