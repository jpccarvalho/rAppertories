import { Text, View, TouchableOpacity } from 'react-native';
import { useContext } from 'react';
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from "@react-navigation/native";
import styles from './styles'

export default function Home() {

  const { user } = useContext(AuthContext);
  const navigation = useNavigation();

  return (

    /*Adicionar icone nos botões do grid*/
   <View style={styles.screen}>
      <Text style={styles.pageTitle}>Bem vindo, {user.username}!</Text>
      <View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text>Buscar cifras</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text>Meus repertórios</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <Text>Configurações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigation.popToTop()}>
            <Text>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}