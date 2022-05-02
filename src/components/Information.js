import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Information = () => {
  return (
    <View style={styles.info}>
      <Text style={styles.textInfo}>
        Los trastornos de la conducta alimentaria son afecciones graves de la
        salud mental, no son un estilo de vida de elección propia. Si bien, la
        alimentación nos rodea hace que se agrave la detección y la recuperación
        sea más difícil.
      </Text>
      <Text style={styles.textInfo}>
        Por eso, con nuestra App queremos ayudarte a superarlo y a darte
        facilidades para poder llegar a tu objetivo. Está dividida en dos
        bloques, el primero "Mi asesoramiento" es un espacio especializado para
        tí, donde pondremos objetivos, talleres, agenda y plan nutricional. En
        el segundo bloque, "Mi tratamiento" te explicaremos el tratamiento que
        seguiremos, dependiendo de tu estado.
      </Text>
      <Text style={styles.textInfo}>
        Estamos por y para tí, por lo que cualquier duda que tengas tienes un
        servicio 24 horas de dudas y consultas con nuestros profesionales.
        Llámanos no lo dudes, que juntos podemos superarlo.
      </Text>
    </View>
  );
};

export default Information;

const styles = StyleSheet.create({
  info: {
    backgroundColor: '#c31d6a',
    borderRadius: 14,
    margin: 10,
    padding: 10,
  },
  textInfo: {
    color: 'white',
  },
});
