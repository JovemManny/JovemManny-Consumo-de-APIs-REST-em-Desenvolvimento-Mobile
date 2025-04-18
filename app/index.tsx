import { View, Text } from "react-native";
import { Link } from "expo-router";
import { styles } from "../styles/styles";
import Button from "../components/Button";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📱 Pokédex</Text>
      <Link href="/pokemon" asChild>
        <Button text="Entrar" />
      </Link>
    </View>
  );
}