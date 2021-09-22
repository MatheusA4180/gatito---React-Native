//import { StatusBar } from 'expo-status-bar';
import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR';

import TelaPadrao from './src/componentes/TelaPadrao'
import Rotas from './src/rotas';
//import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return <TelaPadrao><Rotas /></TelaPadrao>;
}



/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>GG</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/
