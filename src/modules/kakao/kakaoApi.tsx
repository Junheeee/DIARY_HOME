import Axios from "../../modules/utils/customAxiosUtil";

export const kakaoAPI = {
  kakaoLogin: async (token: string) => {
    return await Axios.post(`/api/kakao/login?token=${token}`);
  },
  kakaoLogout: async (param: any) => {
    return await Axios.post(`/api/kakao/logout`);
  },
};
