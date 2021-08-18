import { allBusiness } from "./api";

export const getBusinessById = (id) => {
  const business = allBusiness.find((hotel) => id === hotel.id);
  return business;
};
