import { Text, View, TouchableOpacity } from 'react-native';
import styles from './styles'

export default function Home() {
  return (
   <View style={styles.screen}>
      <Text style={styles.pageTitle}>Bem vindo, user!</Text>
      <View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text>Buscar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Repertórios</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text>Configurações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}