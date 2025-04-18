import { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, ActivityIndicator } from "react-native";
import axios from "axios";
import { getPokemonDetails } from "../lib/api"; // Função de obter detalhes do Pokémon
import { styles } from "../styles/styles";
import PokeCard from "../components/PokeCard";
import Button from "../components/Button";

export default function PokemonScreen() {
  const [pokemonList, setPokemonList] = useState<any[]>([]); // Lista de pokémons carregados
  const [search, setSearch] = useState(""); // Texto de busca
  const [loading, setLoading] = useState(true); // Estado de carregamento
  const [nextUrl, setNextUrl] = useState<string | null>(null); // URL para carregar mais pokémons
  const [searchResult, setSearchResult] = useState<any | null>(null); // Resultado da busca
  const [message, setMessage] = useState(""); // Mensagem de aviso para o usuário

  // Função para buscar pokémons (100 por vez)
  const fetchPokemons = async (url: string = "https://pokeapi.co/api/v2/pokemon?limit=100") => {
    setLoading(true);
    setMessage(""); // Limpa a mensagem ao buscar os pokémons

    try {
      const response = await axios.get(url);
      const data = response.data.results; // Resultados da PokeAPI com nome e url de cada pokémon

      // Buscar detalhes de cada pokémon
      const detailedList = await Promise.all(
        data.map(async (p: any) => {
          if (!p?.url) return null;
          try {
            const details = await getPokemonDetails(p.url); // Detalhes do pokémon
            return details;
          } catch (error) {
            console.error("Erro ao buscar detalhes do Pokémon:", error);
            return null;
          }
        })
      );

      // Filtrando pokémons válidos
      const cleanedList = detailedList.filter((p) => p && p.id);
      setPokemonList((prevList) => [...prevList, ...cleanedList]); // Atualiza a lista de pokémons

      // Atualiza a URL para a próxima página de resultados
      setNextUrl(response.data.next || null);
    } catch (err) {
      console.error("Erro ao buscar pokémons:", err);
    }

    setLoading(false);
  };

  // Carregar pokémons ao montar o componente
  useEffect(() => {
    fetchPokemons(); // Carrega os primeiros 100 pokémons
  }, []);

  // Função para buscar um único Pokémon pela pesquisa
  const handleSearch = async () => {
    setSearchResult(null); // Limpa o resultado da busca anterior
    setLoading(true);

    try {
      // Verifica se o Pokémon está na lista já carregada
      const result = pokemonList.find((poke) =>
        poke.name.toLowerCase() === search.toLowerCase()
      );

      if (result) {
        setSearchResult(result); // Se encontrado, exibe o Pokémon
        setLoading(false);
        return;
      }

      // Caso o Pokémon não esteja na lista, faz uma requisição direta à PokeAPI
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`);
      const pokemonDetails = await getPokemonDetails(response.data.url);
      setSearchResult(pokemonDetails); // Exibe o Pokémon encontrado
    } catch (error) {
      console.error("Erro ao buscar Pokémon:", error);
      setSearchResult(null); // Caso erro, reseta o resultado da pesquisa
    }

    setLoading(false);
  };

  // Filtra os pokémons da lista com base no nome da pesquisa
  const filtered = pokemonList.filter((poke) =>
    poke.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔍 Buscar Pokémon</Text>

      {/* Campo de busca */}
      <TextInput
        style={styles.input}
        placeholder="Digite o nome"
        value={search}
        onChangeText={setSearch}
      />
      
      {/* Botão de pesquisa */}
      <Button text="Pesquisar" onPress={handleSearch} />

      {/* Carregando o Pokémon pesquisado */}
      {loading ? (
        <ActivityIndicator size="large" />
      ) : searchResult ? (
        <PokeCard pokemon={searchResult} /> // Exibe o Pokémon encontrado
      ) : (
        <FlatList
          data={filtered}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <PokeCard pokemon={item} />} // Exibe os pokémons filtrados
        />
      )}

      {/* Botão para carregar mais pokémons */}
      {nextUrl && !loading && (
        <Button text="Ver Todos os Pokémon (Aperte para mais 100 Pokémon's)" onPress={() => fetchPokemons(nextUrl)} />
      )}
    </View>
  );
}