import React, { useContext } from 'react';
import { View, StyleSheet, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { ContextState } from "../globals/context";
import { Feather } from '@expo/vector-icons';

function HomeScreen({ navigation }) {
  const { notes, deleteNote } = useContext(ContextState);

  const listavazia = () => {
    if (notes.length === 0) {
      return (
        <>
          <Text style={styles.textoCorpo}>Sem notas</Text>
        </>
      )
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topo}>
        <Text style={styles.homeTitle}>LISTA DE NOTAS</Text>
        <Button
          title="Adicionar"
          onPress={() => navigation.navigate('Adicionar')} />

      </View>

      {listavazia()}
      <FlatList
        data={notes}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => {

          return (
            <View style={styles.noteCard}>
              <Text style={styles.cardTitle}>{item.title}</Text>
              <Text style={styles.cardText}>{item.content}</Text>

              <View style={styles.buttons}>
                <TouchableOpacity alt="Editar" onPress={() => navigation.navigate(
                  'Editar', { note: item })}>
                  <Feather name="edit" color="orange" size={25} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => deleteNote(item.id)}>
                  <Feather name="trash-2" color="red" size={25} />
                </TouchableOpacity>
              </View>
            </View>
          )}}
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

  topo: {
    flexDirection: 'row',
    width: 275,
    padding: 10,
    justifyContent: 'space-between',
  },

  homeTitle: {
    margin: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FAF8F8',

  },

  textoCorpo: {
    color: '#d9ddde',
    padding: 20,

  },

  noteCard: {
    flex: 1,
    backgroundColor: '#ebebed',
    width: 275,
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },

  cardTitle: {
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },

  cardText: {
    marginBottom: 10,
    padding: 10,
    fontSize: 16,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  }

});

export default HomeScreen;