import Axios from "../../modules/utils/customAxiosUtil";

export const accountAPI = {
  checkLogin: async (param: any) => {
    return await Axios.post(`/api/cstmr/login`, {
      userId: param.userId,
      userPswd: param.userPswd,
    });
  },
};
