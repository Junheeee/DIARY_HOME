import { useMutation, useQuery } from "react-query";
import { auth } from "../../modules/account/auth";

export function useKakaoLogin() {
  const mutation = useMutation(auth.kakaoLogin);
  return mutation;
}

export function useKakaoLogin2(token: string) {
  const query = useQuery(["kakaoLogin", token], auth.kakaoLogin2, {
    staleTime: 5000,
    cacheTime: Infinity,
    enabled: false,
  });
  return query;
}

export function useKakaoLogout() {
  const mutation = useMutation(auth.kakaoLogout);
  return mutation;
}

export function useKakaoUnlink() {
  const mutation = useMutation(auth.kakaoUnlink);
  return mutation;
}

export function useUserLogin() {
  const mutation = useMutation(auth.userLogin);
  return mutation;
}
