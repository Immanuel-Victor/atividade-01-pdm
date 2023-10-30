import { useState } from "react"
import { View, Text, StyleSheet } from "react-native"

const Wrapper = ({tasks}: any) => {

    return (
        <View style={styles.container}>
            <View style={styles.createdTasks}>
                <Text style={styles.texto_total}>Criadas:</Text>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{tasks.length}</Text>
                </View>
            </View>
            <View style={styles.createdTasks}>
                <Text style={styles.texto_concluidas}>Completadas:</Text>
                <View style={styles.badge}>
                    <Text style={styles.badgeText}>{tasks.filter((task:any) => task.completed == true).length}</Text>
                </View>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      width: "100%",
      flexDirection: "row",
      justifyContent: 'space-between',
      paddingLeft: 20,
      paddingRight: 20,
    },
    texto_total: {
      color: '#4EA8DE',
    },
    texto_concluidas: {
        color: "#8284FA"
    },
    createdTasks:{
        flexDirection: "row",
        gap: 10,
        marginBottom: 15
    },
    badge: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#333333",
        borderRadius: 20,
        paddingHorizontal: 10
  
    },
    badgeText: {
        color: "#FFF",
        marginHorizontal: 2,
    }
  });

export { Wrapper }