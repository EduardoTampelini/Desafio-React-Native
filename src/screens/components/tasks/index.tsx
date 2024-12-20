import {  Text, TouchableOpacity, View } from "react-native";
import { styles } from "./stylesheet";
type Props = {
  name: string;
  onRemove: () => void;
 
}
export function Task({ name, onRemove }: Props) {
  return (
    <View style={styles.container}>
       
      <Text style={styles.name}>
      {name}

      </Text>
      <TouchableOpacity style={styles.button} onPress={onRemove}>
          <Text style={styles.buttonText}>
            -
          </Text>
        </TouchableOpacity>
    </View>
  )
}