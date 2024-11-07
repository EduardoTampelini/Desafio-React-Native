import {  Text, TouchableOpacity, View } from "react-native";
import { styles } from "./stylesheet";
type Props = {
  name: string;
  onRemove: () => void;
  favorite: () => boolean;
}
export function Task({ name, onRemove, favorite }: Props) {
  return (
    <View style={styles.container}>
        <TouchableOpacity
        onPress={favorite}
        style={{
          height: 24,
          width: 24,
          borderRadius: 4,
          borderWidth: 2,
          borderColor: '#333',
          backgroundColor: favorite() ? '#333' : '#fff',
          justifyContent: 'center',
          alignItems: 'center',
          marginRight: 8,
        }}
      >
        {favorite() && (
          <View
            style={{
              height: 12,
              width: 12,
              backgroundColor: '#fff',
            }}
          />
        )}
      </TouchableOpacity>
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