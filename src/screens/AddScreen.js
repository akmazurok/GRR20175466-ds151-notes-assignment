import React, { useState, useContext } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';
import { ContextState } from "../globals/context";


function AddScreen({ navigation }) {
  const { notes, addNote } = useContext(ContextState);
  const [text, setText] = useState('');
  const [content, setContent] = useState('');

  const submit = (text, content) => {
    if (text === "") {
      alert("Nota vazia!");
      return;
    }
    addNote(text, content);
    navigation.goBack();
  }


  return (
    <View style={styles.container}>
      <Text style={styles.homeTitle}>ADICIONAR NOTA</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Titulo"
        value={text}
        onChangeText={text => setText(text)}

      />
      <TextInput
        style={styles.input}
        placeholder="Conteudo"
        multiline
        numberOfLines={3}
        value={content}
        onChangeText={content => setContent(content)}

      />

      <Button
        title="Adicionar"
        onPress={() => { submit(text, content) }} />
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

  },



});

export default AddScreen;