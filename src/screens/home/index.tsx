import { Alert, View, Text, TextInput,TouchableOpacity, FlatList } from "react-native";
import { style } from "./stylesheet";
import { useState } from "react";
import { Task } from "../components/tasks";
export function Home(){
    const[tasks, setTasks] = useState<string[]>([])
    const [taskName, setTaskName] = useState('');
    const [finish, setFinish] = useState(false)

    function handleTaskAdd() {
      if (tasks.includes(taskName)) {
        return Alert.alert("task já existe", "a task descrita já existe informe outra");
      }
      setTasks(prevState => [...prevState, taskName]);
      setTaskName('');
  
    }
    function handleParticipantRemove(name: string) {
      Alert.alert("Remover", `Remover o participante ${name}?`, [
        {
          text: 'Sim',
          onPress: () => setTasks(prevState => prevState.filter(tasks => tasks !== name))
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ])
    }
    return(
      <>
       <View style={style.taskhearder}>
           
                <Text style={style.toStyle}>To<Text style={style.doStyle}>do</Text></Text> 
               
          
       </View>
       <View style={style.form}>
          <TextInput 
                    style={style.input}
                    placeholder="Descrição tarefa"
                    placeholderTextColor="#6B6B6B"
                    onChangeText={setTaskName}
                    value={taskName}
                    
            />
            <TouchableOpacity style={style.button} onPress={handleTaskAdd}>
            <Text style={style.buttonText}>
              +
            </Text>
          </TouchableOpacity>
       </View>
      <View style={style.body}>
        <Text style={style.created}>Criadas <Text style={style.countcreate}>{tasks.length}</Text></Text>
      <FlatList 
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Task 
            key={item} 
            name={item} 
            onRemove={()=> handleParticipantRemove(item)}  
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={style.fontfooter}>
           <Text style={style.textStrong}>Você ainda não tem tarefas cadastradas</Text>
           Crie tarefas e organize seus itens a fazer.
          </Text>
        )}
      />
      </View>
      </>
      
    )
}


