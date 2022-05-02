import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import colors from '../utils/colors';

const Ingredient = ({ingredients}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.ingredientTitleText}>{ingredients.nameIngredient}</Text>
      </View>
      <View style={styles.ingredient}>
        <Text style={styles.ingredientText}>{ingredients.cant}</Text>
      </View>
    </View>
  );
};

export default Ingredient;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  ingredientTitleText: {
    color: '#c31d6a',
    fontWeight: "bold",
  },
  ingredientText: {
    color: '#c31d6a',
  },
  ingredient: {
    paddingBottom: 15,
    borderBottomColor: colors.BG_SB,
    borderBottomWidth: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
