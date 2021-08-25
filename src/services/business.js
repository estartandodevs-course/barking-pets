/* eslint-disable indent */

import { allBusiness } from "./api";

export const getBusinessById = (id) => {
  const business = allBusiness.find((item) => id === item.id);
  return business;
};

function makeLocationString(business) {
  return `${business.uf} - ${business.municipio}`;
}

export const getAllBusinessFiltered = (category, query) => {
  const filteredByCategory = category
    ? allBusiness.filter((item) => {
        return item.categoria.includes(category);
      })
    : allBusiness;
  const filteredByQuery = filteredByCategory.filter((item) => {
    const location = makeLocationString(item);
    return location.toLowerCase().includes(query?.toLowerCase());
  });

  return filteredByQuery;
};

export function getLocations(category, query) {
  const filteredBussiness = getAllBusinessFiltered(category, query);
  const filteredLocations = [];
  return filteredBussiness.filter((business) => {
    const locationId = makeLocationString(business);
    if (filteredLocations.includes(locationId)) return false;
    filteredLocations.push(locationId);
    return true;
  });
}
