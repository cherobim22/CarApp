import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    isLoadingContainer: {
      opacity: 0.2,
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      textAlign: 'center',
      paddingTop: 30,
      paddingBottom: 30,
      backgroundColor: '#FF0000',
      color: '#FFFFFF'
    },
    date: {
      fontSize: 20,
      fontStyle: 'italic',
      color: '#0000FF',
      textAlign: 'center',
      marginVertical: 30,
    },
    logo: {
      width: '100%',
      height: 200,
      resizeMode: 'contain'
    },
    btn: {
      marginLeft: 20
    },
    label: {
      marginHorizontal: 10
    },
    input: {
      borderColor: '#cecece',
      borderWidth: 1,
      borderRadius: 5,
      marginHorizontal: 10
    },
    activityIndicator: {
      position: 'absolute',
      top: 0,
      left: 0,
      right:0,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    }
  
  });

  export default styles;