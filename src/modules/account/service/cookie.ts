import Cookies, { CookieAttributes, CookiesStatic } from "js-cookie";

const CookieStorageBuilder = (cookies: CookiesStatic) => ({
  setCookie: (key: string, value: string, options?: CookieAttributes) =>
    cookies.set(key, value, {
      path: "/",
      secure: process.env.NODE_ENV === "production" ? false : false,
      sameSite: "Lax",
      ...options,
    }),
  getCookie: (key: string) => cookies.get(key),
  removeCookie: (key: string) => cookies.remove(key),
});

export const cookieStorage = CookieStorageBuilder(Cookies);

const COOKIE_BASE_NAME = "diary";

export const COOKIE_ACCESS_TOKEN = `${COOKIE_BASE_NAME}_accs`;
export const COOKIE_REFRESH_TOKEN = `${COOKIE_BASE_NAME}_rfrs`;
