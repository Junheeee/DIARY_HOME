import { useMutation } from "react-query";
import { auth } from "../../modules/account/auth";

export function useKakaoLogin() {
  const mutation = useMutation(auth.kakaoLogin);
  return mutation;
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
