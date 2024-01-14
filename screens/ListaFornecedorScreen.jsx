import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { ListItem } from 'react-native-elements';

const ListaFornecedoresScreen = ({ route }) => {
  const { nome, endereco, contato, categoria } = route.params;
  
  return (
    <View>
      <Text>Dados do Fornecedor</Text>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title>Nome: {nome}</ListItem.Title>
          <ListItem.Subtitle>Endereço: {endereco}</ListItem.Subtitle>
          <ListItem.Subtitle>Contato: {contato}</ListItem.Subtitle>
          <ListItem.Subtitle>Categoria: {categoria}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    </View>
  );
};

export default ListaFornecedoresScreen;
