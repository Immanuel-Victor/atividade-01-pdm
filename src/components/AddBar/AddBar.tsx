import { View, TextInput, StyleSheet, Image, TouchableOpacity} from "react-native";
import plus from "../../../assets/plus.png";

const AddBar = (props:any) => {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textbar} value={props.inputValue} onChangeText={(text) => props.inputSetter(text)}/>
            <TouchableOpacity style={styles.button} onPress={props.handleTaskAddition}>
                <Image source={plus}/>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({

    button:{
        backgroundColor: "#1E6F9F",
        padding: 18,
        borderRadius: 10
    },

    container:{
        width: "auto",
        justifyContent: "center",
        flexDirection: "row",
        gap: 4,
        marginTop: 50,
        marginBottom: -140
        
    },
    textbar: {
      width: "80%",
      height: 54,
      backgroundColor: '#262626',
      color: "#FFF",
      borderRadius: 10,
      padding: 10
    },
  });
export {AddBar}