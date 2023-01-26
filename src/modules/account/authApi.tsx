import Axios from "../utils/customAxiosUtil";
import { UserAccount } from "./authModel";

export const authApi = {
  checkLogin: async (param: any) => {
    // return await Axios.post('`/api/cstmr/login`', {
    return await Axios.post("api/cstmr/login", {
      userId: param.userId,
      userPswd: param.userPswd,
    });
  },
  userLogin: async (data: UserAccount) => {
    return await Axios.post(`/api/jwt/login`, data);
  },
};
