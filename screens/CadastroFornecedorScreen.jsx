import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import ImageUploader from '../componentes/ImageUploader.jsx';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import ListaFornecedorScreen from '../screens/ListaFornecedorScreen.jsx';

const CadastroFornecedorScreen = ({navigation}) => {
  //const navigation = useNavigation();
  const salvar = async () => {
    try {
      const id = new Date().getTime().toString()
      await AsyncStorage.setItem(`nome_$(id)`, 'valor do nome');
      await AsyncStorage.setItem(`endereco_$(id)`, 'valor do endereco');
      await AsyncStorage.setItem(`contato_$(id)`, 'valor do contato');
      await AsyncStorage.setItem('categoria_$(id)`', 'valor da categoria');

      console.log('Dados salvos com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
    }
  };

  const fornecedor = () => {
    navigation.navigate('ListaFornecedores', {
      nome,
      endereco,
      contato,
      categoria,
  })
}

  const [nome, setNome] = useState('');
  const [endereco, setEndereco] = useState('');
  const [contato, setContato] = useState('');
  const [categoria, setCategoria] = useState('');
  

  const handleSalvar = () => {
    
  };

  return (
    <View>
      <Text>Cadastro de Fornecedor</Text>
      <TextInput placeholder="Nome..." value={nome} onChangeText={setNome} />
      <TextInput placeholder="Endereço..." value={endereco} onChangeText={setEndereco} />
      <TextInput placeholder="Contato..." value={contato} onChangeText={setContato} />
      <TextInput placeholder="Categoria..." value={categoria} onChangeText={setCategoria} />
      <ImageUploader />
      <Button style = {estilos.input} title="Salvar" onPress={salvar} />
      <Button title = "Lista de Fornecedores" onPress={() => {
          navigation.navigate('ListaFornecedores', {
            nome,
            endereco,
            contato,
            categoria,
          });
        }}
      />
    </View>
  );
};

export default CadastroFornecedorScreen;

const estilos = StyleSheet.create({
  input:{
    paddingBottom:40
  }
})