import axios from "axios";

const request = axios.create({
  // baseURL: "http://localhost:8080",
  baseURL: '/'
  // baseURL: "http://api.cpengx.cn/metashop",
});

request.interceptors.response.use(
  (response) => {
    if (response.status == 200) {
      return response.data;
    } else {
      return response;
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getHomepage = (params) => {
  return request({
    method: "GET",
    url: "/api/homepage",
    params,
  });
};

export const getProducts = (params) => {
  return request({
    method: "GET",
    url: "/api/products",
    params,
  });
};
