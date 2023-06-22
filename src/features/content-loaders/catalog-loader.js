import React from 'react';
import ContentLoader from 'react-content-loader';

const CatalogMobile = () => (
  <ContentLoader viewBox="0 0 360 500" height={500} width={360} backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
    <rect x="0" y="20" rx="8" ry="8" width="156" height="125" />
    <rect x="0" y="170" rx="0" ry="0" width="156" height="18" />
    <rect x="0" y="195" rx="0" ry="0" width="120" height="20" />
    <rect x="166" y="20" rx="8" ry="8" width="156" height="125" />
    <rect x="166" y="170" rx="0" ry="0" width="156" height="18" />
    <rect x="166" y="195" rx="0" ry="0" width="120" height="20" />
    <rect x="0" y="250" rx="8" ry="8" width="156" height="125" />
    <rect x="0" y="400" rx="0" ry="0" width="156" height="18" />
    <rect x="0" y="425" rx="0" ry="0" width="156" height="20" />
    <rect x="166" y="250" rx="8" ry="8" width="156" height="125" />
    <rect x="166" y="400" rx="0" ry="0" width="156" height="18" />
    <rect x="166" y="425" rx="0" ry="0" width="120" height="20" />
  </ContentLoader>
);

const CatalogDesktop = () => (
  <ContentLoader
    viewBox="0 0 600 500"
    height={500}
    width={600}
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    speed={2}
  >
    <rect x="0" y="20" rx="8" ry="8" width="156" height="125" />
    <rect x="0" y="170" rx="0" ry="0" width="156" height="18" />
    <rect x="0" y="195" rx="0" ry="0" width="120" height="20" />
    <rect x="166" y="20" rx="8" ry="8" width="156" height="125" />
    <rect x="166" y="170" rx="0" ry="0" width="156" height="18" />
    <rect x="166" y="195" rx="0" ry="0" width="120" height="20" />
    <rect x="332" y="20" rx="8" ry="8" width="156" height="125" />
    <rect x="332" y="170" rx="0" ry="0" width="156" height="18" />
    <rect x="332" y="195" rx="0" ry="0" width="156" height="20" />
    <rect x="0" y="250" rx="8" ry="8" width="156" height="125" />
    <rect x="0" y="400" rx="0" ry="0" width="156" height="18" />
    <rect x="0" y="425" rx="0" ry="0" width="156" height="20" />
    <rect x="166" y="250" rx="8" ry="8" width="156" height="125" />
    <rect x="166" y="400" rx="0" ry="0" width="156" height="18" />
    <rect x="166" y="425" rx="0" ry="0" width="120" height="20" />
    <rect x="332" y="250" rx="8" ry="8" width="156" height="125" />
    <rect x="332" y="400" rx="0" ry="0" width="156" height="18" />
    <rect x="332" y="425" rx="0" ry="0" width="120" height="20" />
  </ContentLoader>
);

const CatalogLoader = () => {
  const width = window.screen.width;
  return <>{width < 600 ? <CatalogMobile /> : <CatalogDesktop />}</>;
};

export default CatalogLoader;
