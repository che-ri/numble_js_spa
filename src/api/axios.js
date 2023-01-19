import axios from "axios";

const instance = axios.create({
  baseURL: process.env.NUMBER_API,
  timeout: 3000,
  header: {},
});

//요청
instance.interceptors.request.use(
  function (config) {
    console.log(`✅ api url ::: ${config.url}, header ::: ${config.headers}, data ::: ${config.data}`);

    return config;
  },
  function (error) {
    console.log(`❌ request error ::: ${error}`);
    return Promise.reject(error);
  }
);

//응답
instance.interceptors.response.use(
  function (response) {
    console.log(`✅ response ::: ${JSON.stringify(response.data)}`);

    return response;
  },
  function (error) {
    console.log(`❌ error ::: ${error}`);
    return Promise.reject(error);
  }
);

export default instance;
