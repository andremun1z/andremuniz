import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.center}>
      <Text style={styles.text}>Futevôlei: Como Jogar</Text>
        <Text style={styles.text}>
          O futevôlei é um esporte jogado na areia, combinando futebol e vôlei. Disputado em duplas, o objetivo é passar a bola por cima da rede usando apenas pés, cabeça, coxas, ombros e peito – mãos e braços são proibidos.
        </Text>

        <Text style={styles.sectionTitle}>Regras Básicas:</Text>

        <Text style={styles.text}>✅ Até 3 toques por equipe antes de devolver a bola.</Text>
        <Text style={styles.text}>✅ Um jogador pode dar no máximo 2 toques consecutivos.</Text>
        <Text style={styles.text}>✅ A rede tem 2,20m para homens e 2,00m para mulheres.</Text>
        <Text style={styles.text}>✅ O jogo vai até 18 ou 21 pontos, com vantagem de 2 pontos.</Text>
        <Text style={styles.text}>✅ O saque é feito com os pés ou joelho.</Text>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#90EE90'
  },
  text: {
    color: 'black',
    fontSize: 17,
  },
  center: {
    width: 300,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "white",
  },
});