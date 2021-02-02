import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,TextInput} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
       <TextInput  
                    style={styles.TextInput}  
                    placeholder="Inserez votre url"  
                    
                />  
      <Text style={styles.Tex}>Entrez une url à reduire</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TextInput: {
    height: 40,
    backgroundColor: 'azure',
     fontSize: 20,
     marginBotton: 10,
  }
 
});
