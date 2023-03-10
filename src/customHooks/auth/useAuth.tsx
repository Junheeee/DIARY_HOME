import { useMutation, useQuery } from "react-query";
import { auth } from "../../modules/account/auth";
import { useLoginModel } from "../../modules/account/authModel";
import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

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

export function useRegister() {
  const mutation = useMutation(auth.register);
  return mutation;
}

export const useLogin = create(
  devtools(
    persist(
      (set) => ({
        isUseLogin: false,
        onLogin: () => set((state: any) => ({ isUseLogin: true })),
        onLogout: () => set((state: any) => ({ isUseLogin: false })),
      }),
      {
        name: "isLogin-storage",
      }
    )
  )
);
