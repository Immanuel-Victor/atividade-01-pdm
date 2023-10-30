import { View, Text, Image, StyleSheet, ScrollView } from "react-native"
import { Task } from "../Task/Task"
import Clipboard from "../../../assets/Clipboard.png"


const TaskList = (props:any) => {

    return(
        <View style={styles.containerList}>
            <ScrollView contentContainerStyle={styles.listStyle}>
                <View style={styles.containerList}>
                    {
                        props.tasks.length > 0 ? props.tasks.map((item:Task) => {
                            return(
                                <Task key={item.id} id={item.id} completed={item.completed} description={item.description} handleTaskDeletion={props.handleTaskDeletion} handleTaskCompletion={props.handleTaskCompletion}></Task>
                            )
                        } ) : 
                        <View style={styles.noTechs}>
                            <Image source={Clipboard} style={styles.image}/>
                            <View style={styles.noTechsText}>
                                <Text style={styles.bolder}>Você ainda não tem tecnologias cadastradas</Text>
                                <Text style={styles.normal}>Crie tarefas e organize seus itens a fazer</Text>
                            </View>
                        </View>
                    }
                </View>
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    listStyle: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    containerList: {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    },
    noTechs: {
        paddingTop: 50,
        gap: 10,
        alignItems: "center",
        justifyContent: "center",
    },
    noTechsText: {
        alignItems: "center",
        justifyContent: "center",
    },
    bolder: {
        color: "#808080",
        fontWeight: "bold"
    },
    normal: {
        color: "#808080",
    },
    image: {
        marginBottom: 20
    }
  });

export { TaskList }