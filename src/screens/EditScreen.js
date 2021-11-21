import React, { useContext, useState } from 'react';
import { View, StyleSheet, Button, Text } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { ContextState } from "../globals/context";


function EditScreen({ route, navigation }) {
  const { editNote } = useContext(ContextState);
  const { note } = route.params;

  const [text, setText] = useState(note.title);
  const [content, setContent] = useState(note.content);

  const [copy, setCopy] = useState({ id: note.id });

  const edit = () => {
    if (text === "") {
      alert("Título não pode ser vazio!");
      return;
    }

    let c = { ...copy, title: text, content: content };
    editNote(c);
    navigation.goBack();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.homeTitle}>EDITAR NOTA</Text>

      <TextInput
        style={styles.input}
        name="titulo"
        value={text}
        onChangeText={text => setText(text)}
      />

      <TextInput
        style={styles.input}
        name="conteudo"
        multiline
        numberOfLines={3}
        value={content}
        onChangeText={content => setContent(content)}
      />

      <Button
        title="Salvar"
        onPress={() => { edit() }}
      />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#23242b',
  },

  homeTitle: {
    padding: 5,
    margin: 10,
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FAF8F8',

  },

  input: {
    flexDirection: 'row',
    margin: 10,
    padding: 5,
    backgroundColor: '#ebebed',
    width: 275,
    fontSize: 16,
  }

});

export default EditScreen;