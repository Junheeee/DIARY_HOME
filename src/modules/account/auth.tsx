import Axios from "../utils/customAxiosUtil";
import { loginResultData, userLoginData } from "./authModel";

export const auth = {
  kakaoLogin: async (token: string) => {
    const res = await Axios.get(`/api/jwt/kakaoLogin?token=${token}`);
    return res.data;
  },

  kakaoLogin2: async (data: any) => {
    const token = data.queryKey[1];
    const res = await Axios.get(`/api/jwt/kakaoLogin?token=${token}`);
    return res.data;
  },

  kakaoLogout: async (token: string) => {
    const res = await Axios.get(`/api/jwt/kakaoLogout?token=${token}`);
    return res.data;
  },

  kakaoUnlink: async (token: string) => {
    const res = await Axios.get(`/api/jwt/kakaoUnlink?token=${token}`);
    return res.data;
  },

  userLogin: async (data: userLoginData) => {
    const res = await Axios.post(`/api/jwt/login`, data);
    return res.data;
  },
};
