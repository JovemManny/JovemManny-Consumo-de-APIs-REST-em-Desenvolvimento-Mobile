import { View, Text } from "react-native";
import { styles } from "../styles/styles";

export default function NotFound() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Página não encontrada 😢</Text>
    </View>
  );
}