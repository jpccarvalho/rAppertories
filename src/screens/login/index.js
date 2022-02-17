import { StatusBar } from 'expo-status-bar';
import { useState, useContext, useRef } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { AuthContext } from '../../contexts/auth';
import styles from './styles'


export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const ref_input = useRef();
  const { signIn } = useContext(AuthContext);
  function loginHandler(){
    
    if(username!=='' && password !== ''){
      signIn(username, password);
    }
    else{
      //Adicionar modal
      console.log("Digite suas credenciais!")
    }
  }


  return (
    /*Adicionar icone no botão login*/
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <Text style={styles.appname}>rAppertory</Text>
      <View style={styles.grid}>
        <View style={styles.container}>
          <TextInput
            placeholder='Usuário'
            autoCapitalize='none'
            autoFocus={true}
            returnKeyType="next"
            style={styles.placeholder}
            value={username}
            onChangeText={(user) => setUsername(user)}
            onSubmitEditing={() => ref_input.current.focus()}
          />
          <TextInput
            placeholder='Senha'
            secureTextEntry={true}
            returnKeyType='send'
            style={styles.placeholder}
            value={password}
            onChangeText={(pw) => setPassword(pw)}
            ref={ref_input}
          /> 
        </View>
        
        <TouchableOpacity style={styles.button} onPress={loginHandler}>
          <AntDesign name="login" size={40} color="black" />
        </TouchableOpacity>
      </View>
    </View>
    
  );
}

/**/