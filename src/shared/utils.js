import Pizza from '../shared/assets/categories-icons/pizza.png';
import Breakfast from '../shared/assets/categories-icons/breakfast.png';
import Burger from '../shared/assets/categories-icons/burger.png';
import Desert from '../shared/assets/categories-icons/desert.png';
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
  desert: Desert,
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

export const getRecipeData = (recipe) => {
  return {
    title: recipe?.label,
    image: recipe?.image,
    totalTime: recipe?.totalTime,
    cuisineType: recipe?.cuisineType[0],
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
