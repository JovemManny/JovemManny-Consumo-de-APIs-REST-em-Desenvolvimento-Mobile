import { StyleSheet } from "react-native";

// Adicionando no arquivo styles.ts
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  infoMessage: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
    fontStyle: 'italic',
  },
});