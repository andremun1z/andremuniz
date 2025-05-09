import { View, StyleSheet } from "react-native";
import { Link, Stack } from 'expo-router';

export default function NotFoundScreen () {
  return (
    <>
    <Stack.Screen options={{ title: 'Ops! Pagina Nao Encontrada'}}/> 
    <View style={  styles.container   }>
      <Link href="/about" style={styles.button}> 
      Saiba mais
        </Link>
        </View>
    </>
  );
}

const styles = StyleSheet.create({ 
  
  container:{
    flex: 1,
    
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#778899',
},
  text:{
    color: 'white',
  },
  button : { 
    fontSize: 20,
    textDecorationLine: 'underline',
    color: 'nfff'

  
  },

});