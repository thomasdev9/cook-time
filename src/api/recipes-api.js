import { api } from './configs/axios-configs';
import { defineCancelApiObject } from './configs/axios-utils';

const appId = '3351199a';
const appKey = '3e086fdd9443fa0c0d3b665cd8c76ebb';

export const RecipesAPI = {
  getRecipes: async function ({ query, cancel = false }) {
    const response = await api.request({
      method: 'GET',
      params: {
        type: 'public',
        q: query,
        app_id: appId,
        app_key: appKey,
      },
      signal: cancel ? cancelApiObject[this.getRecipes.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  getRecipesByURI: async function ({ uri, cancel = false }) {
    const response = await api.request({
      url: '/by-uri/',
      method: 'GET',
      params: {
        type: 'public',
        uri: uri,
        app_id: appId,
        app_key: appKey,
      },
      signal: cancel ? cancelApiObject[this.getRecipesByURI.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
  getRecipeById: async function ({ id, cancel = false }) {
    const response = await api.request({
      url: `/${id}/`,
      method: 'GET',
      params: {
        type: 'public',
        app_id: appId,
        app_key: appKey,
      },
      signal: cancel ? cancelApiObject[this.getRecipeById.name].handleRequestCancellation().signal : undefined,
    });
    return response.data;
  },
};

const cancelApiObject = defineCancelApiObject(RecipesAPI);
