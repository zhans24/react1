import { StatusBar } from 'expo-status-bar';  
import React, { useState } from 'react';  
import { StyleSheet, Text, View, Switch, Button } from 'react-native';  

export default function App() {  
  const [isDarkMode, setIsDarkMode] = useState(false);  
  const [isTextVisible, setIsTextVisible] = useState(true);  

  const toggleTheme = () => {  
    setIsDarkMode((prevMode) => !prevMode);  
  };  

  const showText = () => {  
    setIsTextVisible(true);  
  };  

  const hideText = () => {  
    setIsTextVisible(false);  
  };  

  return (  
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#222' : '#fff' }]}>  
      <Switch   
        value={isDarkMode}   
        onValueChange={toggleTheme}   
        thumbColor={isDarkMode ? '#fff' : '#000'}  
        trackColor={{ false: '#ccc', true: '#444' }}  
        style={styles.switch}   
      />  

      {isTextVisible && (  
        <Text style={[styles.text, { color: isDarkMode ? '#fff' : '#000' }]}>  
          Hello World  
        </Text>  
      )}  

      <View style={styles.buttonContainer}>  
        <Button title="Show Text" onPress={showText} />  
        <Button title="Hide Text" onPress={hideText} />  
      </View>  
      
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />  
    </View>  
  );  
}  

const styles = StyleSheet.create({  
  container: {  
    flex: 1,  
    alignItems: 'center',  
    justifyContent: 'center',  
    paddingTop: 50,  
  },  
  switch: {  
    position: 'absolute',  
    top: 60,  
    left: 20,  
  },  
  text: {  
    fontSize: 24,  
    marginVertical: 20,  
    fontWeight: 'bold',  
  },  
  buttonContainer: {  
    flexDirection: 'row',  
    justifyContent: 'space-around',  
    width: '60%',  
    marginTop: 20,  
  },  
});  