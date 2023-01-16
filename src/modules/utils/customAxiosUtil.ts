import axios from "axios";
import { HOST } from "../../configs/constants";

const clientInstance = axios.create({
  baseURL: HOST,
});

export default clientInstance;
