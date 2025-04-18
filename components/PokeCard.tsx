import { View, Text, Image, StyleSheet } from "react-native";

export default function PokeCard({ pokemon }: { pokemon: any }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: pokemon.sprites.front_default }} style={styles.image} />
      <Text style={styles.name}>{pokemon.name}</Text>
      <Text style={styles.info}>Tipo: {pokemon.types.map((t: any) => t.type.name).join(", ")}</Text>
      <Text style={styles.info}>Altura: {pokemon.height} | Peso: {pokemon.weight}</Text>
      <Text style={styles.info}>Habilidades: {pokemon.abilities.map((a: any) => a.ability.name).join(", ")}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f0f0f0",
    padding: 12,
    borderRadius: 12,
    marginVertical: 8,
    alignItems: "center",
  },
  image: {
    width: 96,
    height: 96,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
  },
  info: {
    fontSize: 14,
    marginTop: 4,
  },
});