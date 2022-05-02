import { StyleSheet, Button, Text, View, Image, ImageBackground, ScrollView } from 'react-native';
import React from 'react';
import Information from '../Information';
import MiAppScreen from './MiAppScreen';

const imageFondo = {
  uri: 'https://images.unsplash.com/photo-1607457561901-e6ec3a6d16cf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cGlua3xlbnwwfHwwfHw%3D&w=1000&q=80.png',
};
export const HomePage = ({ navigation }) => {
  return (
    <ScrollView>
    <View style={styles.imageFondo}>
      <ImageBackground source={imageFondo} resizeMode="repeat">
        <View style={styles.homie}>
          <Image
            style={styles.logo}
            source={{
              uri: 'https://lasea.es/wp-content/uploads/2021/05/Ansiedad_ayudar_03.jpg',
            }}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.titleContainer}>TACAPP</Text>
          <Text style={styles.subtitleContainer}>Mi App de confianza</Text>
          <Information />
        </View>
        <View style={styles.buttonEnter}>
          <Button 
            title="ENTRAR" 
            color="#c31d6a"
            onPress={() => navigation.navigate('MiApp')}
            />
        </View>
      </ImageBackground>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  buttonEnter: {
    alignSelf: 'center',
    elevation: 35,
    width: '100%',
  },
  homie: {
    backgroundColor: 'pink',
    borderColor: '#c31d6a',
    borderRadius: 90,
    borderStyle: 'solid',
    borderWidth: 3,
    elevation: 15,
    margin: 10,
    padding: 10,
  },
  imageFondo: {
    backgroundColor: 'pink',
    height: '100%',
  },
  logo: {
    alignSelf: 'center',
    borderRadius: 140,
    height: 300,
    width: 300,
  },
  subtitleContainer: {
    color: '#c31d6a',
    fontSize: 19,
  },
  titleContainer: {
    color: '#c31d6a',
    fontSize: 49,
    fontWeight: 'bold',
  },
  textContainer: {
    alignItems: 'center',
  },
});
