import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'space-between',
      alignItems:'center',
      paddingVertical:100,
      paddingHorizontal:20,
    },
    pageTitle:{
      fontSize:25,
      fontWeight:'bold',
      fontStyle:'italic',
    },
    row:{
      flexDirection:'row',
    },
    button: {
      height:140,
      width:140,
      margin:15,
      alignItems:'center',
      justifyContent:'space-evenly',
      borderRadius: 10,
      backgroundColor: "lightgreen",
    },
    modal: {
      alignItems: 'center',
      backgroundColor: "#FFF",
      borderRadius: 10,
      paddingVertical: 30,
    },
    modalTxt: {
      color: "#000",
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    modalRow:{
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between",
    },
    modalInput:{
      height:35,
      width:"40%",
      margin:3,
      borderWidth:3,
      borderColor:"#0f0f0f",
      borderStyle:'solid',
      borderRadius:10,
    },
    modalBtn:{
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: "lightgreen",
      height:35,
      borderRadius: 10,
      paddingVertical: 5,
      paddingHorizontal: 10

    },
  });

export default styles;