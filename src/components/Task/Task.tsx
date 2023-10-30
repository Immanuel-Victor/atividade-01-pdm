import { View, Image, Text, StyleSheet, TouchableOpacity, Button } from "react-native"
import plus from "../../../assets/plus.png";
import check from "../../../assets/check.png";
import trash from "../../../assets/trash.png";

const Task = (props:any) => {

  const handleDeletion = () => {
    props.handleTaskDeletion({id: props.id, description: props.description, completed: props.completed})
    
  }

  const handleCompletion = () => {
    const checked = !props.completed
    return props.handleTaskCompletion({id: props.id, description: props.description, completed: checked})
  }

    return(
        <View style={styles.TechContainer}>
            <TouchableOpacity style={!props.completed ? styles.unmarked : styles.marked} onPress={handleCompletion}>
              {props.completed && <Image source={check} />}
            </TouchableOpacity>
            <View style={styles.textContainer}>
              <Text style={!props.completed ? styles.taskText : styles.completedText} lineBreakMode="tail">{props.description}</Text>
            </View>
            <TouchableOpacity onPress={handleDeletion}>
              <Image source={trash} />
            </TouchableOpacity>
        </View>
    )

}

const styles = StyleSheet.create({
    TechContainer: {
      minWidth: "90%",
      maxWidth: "90%",
      backgroundColor: '#333333',
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-around",
      marginTop: 10,
      paddingVertical: 30,
      paddingHorizontal: 10,
      gap: 5,
      borderRadius: 10
    },
    textContainer:{
      width: "60%",
    },
    taskText: {
      color: "#FFF"
    },
    unmarked: {
      borderWidth: 1,
      borderRadius: 50,
      width: 24,
      height: 24,
      borderColor: "#4EA8DE"
    },
    marked: {
      borderWidth: 1,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center",
      width: 24,
      height: 24,
      backgroundColor: "#5E60CE",
      borderColor: "#5E60CE"
    },
    completedText: {
      color: "#FFF",
      textDecorationLine: "line-through"
    }
  });

export { Task }