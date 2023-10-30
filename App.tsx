import { StatusBar } from 'expo-status-bar';
import { GestureResponderEvent, StyleSheet, Text, View } from 'react-native';
import { TopBar } from './src/components/TopBar/TopBar';
import { useState } from 'react';
import { TaskList } from './src/components/TaskList/TaskList';
import { Wrapper } from './src/components/Wrapper/wrapper';

export default function App() {

  const [tasks, setTasks] = useState<Array<Task>>([])
  const [inputValue, setInputValue] = useState('')

  const handleTaskAddition = () => {
    setTasks((currentValue)=> {
      console.log(currentValue)
      if(inputValue){
        return [...currentValue, {id: (tasks.length + 1), completed: false, description: inputValue}]
      }else{
        return currentValue
      }
    })
  }

  const handleTaskDeletion = (task:Task) => {
    const newTasks = tasks.filter((tech) => {
      return tech.id !== task.id
    })

    setTasks(newTasks)
  }

  const handleTaskCompletion = (task:Task) => {

    const testTasks = tasks.map((tech, index) => {
      if(tech.id == task.id) {
        tech = task
        return task
      }

      return tech
    })

    setTasks(testTasks)
/*     let newTasks = tasks
    const index = tasks.findIndex((tech) => tech.id == task.id)
    newTasks[index] = task
    setTasks(newTasks) */
  }

  return (
    <View style={styles.container}>
      <TopBar inputSetter={setInputValue} inputValue={inputValue} handleTaskAddition={handleTaskAddition}/>
      <Wrapper tasks={tasks} />
      <TaskList tasks={tasks} handleTaskDeletion={handleTaskDeletion} handleTaskCompletion={handleTaskCompletion}/>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1A1A',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
