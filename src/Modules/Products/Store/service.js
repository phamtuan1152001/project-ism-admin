import API from "../configs/api";
import apiMethod from "@utility/ApiMethod";

export const getListProducts = ({ payload }) => {
  return apiMethod.get(API.GET_LIST_PRODUCTS);
};

export const deleteProduct = ({ payload }) => {
  // const { id } = payload || {};
  return apiMethod.delete(API.DELETE_PRODUCT + `/${payload}`);
};
