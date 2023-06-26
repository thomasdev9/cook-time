import Pizza from '../shared/assets/categories-icons/pizza.png';
import Breakfast from '../shared/assets/categories-icons/breakfast.png';
import Burger from '../shared/assets/categories-icons/burger.png';
import Dessert from '../shared/assets/categories-icons/desert.png';
import FishFood from '../shared/assets/categories-icons/fish-food.png';
import Salad from '../shared/assets/categories-icons/salad.png';
import Spaghetti from '../shared/assets/categories-icons/spaghetti.png';
import Steak from '../shared/assets/categories-icons/steak.png';
import Sushi from '../shared/assets/categories-icons/sushi.png';
import Vegan from '../shared/assets/categories-icons/vegan.png';

const categoriesIcons = {
  pizza: Pizza,
  breakfast: Breakfast,
  burger: Burger,
  dessert: Dessert,
  fishfood: FishFood,
  salad: Salad,
  spaghetti: Spaghetti,
  steak: Steak,
  sushi: Sushi,
  vegan: Vegan,
};

export const getCategoryIcon = (iconName) => {
  return categoriesIcons[iconName];
};

export const getRecipeId = (uri) => {
  if (uri === '') return 'undefined';
  const id = uri.split('#recipe_');
  if (id?.length > 1) return id[1];
  return 'undefined';
};

export const getRecipeData = (recipe) => {
  return {
    title: recipe?.label,
    image: recipe?.image,
    totalTime: recipe?.totalTime,
    cuisineType: recipe?.cuisineType[0],
    id: getRecipeId(recipe?.uri),
  };
};

export const getSingleRecipeData = (recipe) => {
  return {
    title: recipe?.label,
    image: recipe?.images?.REGULAR?.url,
    totalTime: recipe?.totalTime,
    cuisineType: recipe?.cuisineType[0],
    ingredients: recipe?.ingredients,
    healthLabels: recipe?.healthLabels,
    digest: recipe?.digest,
  };
};

export const formatTime = (totalTime) => {
  if (totalTime === 0) {
    return '5m';
  } else if (totalTime < 60) {
    return `${totalTime}m`;
  } else {
    const hours = Math.floor(totalTime / 60);
    const minutes = totalTime % 60;
    return `${hours}h ${minutes}m`;
  }
};

export const formatIngredients = (ingredients) => {
  return ingredients?.map((ingredient) => ({
    image: ingredient?.image,
    label: ingredient?.food,
    value: `${ingredient?.quantity} ${ingredient.measure === '<unit>' ? '' : ingredient.measure}`,
  }));
};

export const formatHealthyLabels = (healthLabels) => {
  return healthLabels?.map((label) => ({
    label: label,
  }));
};

export const formatDigest = (digest) => {
  return digest?.map((item) => ({
    label: item?.label,
    value: `${Math.round(item?.total)} ${item?.unit}`,
  }));
};

export const formatRecommendations = (data) => {
  return [data.recommended, data.recently, data.popular, data.trending];
};
