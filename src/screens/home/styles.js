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
      fontSize:30,
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
      justifyContent:'center',
      borderRadius: 10,
      backgroundColor: "lightgreen",
    },

  });

export default styles;