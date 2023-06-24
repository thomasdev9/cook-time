import ChipComponent from '../../features/ui/chip-component';
import { getRecipeData } from '../utils';
import CardComponent from '../../features/ui/card-component';

export const categoriesChips = [
  <ChipComponent label="pizza" key={1} />,
  <ChipComponent label="steak" key={2} />,
  <ChipComponent label="salad" key={3} />,
  <ChipComponent label="burger" key={4} />,
  <ChipComponent label="dessert" key={5} />,
  <ChipComponent label="vegan" key={6} />,
  <ChipComponent label="sushi" key={7} />,
];

export const getRecipesCards = (recipes) => {
  const cards = recipes?.map((recipe, index) => {
    const data = getRecipeData(recipe?.recipe);
    return <CardComponent {...data} key={index} />;
  });
  return cards;
};
