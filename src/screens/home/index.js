import { Text, View, TouchableOpacity, TextInput } from 'react-native';
import { useContext, useState } from 'react';
import Modal from 'react-native-modal';
import { AuthContext } from '../../contexts/auth';
import { useNavigation } from "@react-navigation/native";
import { AntDesign, FontAwesome, Ionicons } from '@expo/vector-icons';
import styles from './styles';

export default function Home() {

  const [exitModalVisible, setExitModalVisible] = useState(false);
  const [searchModalVisible, setSearchModalVisible] = useState(false);
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();
  const [song, setSong] = useState('');
  function searchHandler() {
    setSearchModalVisible(!searchModalVisible)
    navigation.navigate("Search", {song:song});
  }

  return (
    <View style={styles.screen}>
      <Modal isVisible={searchModalVisible} onRequestClose={() => setSearchModalVisible(!searchModalVisible)}>
        <View style={styles.modal}>
          <Text style={styles.modalTxt}>Buscar uma música:</Text>
          <View style={styles.modalRow}>
            <TextInput
              style={styles.modalInput}
              placeholder='Música'
              returnKeyType='send'
              value={song}
              onChangeText={(s) => setSong(s)}
            />
            <View>
              <TouchableOpacity title="Salvar"
                onPress={() => {
                  searchHandler();
                }}>
                <View style={styles.modalBtn}>
                  <FontAwesome name="search" size={10} color="#fff" />
                  <Text style={{ color: 'white', marginLeft: 3 }}>Buscar</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <Modal isVisible={exitModalVisible} onRequestClose={() => setExitModalVisible(!exitModalVisible)}>
        <View style={styles.modal}>
          <Text style={styles.modalTxt}>Deseja sair do aplicativo?</Text>
          <View style={styles.modalRow}>
            <TouchableOpacity title="Sair"
              onPress={() => {
                setExitModalVisible(!exitModalVisible);
                navigation.popToTop();
              }}>
              <View style={styles.modalBtn}>
                <Text style={{ color: 'white', marginLeft: 3 }}>Sair</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity title="Cancelar"
              onPress={() => {
                setExitModalVisible(!exitModalVisible);
              }}>
              <View style={styles.modalBtn}>
                <Text style={{ color: 'white', marginLeft: 3 }}>Cancelar</Text>
              </View>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
      <Text style={styles.pageTitle}>Bem vindo ao rAppertory, {user.username}!</Text>
      <View>
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setSearchModalVisible(true)}
          >
            <FontAwesome name="search" size={40} color="#000" />
            <Text style={styles.gridText}>Buscar cifras</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <AntDesign name="save" size={50} color="#000" />
            <Text style={styles.gridText}>Meus repertórios</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.row}>
          <TouchableOpacity style={styles.button}>
            <AntDesign name="setting" size={50} color="#000" />
            <Text style={styles.gridText}>Configurações</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => setExitModalVisible(!exitModalVisible)}>
            <Ionicons name="exit-outline" size={60} color="black" />
            <Text style={styles.gridText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}