import React from "react";
import { ScrollView, View, Text, StyleSheet, TouchableOpacity, Image, TextInput } from "react-native";

const RestauranteDetailScreen = ({ route }) => {
  const { nome, descricao, horario, telefone, imagem, endereco, comentario } = route.params;

  const [ncomentario, setNcomentario] = React.useState(""); // Estado para o novo comentário
  const [comentarioN, setComentarioN] = React.useState(comentario); // Estado para os comentários

  function enviarTarefa() {
    if(ncomentario != '') {
      setComentarioN(comentarioN + "\n" +"Nome da pessoa: "+ ncomentario);
      setNcomentario("");
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{ uri: imagem }} style={styles.imagem} />
        <Text style={styles.nome}>{nome}</Text>
        <Text style={styles.descricao}>{descricao}</Text>
        <Text style={styles.horario}>🕒 {horario}</Text>
        <Text style={styles.endereco}>📍 {endereco}</Text>
        <Text style={styles.telefone}>📞 {telefone}</Text>

        <View style={styles.botoes}>
          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>📨 WhatsApp</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>📞 Ligar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao}>
            <Text style={styles.textoBotao}>📍 Localização</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.comentarioSection}>

          <View style={styles.comentarioInputContainer}>
          <Text style={styles.comentario}>Comentário:</Text>
          </View>
            <TextInput
              style={styles.input}
              placeholder="Escreva seu comentário..."
              multiline
              numberOfLines={4}
              value={ncomentario}
              onChangeText={(texto) => setNcomentario(texto)}
            />
        </View>
        <TouchableOpacity style={styles.botaoComentario} onPress={enviarTarefa}>
          <Text style={styles.textoBotao}>Enviar</Text>
        </TouchableOpacity>

        <View style={styles.comentariosDisplay}>
          <Text style={styles.comentarioText}>{comentarioN}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  imagem: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
  },
  nome: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  descricao: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
  },
  horario: {
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },
  endereco: {
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },
  telefone: {
    fontSize: 14,
    color: "gray",
    marginBottom: 20,
  },
  botoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  botao: {
    backgroundColor: "#007AFF",
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 5,
    flex: 1,
    margin: 3,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 17,
    fontWeight: "bold",
  },
  comentarioSection: {
    width: "100%",
    marginTop: 20,
  },
  comentario: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left",
    width: "78%",
  },
  comentarioInputContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    width: "100%",
    marginBottom: 20,
  },
  input: {
    height: 100,
    width: "100%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    textAlignVertical: "top",
    backgroundColor: "#f9f9f9",
  },
  botaoComentario: {
    backgroundColor: "#007AFF",
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    borderRadius: 5,
    width: "100%",
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  comentariosDisplay: {
    marginTop: 20,
    width: "100%",
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 5,
  },
  comentarioText: {
    fontSize: 16,
    color: "#333",
    marginBottom: 5,
  },
});

export default RestauranteDetailScreen;
