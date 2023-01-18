import Axios from "../../modules/utils/customAxiosUtil";

export const kakaoAPI = {
  kakaoLogin: async (token: string) => {
    return await Axios.get(`/api/kakao/login?token=${token}`);
  },
  kakaoLogout: async (token: string) => {
    return await Axios.get(`/api/kakao/logout?token=${token}`);
  },
  kakaoUnlink: async (token: string) => {
    return await Axios.get(`/api/kakao/unlink?token=${token}`);
  },
};
