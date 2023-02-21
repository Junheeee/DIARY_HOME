import Axios from "../utils/customAxiosUtil";
import { boardData, boardDelData } from "./boardModel";

export const boardApi = {
  boardList: async () => {
    const res = await Axios.get("/api/board/apple");
    return res.data.data;
  },

  boardAdd: async (data: boardData) => {
    const res = await Axios.put(`/api/board/add`, data);
    return res.data;
  },

  boardRemove: async (data: boardDelData) => {
    const res = await Axios.put(`/api/board/delete`, data);
    return res.data;
  },

  boardDetail: async (data: any) => {
    const boardSno = data.queryKey[1];
    const res = await Axios.get(`/api/board/detail?boardSno=${boardSno}`);
    return res.data;
  },

  boardSave: async (data: boardData) => {
    const res = await Axios.put(`/api/board/save`, data);
    return res.data;
  },
};
