export interface userLoginData {
  userId: string;
  userPswd: string;
}

export interface loginResultData {
  accessToken: string;
  refreshToken: string;
  userId: string;
  cstmrSno: number;
}

export interface LoginData {
  accessToken: string;
  refreshToken: string;
  expires_in: number;
  exp: string;
  scope: string | string[];
  jti: string;
  userId: string;
  cstmrSno: number;
  auth: string;
  encodedInfo: string | null;
}

export interface useLoginModel {
  isLogin: boolean;
  onLogin: () => void;
  onLogout: () => void;
}
