import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useState} from 'react';
import recipes from '../utils/recipes';
import colors from '../utils/colors';
import CarrouselRecipes from './CarrouselRecipes';
import Information from './Information';
import Icon from 'react-native-vector-icons/FontAwesome5';

const HorizontalList = () => {
  const Trending = recipes.filter(recipe => recipe.category == 'Trending');
  const Recent = recipes.filter(recipe => recipe.category == 'Recent');
  const [favRecipes, setFavRecipes] = useState([]);

  const Favorite = recipes.filter(recipe => favRecipes.includes(recipe.id));
  return (
    <ScrollView>
      <Text style={styles.name}>TACATPP</Text>
      <Information/>
      <CarrouselRecipes
        recipesList={Trending}
        title="Mi asesoramiento"
        favRecipes={favRecipes}
        setFavRecipes={setFavRecipes}
        sizeRecipe="big"
      />
      <CarrouselRecipes
        recipesList={Recent}
        title="Mi Tratamiento"
        favRecipes={favRecipes}
        setFavRecipes={setFavRecipes}
        sizeRecipe="medium"
      />
      {Favorite.length > 0 && (
        <CarrouselRecipes
          recipesList={Favorite}
          title="Favorites"
          favRecipes={favRecipes}
          setFavRecipes={setFavRecipes}
          sizeRecipe="medium"
        />
      )}
      <Icon name="whatsapp" size={50} color="#c31d6a" style={styles.call}/>
    </ScrollView>
  );
};

export default HorizontalList;

const styles = StyleSheet.create({
  title: {
    color: colors.TITLE,
    fontSize: 25,
    paddingBottom: 10,
  },
  name: {
    color: colors.TITLE,
    fontSize: 45,
    fontWeight: 'bold',
    paddingTop: 15,
    textAlign: 'center',
  },
  call: {
    backgroundColor: 'pink',
    bottom: 40,
    borderRadius: 25,
    padding: 5,
    position: 'absolute',
    right: 20,
  },
});
