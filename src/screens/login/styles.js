import reactDom from 'react-dom';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    screen:{
      flex:1,
      backgroundColor: '#fff',
      alignItems:'center',
      justifyContent:'center',
      padding:0,
    },
    appname:{
      fontSize:48,
      fontWeight:'bold',
      fontStyle:'italic',
      height:200,
    },
    grid:{
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center',
      margin:0,
    },
    container:{
      width:230
    },
    placeholder:{
      width:"95%",
      height:40,
      margin:3,
      padding:6,
      borderWidth:3,
      borderColor:"#0f0f0f",
      borderStyle:'solid',
      borderRadius:10,

    },
    button: {
      width:"30%",
      height:86,
      alignItems:'center',
      justifyContent:'center',
      borderRadius: 10,
      backgroundColor: "lightgreen",
    },
  });

export default styles;