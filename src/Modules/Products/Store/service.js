import API from "../configs/api";
import apiMethod from "@utility/ApiMethod";

export const getListProducts = ({ payload }) => {
  return apiMethod.get(API.GET_LIST_PRODUCTS);
};
