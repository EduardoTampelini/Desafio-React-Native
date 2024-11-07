import { View, Text, TextInput,TouchableOpacity, FlatList } from "react-native";
import { style } from "./stylesheet";
import { useState } from "react";
import { Task } from "../components/tasks";
export function Home(){
    const[tasks, setTasks] = useState<string[]>([])
    const [taskName, setTaskName] = useState('');
    const [finish, setFinish] = useState(false)
    return(
      <>
       <View style={style.container}>
           
                <Text style={style.toStyle}>To<Text style={style.doStyle}>do</Text></Text> 
               
          
       </View>
       <TextInput 
                style={style.input}
                placeholder="Descrição tarefa"
                placeholderTextColor="#6B6B6B"
                
                
        />
        <TouchableOpacity style={style.button} >
        <Text style={style.buttonText}>
          +
        </Text>
      </TouchableOpacity>
      <View >
      <FlatList 
        data={tasks}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Task 
            key={item} 
            name={item} 
            onRemove={() => []}  
            favorite={()=> false}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text >
            Ninguém chegou no evento ainda? Adicione participantes a sua lista de presença.
          </Text>
        )}
      />
      </View>
      </>
      
    )
}


