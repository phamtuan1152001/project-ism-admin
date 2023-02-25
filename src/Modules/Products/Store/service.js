import API from "../configs/api";
import apiMethod from "@utility/ApiMethod";

export const getListProducts = ({ payload }) => {
  return apiMethod.get(API.GET_LIST_PRODUCTS);
};

export const deleteProduct = ({ payload }) => {
  // const { id } = payload || {};
  return apiMethod.delete(API.DELETE_PRODUCT + `/${payload}`);
};

export const uploadImgProduct = (payload) => {
  return apiMethod.post(API.UPLOAD_PRODUCT, payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const createProduct = (payload) => {
  return apiMethod.post(API.CREATE_PRODUCT, payload);
};
