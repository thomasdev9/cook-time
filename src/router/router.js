import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Wrapper from '../features/ui/wrapper';
import Home from '../pages/home';
import Categories from '../pages/categories';
import Recipes from '../pages/recipes';
import SingleRecipe from '../pages/single-recipe';
import NotFound from '../pages/not-found';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Wrapper />}>
          <Route index element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="recipes/:query" element={<Recipes />} />
          <Route path="/recipe/:id" element={<SingleRecipe />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
