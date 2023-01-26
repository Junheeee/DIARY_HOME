import decode from "jwt-decode";
import moment from "moment";
import { HOST } from "../../../configs/constants";
import { LoginData } from "../authModel";
import {
  cookieStorage,
  COOKIE_ACCESS_TOKEN,
  COOKIE_REFRESH_TOKEN,
} from "./cookie";

const JWT_FLEFIX = "diary ";

export const checkTokenExpired = (token?: string) => {
  const decodedToken = decode<LoginData>(token as string);

  if (parseInt(decodedToken.exp) < moment().unix()) {
    return true;
  }

  return false;
};

export const getAccessToken = async () => {
  let token = cookieStorage.getCookie(COOKIE_ACCESS_TOKEN);

  if (!token || token == undefined || token == "undefined") {
    return "";
  }

  if (checkTokenExpired(token)) {
    //freshtoken 으로 재발급 진행.
    const refreshToken = getRefreshToken();

    // const isRefresh = store.getState()?.authState?.isRefresh;

    if (refreshToken) {
      //   if (!store.getState()?.authState?.isRefresh) {
      const decodeToken = decode<LoginData>(token as string);
      const cstmrSno: number = decodeToken.cstmrSno;

      const { data, errorCode } = await refreshTokenAPI(cstmrSno, refreshToken);
      if (errorCode === "-101") {
        cookieStorage.setCookie(COOKIE_REFRESH_TOKEN, "");
      }
      //REFHRESTH 토큰 넣기
      cookieStorage.setCookie(COOKIE_ACCESS_TOKEN, data.refreshToken);
      token = data.refreshToken;

      //   }
    }
  }

  return JWT_FLEFIX + token;
};

const refreshTokenAPI = async (cstmrSno: number, refreshToken: string) => {
  const result = await fetch(HOST + "api/acnt/jwt/refresh", {
    method: "post",
    body: JSON.stringify({
      cstmrSno: cstmrSno,
      refreshToken: refreshToken,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .catch((error) => {});

  return result;
};

export const getRefreshToken = () => {
  const token = cookieStorage.getCookie(COOKIE_REFRESH_TOKEN);

  if (
    !token ||
    token == undefined ||
    token == "undefined" ||
    checkTokenExpired(token)
  )
    return "";

  return token;
};
