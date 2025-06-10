import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { useBuscaCEP } from '@/hooks/useBuscaCEP'; // Importa o hook 

export default function BuscaCEP() {
  const { cep, setCep, endereco, buscarCEP } = useBuscaCEP(); 

  return (
    <View style={styles.container}>
      <Text>Consulte seu CEP</Text>

      <TextInput
        style={styles.textInput}
        value={cep}
        onChangeText={setCep}
        placeholder="Digite o seu CEP para registro"
        keyboardType="numeric"
      />

      <Text>{cep}</Text>

      <Button
        title="Buscar"
        onPress={buscarCEP}
        color= "#4CAF50"
      />

      {endereco.logradouro !== '' && (
        <View style={styles.resultado}>
          <Text>Logradouro: {endereco.logradouro}</Text>
          <Text>Bairro: {endereco.bairro}</Text>
          <Text>Cidade: {endereco.localidade}</Text>
          <Text>Estado: {endereco.uf}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#90EE90', // Alterado aqui
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  textInput: {
    width: '80%',
    borderWidth: 1,
    borderColor: 'gray',
    padding: 8,
    marginVertical: 10,
  },
  resultado: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 8,
  },
});
