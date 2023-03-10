import axios from "axios";
import { HOST } from "../../configs/constants";
import { getAccessToken } from "../account/service/jwtTokenUtil";

const clientInstance = axios.create({
  baseURL: HOST,
});

clientInstance.interceptors.request.use(
  async (config) => {
    let accessToken = await getAccessToken();

    // config.headers["Authorization"] = accessToken;
    if (config.headers) {
      config.headers["Authorization"] = accessToken;
    }

    // alert(JSON.stringify(config.headers));
    // store.dispatch({
    //   type: GLOBAL_LOADING,
    // });
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default clientInstance;
