import React, { useState } from 'react';
import { View, Text, Image, Button } from 'react-native';
import ImagePicker from 'react-native-image-picker';

const ImageUploader = () => {
  const [imagem, setImagem] = useState(null);

  const handleUpload = () => {
    const options = {
        title: 'Escolha uma imagem',
        storageOptions: {
          skipBackup: true,
          path: 'images',

        },
  }
  ImagePicker.showImagePicker(options, (response) => {
    if (response.didCancel) {
      console.log('Usuário cancelou a escolha da imagem');
    } else if (response.error) {
      console.log('Erro ao escolher a imagem: ', response.error);
    } else {
      setImagem(response.uri);
    }
  });
}
  return (
    <View>
      <Text></Text>
      {imagem && <Image source={{ uri: imagem }} style={{ width: 100, height: 100 }} />}
      <Button title="Escolher Imagem" onPress={handleUpload} />
    </View>
  );
};

export default ImageUploader;