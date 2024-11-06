import { View, Text, TextInput,TouchableOpacity } from "react-native";
import { style } from "./stylesheet";
export function Home(){
    return(
       <View style={style.container}>
           
                <Text style={style.toStyle}>To<Text style={style.doStyle}>do</Text></Text> 
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
          
       </View>
       
    )
}


