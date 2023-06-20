import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Wrapper from '../features/ui/wrapper';
import Home from '../pages/home';
import Categories from '../pages/categories';
import Recipes from '../pages/recipes';
import SingleRecipe from '../pages/single-recipe';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/recipe" element={<SingleRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
