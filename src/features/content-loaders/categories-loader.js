import React from 'react';
import ContentLoader from 'react-content-loader';

const CategoriesMobile = () => (
  <ContentLoader
    speed={2}
    width={320}
    height={114}
    viewBox="0 0 320 114"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="5" ry="5" width="190" height="32" />
    <rect x="0" y="40" rx="16" ry="16" width="100" height="32" />
    <rect x="105" y="40" rx="16" ry="16" width="100" height="32" />
    <rect x="210" y="40" rx="16" ry="16" width="100" height="32" />
  </ContentLoader>
);

const CategoriesDesktop = () => (
  <ContentLoader
    speed={2}
    width={600}
    height={114}
    viewBox="0 0 600 114"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="5" ry="5" width="190" height="32" />
    <rect x="0" y="40" rx="16" ry="16" width="100" height="32" />
    <rect x="105" y="40" rx="16" ry="16" width="100" height="32" />
    <rect x="210" y="40" rx="16" ry="16" width="100" height="32" />
    <rect x="320" y="40" rx="16" ry="16" width="100" height="32" />
  </ContentLoader>
);

const CategoriesLoader = () => {
  const width = window.screen.width;
  return <>{width > 600 ? <CategoriesDesktop /> : <CategoriesMobile />}</>;
};

export default CategoriesLoader;
