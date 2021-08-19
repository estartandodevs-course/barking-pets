/* eslint-disable indent */

import { allBusiness } from "./api";

export const getBusinessById = (id) => {
  const business = allBusiness.find((item) => id === item.id);
  return business;
};

export const getAllBusinessFiltered = (category, query) => {
  const filteredByCategory = category
    ? allBusiness.filter((item) => {
        return item.categoria.includes(category);
      })
    : allBusiness;
  const filteredByQuery = filteredByCategory.filter((item) => {
    const location = `${item.uf} ${item.municipio}`;
    return location.toLowerCase().includes(query.toLowerCase());
  });
  console.log(category, query);
  return filteredByQuery;
};
