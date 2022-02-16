import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles'

export default function Login() {
  return (
    <View style={styles.screen}>
      <StatusBar style="auto" />
      <Text style={styles.appname}>rAppertory</Text>
      <View style={styles.grid}>
        <View style={styles.container}>
          <TextInput placeholder='Username' style={styles.placeholder}/>
          <TextInput placeholder='Password' style={styles.placeholder}/> 
        </View>
        <TouchableOpacity style={styles.button}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
    
  );
}

/**/